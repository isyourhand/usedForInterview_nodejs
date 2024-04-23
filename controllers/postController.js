const Post = require("../models/postModel");
const factory = require("./handlerFactory");

exports.createPost = factory.createOne(Post, "post");
