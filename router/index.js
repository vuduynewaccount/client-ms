let mongoose = require("mongoose");
let post=require("../model/post");
const express = require('express');
const router = express.Router();
// define the home page route

router.get('/', (req, res) => {
  res.render("home");
});
router.get('/post/:id',(req,res)=>{
  res.render('post')
})

router.get('/create', (req, res) => {
  res.render("create");
});
router.post('/create', (req, res) => {

  let title=req.body.title;
  let tags=req.body.tags.split(",");
  for(let i=0;i<tags.length;i++){
    tags[i]=tags[i].trim().toLowerCase();
  }
  let data=[];
  let temp=req.body.content.split("***");
  for(let i=0;i<temp.length;i++){
    let obj={
      type_content:temp[i].split(":::")[0].trim(),
      value:temp[i].split(":::")[1].trim()
    }
    data.push(obj)
  }
  // console.log(data)
  let min_read=parseInt(req.body.min_read);

  new post({
    type_post:req.body.type,
    describe:req.body.describe,
    thumbnail:req.body.thumbnail,
    title:title,
    tags:tags,
    data:data,
    min_read:min_read
  }).save(()=>{
    res.redirect('/')
  })
})

router.get('/admin',(req,res)=>{
  res.render('admin')
})
router.get('/inner-page', (req, res) => {
  res.render('inner-page')
});
router.get('/api-post/list', (req, res) => {
  post.find({},'-data',(err,docs)=>{
    res.json(docs);
  })
})
router.post('/api-post/create',(req,res)=>{
  let title=req.body.title;
  let tags=req.body.tags.split(",");
  for(let i=0;i<tags.length;i++){
    tags[i]=tags[i].trim().toLowerCase();
  }
  let data=[];
  let temp=req.body.content.split("***");
  for(let i=0;i<temp.length;i++){
    let obj={
      type_content:temp[i].split(":::")[0].trim(),
      value:temp[i].split(":::")[1].trim()
    }
    data.push(obj)
  }
  // console.log(data)
  let min_read=parseInt(req.body.min_read);

  new post({
    type_post:req.body.type,
    describe:req.body.describe,
    thumbnail:req.body.thumbnail,
    title:title,
    tags:tags,
    data:data,
    min_read:min_read
  }).save(()=>{
    res.redirect('/')
  })
})
router.get('/api-post/get/:id',(req,res)=>{
  post.findOne({_id:req.params.id},(err,doc)=>{
    res.json(doc)
  })
})

module.exports = router
