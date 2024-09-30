const Tag = require("../models/Tag");


class TagController {

    async create(req, res) {
        try {
            const { title } = req.body;
            const newTag = await Tag.create({title});
            await newTag.save();
            return res.status(200).json({message:"Тег создан"});
        } catch(e) {
            console.log(e)
           
        }
    }

    async get(req, res) {
        try {
            const id = req.params.id;
            const tags = await Tag.findById({_id: id});
            return res.json(tags)
        } catch(e) {
            console.log(e)
        }
    }
    
    async getAll(req, res) {
        try {
            const tags = await Tag.find();
            return res.json(tags)
        } catch(e) {
            console.log(e)
        }
    }
}
module.exports = new TagController;