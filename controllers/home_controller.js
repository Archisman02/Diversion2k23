const Post = require('../models/post')

module.exports.home = function (req, res) {

  Post.find({}, function(err, post){
    if(err){console.log("Error");}

    return res.render("home", {
      posts: post,
    });
  });
  // return res.render("home", {
  //   title: "PettoWorld | Hello",
  // });

};
