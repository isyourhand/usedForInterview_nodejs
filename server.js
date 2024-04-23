const app = require("./app.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const db = process.env.DATABASE;

mongoose.connect(db).then(() => {
  console.log("MongoDb Connection Successful.");
});

const port = 5000;

const hostName =
  process.env.NODE_ENV === "development" ? "127.0.0.1" : "0.0.0.0";
console.log(hostName);

const server = app.listen(port, hostName, () => {
  console.log(`App running on port ${port}...`);
});
