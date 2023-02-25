const Post = require('../models/post');

module.exports.contact = function(req, res){
    
    Post.findById(req.params.id, function(err, post){
        if(err){
            console.log("Error in contacting");
            return;
        }

        return res.render("contact", {
            post: post,
        });
    });
};