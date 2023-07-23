const express = require("express");
const router = express.Router();
const {PetRecipe} = require("../models");
const authenticateUser = require("../middleware/auth");

// get all recipes 
router.get('/', async (req, res)=>{
    try{
        const allRecipes = await PetRecipe.findAll();
        res.status(200).json(allRecipes);
    } catch(error) {
        res.status(500).send({message: error.message});
    }
})

// get recipe by id
router.get('/:recipeId', async (req, res)=>{
    const recipeId = parseInt(req.params.recipeId, 10);
    try{
        const recipe = await PetRecipe.findOne({where: {recipe_id: recipeId}});
        if (recipe){
            res.status(200).json(recipe);
        }
        else{
            res.status(404).send({message: "recipe not found"});
        }
    } catch(error) {
        res.status(500).send({message: error.message});
    }
})

// post recipe
router.post('/', authenticateUser, async (req,res)=>{
    try{
        const newRecipe = await PetRecipe.create({
            ...req.body,
            UserId: req.session.userId,        
        });
        res.status(201).json(newRecipe);
    } catch (err) {
        if (err.name === "SequelizeValidationError") {
          return res.status(422).json({ errors: err.errors.map((e) => e.message) });
        }
        console.error(err);
        res.status(500).send({ message: err.message });
      }
});

module.exports = router;