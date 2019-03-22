const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ignSchema = new Schema({
    count: { type: Number },
    startIndex: {type: Number },
    data: { type: [Object] },
    content: { type: [Object] }
});

const ignContent = mongoose.model("ignContent", ignSchema);


const jsondata = require("../client/src/utils/content.json")
ignContent.deleteMany({}).then(() => {
    ignContent.insertMany(jsondata, function (err) { console.log(err + " errors. Data inserted!") })
})

module.exports = ignContent;