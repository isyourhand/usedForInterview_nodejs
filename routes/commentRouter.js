const express = require("express");
const { protect } = require("../controllers/authController");
const {
  createComment,
  getAllComment,
} = require("../controllers/commentController");
const router = express.Router({ mergeParams: true });

router.post("/create/:postId", protect, createComment);
router.get("/", getAllComment);

module.exports = router;
