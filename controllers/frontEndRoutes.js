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

        const hbsPosts = postData.map(post=>post.get({plain:true}))
        res.render("home",{
            posts: hbsPosts
        })
    })
})

router.get("/profile/:id",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/login")
    }
    User.findByPk(req.params.id,{
        include:[Post]
    }).then(userData=>{
        const hbsUser = userData.get({plain:true});
        console.log(hbsUser);
        res.render("profile",hbsUser)
    })
})

router.get("/login",(req,res)=>{
    if(req.session.user){
        return res.redirect(`/profile/${req.session.user.id}`)
    }
   return  res.render("login")
})

router.get("/logout",(req,res)=>{
    res.render('logout')
})

module.exports = router;