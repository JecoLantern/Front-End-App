const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ignSchema = new Schema({
    contentId: { type: String, required: true },
    headline: { type: String, required: true },
    authors: { type: [String], required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    tags: {type: String, required: true },
});

const ignContent = mongoose.model("ignContent", ignSchema);

module.exports = ignContent;