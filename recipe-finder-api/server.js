const express = require("express");
const app = express();
const port = 4000;

const {PetRecipes} = require('./models');
const cors = require('cors');

app.use(cors());
app.use((req,res,next)=>{
    res.on("finish", ()=>{
        console.log(`Request: ${req.method} ${req.originalUrl} ${res.statusCode}`);
    });
    next();
})

app.use(express.json());
 
app.get('/', (req, res)=>{
    res.status(200).send('testing');
});

// get all recipes 
app.get('/recipes', async (req, res)=>{
    try{
        const allRecipes = await PetRecipes.findAll();
        res.status(200).json(allRecipes);
    } catch(error) {
        res.status(500).send({message: error.message});
    }
})

// get recipe by id
app.get('/recipes/:recipeId', async (req, res)=>{
    const recipeId = parseInt(req.params.recipeId, 10);
    try{
        const recipe = await PetRecipes.findOne({where: {id: recipeId}});
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
app.post('/recipes', async (req,res)=>{
    try{
        const newRecipe = await PetRecipes.create(req.body);
        res.status(201).json(newRecipe);
    } catch (err) {
        if (err.name === "SequelizeValidationError") {
          return res.status(422).json({ errors: err.errors.map((e) => e.message) });
        }
        console.error(err);
        res.status(500).send({ message: err.message });
      }
});

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})

// npx sequelize-cli model:generate --name PetRecipe --attributes title:string,content:string,imgUrl:string,tag:string