let mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
  "type_post":{type:String,default:""},
  "describe":String,
  "title":{type:String,index:true},
  "thumbnail":String,
  "min_read":Number,
  "data":[{"type_content":String, "value":String}],
  "create_at":{type:Date,default:Date.now},
  "tags":[String],
  "views":{type:Number,default:0}
});

module.exports = mongoose.model("post", Post)
