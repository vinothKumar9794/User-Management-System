const express = require("express");
const router = express.Router();
const responseController = require("../controllers/responseController");
const usersController = require("../controllers/usersController");


router.route("/home").get(responseController.sendResponse)
                     .post(responseController.sendResponse);
                     
router.route("/signUp").get(responseController.sendResponse);
router.route("/login").get(responseController.sendResponse);
router.route("/users/edit/:id").get(usersController.editMenu);


module.exports = router;