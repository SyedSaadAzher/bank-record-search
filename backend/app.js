var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var config = require("./config");
var bodyParser = require("body-parser");
var cors = require("cors");

var banksRouter = require("./routes/banks");

// importing mongoose to create module for mongo connection
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = config.mongoUrl;
const connect = mongoose.connect(url, { useMongoClient: true });

// connect to the database
connect.then(
  (db) => {
    var db = mongoose.connection;

    console.log("connected to database: banks");
  },
  (err) => console.log(err)
);

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", banksRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
