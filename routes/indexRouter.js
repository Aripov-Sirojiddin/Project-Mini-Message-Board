const { Router } = require("express");
const {
  getAllMessages,
  showForm,
  createNewMessage,
} = require("../controllers/indexController");
const { body } = require("express-validator");

const indexRouter = Router();

indexRouter.get("/", getAllMessages);
indexRouter.get("/new", showForm);
indexRouter.post("/new", 
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Author name can't be empty."),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Must be a valid email like example@example.com"),
  body("age")
    .optional()
    .trim()
    .isNumeric()
    .withMessage("Must be a number between 13 and 120."),
  body("bio")
    .optional(),
  body("text")
    .trim()
    .notEmpty()
    .withMessage("The message you are trying to send can't be empty."),
    createNewMessage);

module.exports = { indexRouter };
