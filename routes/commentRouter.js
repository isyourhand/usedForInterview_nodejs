const express = require("express");
const { protect } = require("../controllers/authController");
const { createComment } = require("../controllers/commentController");
const router = express.Router({ mergeParams: true });

router.post("/create/:postId", protect, createComment);

module.exports = router;
