const Post = require("../models/post");
const path = require('path'); 

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

    Post.create({
      details: req.body.details,
      contact: req.body.contact,
      email: req.body.email,
      avatar: path.join(Post.avatarPath, req.file.filename),
    });  

    return res.redirect('/');
  });
};
