const messagesModel = require("../models/messages");
const formatDate = require("../helpers/formatDate");

let locals = {
  title: "All messages",
  formatDate: formatDate,
  showForm: false,
};

async function getAllMessages(req, res) {
  const allMessages = await messagesModel.getAllMessages();
  locals = {
    ...locals,
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
  const errors = [];
  const newMessage = {
    ...req.body,
    added: new Date(),
  };

  if (newMessage.user == null || newMessage.user === "") {
    errors.push("Name can not be empty");
  }
  if (newMessage.text == null || newMessage.text === "") {
    errors.push("Text can not be empty");
  }

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
    res.render("pages/index.ejs", locals);
  }
}

module.exports = {
  getAllMessages,
  showForm,
  createNewMessage,
};
