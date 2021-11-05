const express = require('express');
const router = express.Router();
const frontEndRoutes = require("./frontEndRoutes");
const apiRoutes = require("./apiRoutes/index");

router.use("/",frontEndRoutes);
router.use("/api",apiRoutes);
router.get("/sessions",(req,res)=>{
    res.json(req.session)
})

module.exports = router;