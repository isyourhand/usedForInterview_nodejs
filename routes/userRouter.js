const express = require("express");
const { createUser } = require("../controllers/userController");
const { signup } = require("../controllers/authController");

const router = express.Router({ mergeParams: true });

router.post("/signup", signup);

module.exports = router;
