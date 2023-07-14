const express = require("express");
const app = express();
const port = 4000;

const {PetRecipes} = require('./models');

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

app.get('/recipes', async (req, res)=>{
    try{
        const allRecipes = await PetRecipes.findAll();
        res.status(200).json(allRecipes);
    } catch(error) {
        res.status(500).send({message: error.message});
    }
})

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})

// npx sequelize-cli model:generate --name PetRecipe --attributes title:string,content:string,imgUrl:string,tag:string