const messagesModel = require("../models/messages");
const formatDate = require("../helpers/formatDate");

async function getAllMessages(req, res) {
  const allMessages = await messagesModel.getAllMessages();
  console.log(allMessages);
  const locals = {
    title: "All messages",
    messages: allMessages,
    formatDate: formatDate,
  };

  res.render("pages/index.ejs", locals);
}

module.exports = {
  getAllMessages,
};
