const express = require("express");
const passport = require("passport");
const router = express.Router();

const contactController = require("../controllers/contact_controller");


router.get("/:id", passport.checkAuthentication, contactController.contact);

module.exports = router;