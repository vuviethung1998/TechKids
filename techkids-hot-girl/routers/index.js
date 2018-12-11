//router root
const express = require("express");
const Router = express.Router();

const userRouter = require("./user");
const postRouter = require("./post");

Router.get("/", (req, res) => {
    res.send("Hello World");
});

Router.use("/api/user", userRouter);
Router.use("/api/post", postRouter);
module.exports = Router;