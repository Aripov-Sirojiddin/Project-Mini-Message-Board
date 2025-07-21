const messagesModel = require("../models/messages");

async function getAllMessages(req, res) {
  const allMessages = await messagesModel.getAllMessages();
  const locals = {
    title: "All messages",
    messages: allMessages,
  };

  res.render("pages/index.ejs", locals);
}

module.exports = {
  getAllMessages,
};
