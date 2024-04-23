const express = require("express");

const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
const commentRouter = require("./routes/commentRouter");

const app = express();

app.use(
  express.json({
    limit: "10kb", // 只读取10kb以下的body
  })
);

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/comments", commentRouter);

module.exports = app;
