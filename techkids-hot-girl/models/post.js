const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CommnentSchema = new Schema({
    author: {type: String, required: true},
    content: {type: String, required: true}
},{
        _id:false
});


const PostSchema = new Schema({
    view: {type: Number, default: 0 } ,
    image: {type: String, required: true},
    like: {type: Number, default: 0 },
    author: {type: String, required: true},
    comments: [{
        author: {type: String, required: true},
        content: {type: String, required: true}, 
    }],
    title: {type: String, required: true},
    description: {type: String, required: true},
}, {
    timestamps:true //createdAt && updatedAt
})

module.exports = mongoose.model("Post", PostSchema);