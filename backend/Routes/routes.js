const express = require("express");
const {
  getNews,
  postNews,
  updateNews,
  deleteNews,
  getOneNews,
  postOne,
} = require("../Controller/controller");

const Router = express.Router();

Router.route("/").get(getNews).post(postNews);

Router.route("/login").post(postOne);

Router.route("/:id").put(updateNews).delete(deleteNews).get(getOneNews);

module.exports = { Router };
