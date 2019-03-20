const path = require("path");
const router = require("express").Router();
const contentRoutes = require("./content");
const ignRoutes = require("./ign");

//content route
router.use("/content", contentRoutes);

//ign route
router.use("/ign", ignRoutes);

//render html
router.use(function(req,res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;