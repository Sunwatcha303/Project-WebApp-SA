const express = require("express");
const router = express.Router();

const {
    SignIn,
    SignUp,
} = require("../controller/UserController")

router.route("/signin").post(SignIn);
router.route("/signup").post(SignUp);

module.exports = router;