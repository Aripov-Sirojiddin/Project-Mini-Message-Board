const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    email: "amando@example.com",
    added: new Date(),
    age: 32,
  },
  {
    text: "Hello World!",
    user: "Charles",
    email: "charles@example.com",
    added: new Date(),
    bio: "This is my amazing bio.",
  },
  {
    text: "How are yall!",
    user: "Mishel",
    email: "mishel@example.com",
    added: new Date(),
    age: 36,
    bio: "This is my amazing bio 2.",
  },
];

async function getAllMessages() {
  return messages;
}

async function addMessage(message) {
  messages.push(message);
}

async function getMessage(id) {
  return messages[id];
}

module.exports = {
  getAllMessages,
  addMessage,
  getMessage,
};
