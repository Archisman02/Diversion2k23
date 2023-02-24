const Post = require("../models/post");

module.exports.createPost = function (req, res) {
  return res.render("post", {
    title: "Create Post",
  });
};

module.exports.create = function (req, res) {
  Post.uploadedAvatar(req, res, function (err) {
    if (err) {
      console.log("Multer Error", err);
    }

    console.log(req.file);
  });
};