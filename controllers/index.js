const express = require('express');
const router = express.Router();

const frontEndRoutes = require("./frontEndRoutes");
router.use(frontEndRoutes);
const apiRoutes = require("./apiRoutes/index");
router.use("/api",apiRoutes);
const sessionRoutes = require("./sessionsRouter")
router.use("/sessions",sessionRoutes)

module.exports = router;



