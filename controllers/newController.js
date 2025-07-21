const { addMessage } = require("../models/messages");

async function getForm(req, res) {
  const locals = {
    title: "New message",
  };

  res.render("pages/form.ejs", locals);
}

async function createNewMessage(req, res) {
  const newMessage = {
    ...req.body,
    added: new Date(),
  };
  addMessage(newMessage);
  res.redirect("/");
}

module.exports = {
  getForm,
  createNewMessage,
};
