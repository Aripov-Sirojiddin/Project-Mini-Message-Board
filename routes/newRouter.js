const { Router } = require("express");
const { getForm } = require("../controllers/newController");
const newRouter = Router();

newRouter.get("/", getForm);

module.exports = {
  newRouter
};
