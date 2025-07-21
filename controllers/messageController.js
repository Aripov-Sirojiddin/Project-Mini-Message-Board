const formatDate = require("../helpers/formatDate");
const messagesModel = require("../models/messages");

async function getMessage(req, res) {
  const { messageId } = req.params;
  const message = await messagesModel.getMessage(Number(messageId));
  res.render("pages/messageDetails.ejs", {
    title: message.user,
    message: message,
    formatDate: formatDate,
    id: messageId,
  });
}

module.exports = { getMessage };
