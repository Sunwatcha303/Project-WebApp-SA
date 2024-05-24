const express = require("express");
const router = express.Router();

const {
    SignIn,
} = require("../controller/SignInController")

router.route("/").post(SignIn);

module.exports = router;