const express = require("express");
const passport = require("passport");
const router = express.Router();

const smsController = require("../controllers/sms_controller");

router.post('/sms', smsController.sms);

module.exports = router;
