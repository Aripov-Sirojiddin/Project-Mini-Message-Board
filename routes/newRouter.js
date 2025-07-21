const { Router } = require("express");
const { getForm, createNewMessage } = require("../controllers/newController");
const newRouter = Router();


module.exports = {
  newRouter,
};
