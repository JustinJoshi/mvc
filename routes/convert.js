const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/:id", postsController.getConvert);
router.get("/:id/download", function(req, res){
    const file = `${__dirname}./temp/output.json`;
}); //ensure these are authenticated

module.exports = router;


