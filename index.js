const express = require("express");
const bodyParser = require("body-parser");
// const home = require("./controllers/home_controller");
const port = 8000;
const db = require("./config/mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
// const ejs = require("ejs");
// const bodyParser = require("body-parser");
const app = express();

// app.get("/", function (req, res) {
//   res.send("<h1>Running</h1>");
// });

// app.use(
//   bodyParser.urlencoded({
//     // This is a middleware
//     extended: true,
//   })
// );

app.use(
  bodyParser.urlencoded({
    // This is a middleware
    extended: true,
  })
);

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// mongo store is used to store the session cookie in the db
app.use(
  session({
    name: "pettoworld",
    // TODO change the secret before deployment in production mode
    secret: "blahsomething", // code to encode
    saveUninitialized: false, // when user has not logged in, no need to save user's details
    resave: false, // no need to rewrite or save it again and again
    cookie: {
      maxAge: 1000 * 60 * 100, // expires after this much minutes(in milliseconds)
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// app.use(express.static("public"));

app.use(express.static("assets"));
app.use("/uploads", express.static(__dirname + '/uploads'))

app.use("/", require("./routes/index"));

app.listen(port, function (err) {
  if (err) {
    // console.log("Error: ", err);
    console.log(`Error in running the server : ${port}`);
  }

  console.log(`Server is running on port: ${port}`);
});
