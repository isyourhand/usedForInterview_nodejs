const mongoose = require("mongoose");
const slugify = require("slugify");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A post must have a title."],
      unique: true,
      trim: true,
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },

    slug: String,
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    content: {
      require: true,
      type: String,
      trim: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

postSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
