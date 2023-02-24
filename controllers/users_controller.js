const User = require("../models/user");

module.exports.signIn = function (req, res) {
  return res.render("signIn", {
    title: "PettoWorld | Hello",
  });
};

module.exports.signUp = function (req, res) {
  return res.render("signUp", {
    title: "Sign Up",
  });
};

// get the sign up data
module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in creating user in signing up");
      return;
    }

    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error in creating user while signing up");
          return;
        }
      });

      return res.redirect("/");
    } else {
      return res.redirect("back");
    }
  });
};

// sign in and create a session for the user
module.exports.createSession = function (req, res) {
  return res.redirect("/");
};

module.exports.destroySession = function (req, res) {
  console.log("logout");
  req.logout(function (err) {
    if (err) {
      return next(err);
    }

    res.redirect("/");
  });
};
