const express = require("express");
const router = express.Router();
const passport = require("passport");

const postsController = require("../controllers/posts_controller");

router.get(
  "/create-post",
  passport.checkAuthentication,
  postsController.createPost
);

router.post("/create", postsController.create);

module.exports = router;
