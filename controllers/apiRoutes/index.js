const express = require('express');
const router = express.Router();
const userRoutes = require("./userControllers");
const postRoutes = require("./postControllers");
const groupRoutes = require("./groupControllers");

router.use("/users",userRoutes);
router.use("/post",postRoutes);
router.use("/group", groupRoutes);
router.get("/", (req,res)=>{
    res.send('hello from api')
})

module.exports = router;