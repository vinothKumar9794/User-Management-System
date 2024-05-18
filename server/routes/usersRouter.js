const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const loginAuth = require("../auth/loginAuth");
const signUpAuth = require("../auth/signUpAuth");


router.route("/users").post(usersController.add)
                      .get(usersController.getUsers);

router.route("/users/:id").get(usersController.getUser)
                          .patch(usersController.update)
                          .delete(usersController.remove);

router.route("/login").post(loginAuth.userLogin);
router.route("/signUp").post(signUpAuth.userSignup);

module.exports = router; 