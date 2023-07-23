const express = require("express");
const router = express.Router();
const {Blog} = require("../models");
const authenticateUser = require("../middleware/auth");

// get all blogs 
router.get('/', async (req, res)=>{
    try{
        const allBlogs = await Blog.findAll();
        res.status(200).json(allBlogs);
    } catch(error) {
        res.status(500).send({message: error.message});
    }
})

// get blog by id
router.get('/:blogId', async (req, res)=>{
    const blogId = parseInt(req.params.blogId, 10);
    try{
        const blog = await Blog.findOne({where: {id: blogId}});
        if (blog){
            res.status(200).json(blog);
        }
        else{
            res.status(404).send({message: "blog not found"});
        }
    } catch(error) {
        res.status(500).send({message: error.message});
    }
})

// post recipe
router.post('/', authenticateUser, async (req,res)=>{
    try{
        const newBlog = await Blog.create({
            ...req.body,
            UserId: req.session.userId,        
        });
        res.status(201).json(newBlog);
    } catch (err) {
        if (err.name === "SequelizeValidationError") {
          return res.status(422).json({ errors: err.errors.map((e) => e.message) });
        }
        console.error(err);
        res.status(500).send({ message: err.message });
      }
});

module.exports = router;