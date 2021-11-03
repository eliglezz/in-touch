const express = require('express');
const router = express.Router();
const {User, Post} = require('../../models');
const bcrypt = require("bcrypt");

router.get("/",(req,res)=>{
    User.findAll({
        include:[Post,Group]
    }).then(dbUsers=>{
        if(dbUsers.length){
            res.json(dbUsers)
        } else {
            res.status(404).json({message:"No users found!"})
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"an error occurred",err:err})
    })
})

router.post("/",(req,res)=>{
    // const encryptedPassword = bcrypt.hashSync(req.body.password,3);
    User.create({
        username:req.body.username,
        // password:encryptedPassword,
        password:req.body.password,
        email:req.body.email
    }).then(newUser=>{
        res.json(newUser);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"an error occurred",err:err})
    })
})

router.post("/login",(req,res)=>{
    User.findOne ({
        where:{
            email:req.body.email
        }
    }).then(foundUser =>{
        if(!foundUser){
            res.status(401).json({message: "incorect email or password"})
        } else {
            
        }
    })
})

router.post("/login",(req,res)=>{
    User.findOne({
        where:{
            email:req.body.email
        }
    }).then(foundUser=>{
        if(!foundUser){
            req.session.destroy()
            res.status(401).json({message:"incorrect email or password"})
        } else {
            if(bcrypt.compareSync(req.body.password,foundUser.password)){
                req.session.user = {
                    username:foundUser.username,
                    email:foundUser.email,
                    id:foundUser.id
                }
                res.json(foundUser)
            } else {
                req.session.destroy()
                res.status(401).json({message:"incorrect email or password"})
            }
        }
    }).catch(err=>{
         console.log(err);
        res.status(500).json(err);
    })
})

router.put("/:id", upload.single("image"), async (req, res) => {
    try {
      let user = await User.findById(req.params.id);
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(user.cloudinary_id);
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      const data = {
        username: req.body.username || username,
        avatar: result.secure_url || user.avatar,
        cloudinary_id: result.public_id || user.cloudinary_id,
      };
      user = await User.findByIdAndUpdate(req.params.id, data, {
   new: true
   });
      res.json(user);
    } catch (err) {
      console.log(err);
    }
});

router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/login")
})

router.delete("/:id",(req,res)=>{
    User.destroy({
        where:{
            id:req.params.id
        }
    }).then(delUser=>{
        res.json(delUser)
    })
})

module.exports = router;