const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');  // Creates a Post object from the module found in /models/Posts

// Gets back all the posts
router.get('/', async (req, res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  }catch(err){
    res.json({message: err});
  }
});

// SUBMIT A POST
router.post('/', async (req, res) => {

    // creates new post object
    const post = new Post({
      title: req.body.title,              //models/Posts
      description: req.body.description   //models/Posts
    });

    // Saves with a promise to return the
    try{
      const savedPost = await post.save();
      res.json(savedPost);
    } catch(err){
      res.json({message: err});
    }
});

// GET SPECIFIC Post
router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch(err){
      res.json({message: err});
    }
});

// DELETE A SPECIFIC Post
router.delete('/:postId', async (req, res) => {
      try{
        const removedPost = await Post.remove({ _id: req.params.postId});
        res.json(removedPost);
      } catch(err){
          res.json({ message: err });
      }

});

// UPDATE A SPECIFIC Post
router.patch('/:postId', async (req, res) => {
      try{
        const updatedPost = await Post.updateOne({_id: req.params.postId},
          { $set:
            {
              title: req.body.title,
              description: req.body.description
            }
          });
        res.json(updatedPost);
      } catch(err){
          res.json({ message: err });
      }
});

module.exports = router;
