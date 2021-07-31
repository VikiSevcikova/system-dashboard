const express = require("express");
const router = express.Router();
const {getPrivateData} = require('../controllers/dashboard');

const {protect} = require('../middleware/auth');

//if something is wrong with token it doesnt call the next -> getPrivateData and send us error
router.route("/").get(protect, getPrivateData);

module.exports = router;