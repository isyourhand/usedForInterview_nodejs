const catchAsync = require("../utils/catchAsync");

exports.createOne = (Model, type) =>
  catchAsync(async (req, res, next) => {
    console.log(req.body);

    if (type === "post") {
      req.body.author = req.user.id;
      req.body.createdAt = Date.now();
    }

    if (type === "comment") {
      req.body.user = req.user.id;
      req.body.post = req.params.postId;
      req.body.createdAt = Date.now();

      console.log(req.body);
    }

    const newDoc = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        data: newDoc,
      },
    });
  });
