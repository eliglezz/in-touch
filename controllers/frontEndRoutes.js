const express = require('express');
const router = express.Router();
const {Post,User} = require('../models');

router.get('/',(req,res)=>{
    return res.render("home")
})

router.get('/signup',(req,res)=>{
    return res.render("signup")
})

router.get("/post",(req,res)=>{
    Post.findAll({
        order:["UserId"],
        include:[User]
    }).then(postData=>{

        const hbsPets = postData.map(post=>post.get({plain:true}))
        // res.json(hbsPets)
        res.render("home",{
            pets:hbsPets
        })
    })
})

router.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/login")
    }
    User.findByPk(req.session.user.id,{
        include:[Post]
    }).then(userData=>{
        const hbsUser = userData.get({plain:true});
        res.render("profile",hbsUser)
    })
})

router.get("/login",(req,res)=>{
    res.render("login")
})

module.exports = router;