const { addMessage } = require("../models/messages");

async function getForm(req, res) {
  const locals = {
    title: "New message",
    errors: [],
    values: {},
  };

  res.render("pages/form.ejs", locals);
}

async function createNewMessage(req, res) {
  const errors = [];
  const newMessage = {
    ...req.body,
    added: new Date(),
  };

  console.log(req.body);
  if (newMessage.user == null || newMessage.user === "") {
    errors.push("Name can not be empty");
  }
  if (newMessage.text == null || newMessage.text === "") {
    errors.push("Text can not be empty");
  }

  if (errors.length === 0) {
    addMessage(newMessage);
    res.redirect("/");
  } else {
    res.render("pages/form.ejs", {
      title: "New message",
      errors: errors,
      values: newMessage,
    });
  }
}

module.exports = {
  getForm,
  createNewMessage,
};
