const mongoose = require('mongoose');
const Post = require("../models/Post");
const S3Service = require("../services/S3Services");

class PostController {
    async create(req, res) {
        const { title, description, tags } = req.body;
        let fileUrl = null;
        let contentBlocks = JSON.parse(req.body.contentBlocks);

        const s3Service = new S3Service();

        if (req.files && req.files.file) {
            const file = req.files.file;
            const uploadResponse = await s3Service.uploadFile({ ...file, name: `${file.name}` });
            fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/blog/${file.name}`;
        }

        for (const block of contentBlocks) {
            if (block.type === 'img' && block.image) {
                const imageBuffer = Buffer.from(block.image.split(',')[1], 'base64');
                const imageFile = {
                    name: `content-${Date.now()}.png`,
                    data: imageBuffer,
                    mimetype: 'image/png'
                };
                const uploadResponse = await s3Service.uploadFile(imageFile);
                block.image = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/blog/${imageFile.name}`;
            }
        }

        // Преобразуем теги в ObjectId
        let objectIdTags = [];

        if (tags && typeof tags === 'string') {
            try {
                const parsedTags = JSON.parse(tags);
                objectIdTags = parsedTags.map(tag => new mongoose.Types.ObjectId(tag));
            } catch (error) {
                console.error('Ошибка парсинга тегов:', error);
                return res.status(400).json({ message: 'Неправильный формат тегов' });
            }
        } else if (Array.isArray(tags)) {
            objectIdTags = tags.map(tag => new mongoose.Types.ObjectId(tag));
        }

        try {
            // Создаем пост с тегами
            const post = await Post.create({
                title,
                description,
                fileUrl,
                contentBlocks,
                tags: objectIdTags // Преобразуем массив тегов в ObjectId
            });

            await post.save();
            res.json(post);
        } catch (e) {
            console.error('Ошибка создания поста:', e);
            res.status(500).json({ message: 'Ошибка создания поста' });
        }
    }

    async getAll(req, res) {
        try {
            // Получаем параметр лимита из запроса, если он есть
            const limit = req.query.limit ? parseInt(req.query.limit) : null;
    
            // Создаем запрос
            let query = Post.find().populate('tags').sort({ createdAt: -1 }); // Сортируем по дате создания, от новых к старым
    
            // Если лимит передан, применяем его
            if (limit) {
                query = query.limit(limit);
            }
    
            // Выполняем запрос
            const posts = await query;
    
            return res.json(posts);
        } catch (e) {
            return res.status(500).json({ message: "Ошибка при получении постов" });
        }
    }

    async get(req, res) {
        try {
            const id = req.params.id;
            const post = await Post.findById(id).populate('tags'); // Загружаем информацию о тегах
            return res.json(post);
        } catch (e) {
            return res.status(500).json({ message: "Ошибка при получении поста" });
        }
    }

    async search(req, res) {
      
        try {
            const { search } = req.query;
            console.log(search)
            const posts = await Post.find({
                $or: [
                    { title: { $regex: search, $options: 'i' } }, 
                    { description: { $regex: search, $options: 'i' } }  
                ]
            }).populate('tags'); 
            
            return res.json(posts); 
        } catch (e) {
            console.error('Ошибка поиска постов:', e);
            return res.status(500).json({ message: 'Ошибка при поиске постов' });
        }
    }
}

module.exports = new PostController();