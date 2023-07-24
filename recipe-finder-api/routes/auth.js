const express = require("express");
const router = express.Router();
const {User} = require("../models");
const bcrypt = require("bcryptjs");

// signup for user and push information into the db
router.post("/signup", async (req, res)=>{
    // hash the password entered by the user
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    try{
        // try creating a user with given input
        const user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword
        });

        // save user in the session
        req.session.userId = user.uid;

        // response 201 if good and return the username
        res.status(201).json({
            message: "The user was created successfully",
            user: user.username
    });
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            return res.status(422).json({errors: err.errors.map((e)=> e.message)});
        }
        else if (error.name === "SequelizeUniqueConstraintError")
        {
            return res.status(422).json({errors: "this username is being used by another user"});
        }
        res.status(500).json({
            message: "Error occured while creating user",
            errors: error
        });
    }
});

// log user in
router.post("/login", async (req, res)=>{

    try{
        // find email inside db or not
        const user = await User.findOne({where: {email: req.body.email}});

        if (user === null) {
            return res.status(401).json({ message: "incorrect email or password" });
          }
        
        // Compare passwords using bcrypt.compare as a Promise
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

        if (isPasswordCorrect) {
            // save user in the session
            req.session.userId = user.uid;
            return res.status(200).json({
              message: "Login successful",
              user: user.username,
            });
          } else {
            return res.status(401).json({ message: "incorrect email or password" });
          }

    } catch (error) {
        // catch error if any occured
        return res.status(500).json({
            message: "Error occurred when creating user",
            error: error
          });
    }
});


router.get("/current_user", async (req, res)=>{
    if (req.session.userId){
        const user = await User.findOne({where: {uid: req.session.userId}});
        return res.status(200).json({
            user: {
                uid: user.uid,
                username: user.username
            }
        });
    }
    else{
        return res.status(401).json({user: null});
    }
})

module.exports = router;