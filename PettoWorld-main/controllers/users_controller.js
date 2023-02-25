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
