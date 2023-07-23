const express = require("express");
const router = express.Router();
const {Blog, PetRecipe, Comment} = require("../models");
const authenticateUser = require("../middleware/auth");

// fetch all comments for a blog
router.get("/blogs/:blogId", async (req, res) => {
    const blogId = parseInt(req.params.blogId, 10);

    try{
        // find the blog exist or not
        const blog  = await Blog.findOne({where: {id: blogId}});
        if (blog === null){
            res.status(401).json({message: "Blog was not found"});
        }

        // if exist, fetch all the comments
        const comments = await Comment.findAll({where: {BlogId: blogId}});

        // if comments were not found
        if (comments.length === 0) {
            res.status(404).json({ message: "No comments were found" });
            return; // Return to avoid further execution
        }

        // if comments were found, return the comments
        res.status(200).json(comments);

    } catch(error){
        res.status(500).json({ message: "Internal server error" });
    }
});

// post a comment for a blog
router.post("/blogs/:blogId/comment", authenticateUser, async (req, res) => {
    const blogId = parseInt(req.params.blogId, 10);

    try{
        // find the blog exist or not
        const blog  = await Blog.findOne({where: {id: blogId}});
        if (blog === null){
            res.status(401).json({message: "Blog was not found"});
        }

        // if exist, fetch all the comments
        const comment = await Comment.create({
            ...req.body,
            UserId:req.session.userId,
            RecipeId: null,
            BlogId:blogId
        })
        
        // if comments were found, return the comments
        res.status(201).json({
            comment:{
                commentContent: comment.commentContent
            } 
        });

    } catch(error){
        res.status(500).json({ message: "Internal server error" });
    }
});


// fetch all comments for a recipe
router.get("/recipe/:recipeId", async (req, res) => {
    const recipeId = parseInt(req.params.recipeId, 10);

    try{
        // find the blog exist or not
        const recipe  = await PetRecipe.findOne({where: {recipe_id: recipeId}});
        if (recipe === null){
            res.status(401).json({message: "recipe was not found"});
        }

        // if exist, fetch all the comments
        const comments = await Comment.findAll({where: {RecipeId: recipeId}});

        // if comments were not found
        if (comments.length === 0) {
            res.status(404).json({ message: "No comments were found" });
            return; // Return to avoid further execution
        }

        // if comments were found, return the comments
        res.status(200).json(comments);

    } catch(error){
        res.status(500).json({ message: "Internal server error" });
    }
});

// post a comment for a blog
router.post("/blogs/:blogId/comment", authenticateUser, async (req, res) => {
    const blogId = parseInt(req.params.blogId, 10);

    try{
        // find the blog exist or not
        const blog  = await Blog.findOne({where: {id: blogId}});
        if (blog === null){
            res.status(401).json({message: "Blog was not found"});
        }
        
        // if exist, fetch all the comments
        const comment = await Comment.create({
            ...req.body,
            UserId:req.session.userId,
            RecipeId: null,
            BlogId:blogId
        })
        
        // if comments were found, return the comments
        res.status(201).json({
            comment:{
                commentContent: comment.commentContent
            } 
        });

    } catch(error){
        res.status(500).json({ message: "Internal server error" });
    }
});

// post a comment for a recipe
router.post("/recipe/:recipeId/comment", authenticateUser, async (req, res) => {
    const recipeId = parseInt(req.params.recipeId, 10);

    try{
        // find the recipe exist or not
        const recipe  = await PetRecipe.findOne({where: {recipe_id: recipeId}});
        if (recipe === null){
            res.status(401).json({message: "Recipe was not found"});
        }
        
        // if exist, fetch all the comments
        const comment = await Comment.create({
            ...req.body,
            UserId:req.session.userId,
            RecipeId: recipeId,
            BlogId: null
        })
        
        // if comments were found, return the comments
        res.status(201).json({
            comment:{
                commentContent: comment.commentContent
            } 
        });
        
    } catch(error){
        res.status(500).json({ message: "Internal server error" });
    }
});



module.exports = router;