const exp = require("constants");
const Comment = require("../models/commentModel");
const factory = require("./handlerFactory");

exports.createComment = factory.createOne(Comment, "comment");
exports.getAllComment = factory.getAll(Comment);
