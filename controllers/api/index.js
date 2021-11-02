const express = require('express');
const router = express.Router();

const userRoutes = require("./userController");
router.use("/users",userRoutes);

const petRoutes = require("./petsController");
router.use("/post",postRoutes);

module.exports = router;