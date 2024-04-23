const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    comment: {
      required: [true, "please make a comment."],
      type: String,
      maxlength: [
        1500,
        "A review must have less or equal then 1500 characters",
      ],
      minlength: [1, "A rivew must have more or equal then 1 characters"],
    },
    createAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    post: {
      type: mongoose.Schema.ObjectId,
      ref: "Post",
      required: [true, "Review must belong to a Post."],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a user."],
    },
  },
  {
    // when we have a virtual property basically a field that is not stored in the database but calculated using some other value.
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
