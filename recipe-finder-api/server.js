const express = require("express");
const app = express();
const port = 4000;
require("dotenv").config();
const session = require("express-session");
const cors = require("cors");

app.use(
    cors({
      origin: "http://localhost:5173",
      allowedHeaders: ["Content-Type", "Authorization"],
      methods: ["GET", "POST", "PATCH", "DELETE"],
    })
  );

// middle ware that allow node to read json for input
app.use((req,res,next)=>{
    res.on("finish", ()=>{
        console.log(`Request: ${req.method} ${req.originalUrl} ${res.statusCode}`);
    });
    next();
})


app.use(express.json());

// implementing session inside the node
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 3600000 // 1 hour
    }

}))
 

// testing for connection
app.get('/', (req, res)=>{
    res.status(200).send('testing');
});

// routes declaration
const recipeRouter = require("./routes/recipe");
const authRouter = require("./routes/auth");
const blogRouter = require("./routes/blog");
const commentRouter = require("./routes/comment");


// routes
app.use("/api/recipes", recipeRouter);
app.use("/api/auth", authRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/comment", commentRouter);


// setting listen to the port to keep it functioning
app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})

