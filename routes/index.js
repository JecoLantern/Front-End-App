const path = require("path");
const router = require("express").Router();
const apiRoutes = requiree("./api");

//API route
router.use("/api", apiRoutes);

router.use((req, res) =>
    res.sendFile(path.join(__dirname, "../client/public/index.html"))
);

module.exports = router;