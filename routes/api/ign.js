const router = require("express").Router();
const ignController = require("../../controllers/ignController");

//match to /api/ign
router
    .route("/")
    .get(ignController.findAll);

module.exports = router;