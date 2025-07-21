const { Router } = require("express");
const { getForm, createNewMessage } = require("../controllers/newController");
const newRouter = Router();

newRouter.get("/", getForm).post("/", createNewMessage);

module.exports = {
  newRouter,
};
