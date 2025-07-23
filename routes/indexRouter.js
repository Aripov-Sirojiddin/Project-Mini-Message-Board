const { Router } = require("express");
const db = require("../models/db.js");

const {
  getAllMessages,
  showForm,
  createNewMessage,
} = require("../controllers/indexController");
const { body } = require("express-validator");

const indexRouter = Router();

indexRouter.get("/", getAllMessages);
indexRouter.get("/new", showForm);
indexRouter.post(
  "/new",
  body("username")
    .trim()
    .custom(async (value) => {
      if(!(await db.isUsernameAvailable(value))){
        throw new Error("Username already in use.")
      }
    })
    .notEmpty()
    .withMessage("Author name can't be empty."),
  body("email")
    .trim()
    .custom(async (value) => {
      if (!(await db.isEmailAvailable(value))) {
        throw new Error("Email already in use.");
      }
    })
    .isEmail()
    .withMessage("Must be a valid email like example@example.com"),
  body("age")
    .optional()
    .trim()
    .isNumeric()
    .withMessage("Must be a number between 13 and 120."),
  body("bio").optional(),
  body("text")
    .trim()
    .notEmpty()
    .withMessage("The message you are trying to send can't be empty."),
  createNewMessage
);

module.exports = { indexRouter };
