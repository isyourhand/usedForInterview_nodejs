const express = require("express");
const { protect } = require("../controllers/authController");
const { createPost, getAllPost } = require("../controllers/postController");

const router = express.Router({ mergeParams: true });

router.post("/create", protect, createPost);
router.get("/", getAllPost);

module.exports = router;
