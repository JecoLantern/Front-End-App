const path = require("path");
const router = require("express").Router();
const ignRoutes = require("./ign");

//ign route
router.use("/ign", ignRoutes);

//render html
router.use(function(req,res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;