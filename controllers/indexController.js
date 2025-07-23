const messagesModel = require("../models/messages");
const formatDate = require("../helpers/formatDate");
const { validationResult } = require("express-validator");

let locals = {
  title: "All messages",
  formatDate: formatDate,
  showForm: false,
};

async function getAllMessages(req, res) {
  const allMessages = await messagesModel.getAllMessages();
  locals = {
    ...locals,
    errors: [],
    showForm: false, 
    messages: allMessages,
  };
  res.render("pages/index.ejs", locals);
}

async function showForm(req, res) {
  const allMessages = await messagesModel.getAllMessages();
  locals = {
    ...locals,
    messages: allMessages,
    showForm: true,
    errors: [],
    values: {},
  };
  res.render("pages/index.ejs", locals);
}

async function createNewMessage(req, res) {
  const errors = validationResult(req).array();
  const newMessage = {
    ...req.body,
    added: Date.now(),
  };

  locals = {
    ...locals,
    showForm: false,
    errors: errors,
    values: newMessage,
  };

  if (errors.length === 0) {
    messagesModel.addMessage(newMessage);
    res.redirect("/");
  } else {
    locals.showForm = true;
    res.render("pages/index.ejs", locals);
  }
}

module.exports = {
  getAllMessages,
  showForm,
  createNewMessage,
};
