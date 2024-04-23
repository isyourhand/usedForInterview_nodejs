const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

const createSendToken = (user, statusCode, req, res) => {
  res.cookie("userId", user.id, {
    expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    httpOnly: true, // this will make the cookie cannot be accessed or modified in any way by the browser
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  });

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    userId: user.id,
    user,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  // // If registered but not activated, delete it.
  // const user = await User.findOne({ email: req.body.email, active: false });
  // if (user) await User.deleteOne({ email: req.body.email });

  const newUser = await User.create({
    name: req.body.name,

    // active: false,
  });

  createSendToken(newUser, 201, req, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check of it's there.
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.userId) {
    token = req.cookies.userId;
  }

  if (!token) {
    return next(
      new AppError("you are not logged in! please log in to get access", 401)
    );
  }

  // 3) Check if user still exists.
  const CurrentUser = await User.findById(token);
  if (!CurrentUser) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  }

  req.user = CurrentUser;
  res.locals.user = CurrentUser;
  next();
});
