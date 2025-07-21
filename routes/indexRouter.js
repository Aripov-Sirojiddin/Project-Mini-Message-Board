const { Router } = require("express");
const {
  getAllMessages,
  showForm,
  createNewMessage,
} = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getAllMessages);
indexRouter.get("/new", showForm);
indexRouter.post("/new", createNewMessage)


module.exports = { indexRouter };
