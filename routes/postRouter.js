const express = require("express");
const { protect } = require("../controllers/authController");
const { createPost } = require("../controllers/postController");

const router = express.Router({ mergeParams: true });

router.post("/create", protect, createPost);

module.exports = router;
