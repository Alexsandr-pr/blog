const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    fileUrl: { type: String },
    contentBlocks: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag", required: true }]  // массив ссылок на теги
});

module.exports = model("Post", PostSchema);
