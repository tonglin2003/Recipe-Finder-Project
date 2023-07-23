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
        res.status(500).json({
            message: "Error occurred when creating user",
            error: error.message || "Internal server error",
        });
    }
});

// log user in
router.post("/login", async (req, res)=>{

    try{
        // find email inside db or not
        const user = await User.findOne({where: {email: req.body.email}});

        if (user === null){
            res.status(401).json({message: "incorrect email or password"});
        }
        
        bcrypt.compare(req.body.password, user.password, (err, result)=>{
            if (result){
            // save user in the session
            req.session.userId = user.uid;

            // response 201 if good and return the username
            res.status(201).json({
                message: "The user was created successfully",
                user: user.username
            });
            }
            else{
                res.status(401).json({message: "Incorrect Password"});
            }
        })

    } catch (error) {
        // catch error if any occured
        res.status(500).json({
            message: "Error occured when creating user",
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