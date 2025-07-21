const { Router } = require("express");
const { getAllMessages } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getAllMessages);

module.exports = { indexRouter };
