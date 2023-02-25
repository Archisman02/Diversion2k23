const express = require("express");

const router = express.Router();
const usersController = require("../controllers/users_controller")
const homeController = require("../controllers/home_controller")
// const usersController = require("../controllers/users_controller");

router.get("/", homeController.home);
router.use("/users", require("./users"));
// router.get('/sign-in', usersController.signIn);
// router.get('/sign-up', usersController.signUp);


module.exports = router;
