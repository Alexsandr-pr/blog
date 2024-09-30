const S3Service = require('../services/S3Services');

class UploadController {
    async create(req, res) {
        try {
            const file = req.file; 
            const s3Service = new S3Service();

            const uploadResponse = await s3Service.uploadFile({
                name: file.originalname,
                data: file.buffer,
                mimetype: file.mimetype,
            });

            const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/blog/${file.originalname}`;

            res.json({ url: fileUrl });
        } catch (error) {
            console.error("Ошибка при загрузке файла на S3:", error);
            res.status(500).json({ message: "Ошибка при загрузке файла" });
        }
    }
}

module.exports = new UploadController();

