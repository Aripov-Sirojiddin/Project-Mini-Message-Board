const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
  return rows;
}

async function isEmailAvailable(email) {
  const { rowCount } = await pool.query(
    "SELECT * FROM messages WHERE email = $1",
    [email]
  );
  return rowCount === 0;
}

async function addMessage(message) {
  messages.push(message);
  await pool.query(
    `
    INSERT INTO messages (text, username, email, age, bio)
    VALUES($1, $2, $3, $4, $5)
  `,
    [message.text, message.username, message.email, message.age, message.bio]
  );
}

async function getMessage(id) {
  return messages[id];
}

module.exports = {
  getAllMessages,
  addMessage,
  getMessage,
  isEmailAvailable,
};
