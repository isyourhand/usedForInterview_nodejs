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

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.find({}); //within the APIFeatures class, the query method is used to obtain the query object that has been processed by the filter(),sort(),limitFields(),and peginate() methods.
    // query.sort().select().skip().limit()

    // SEND QUERY
    res.status(200).json({
      // Jsend格式
      status: "success",
      requestedAt: req.requestTime,
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });
