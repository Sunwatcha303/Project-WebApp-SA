const express = require("express");
const router = express.Router();

const {
    Health,
} = require("../controller/HealthController")

router.route("/").get(Health);

module.exports = router;