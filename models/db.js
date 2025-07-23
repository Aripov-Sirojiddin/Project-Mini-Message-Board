const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
  return rows;
}

async function isUsernameAvailable(username) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE username = $1", [
    username,
  ]);
  return rows.length === 0;
}

async function isEmailAvailable(email) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE email = $1", [
    email,
  ]);
  return rows.length === 0;
}

async function addMessage(message) {
  await pool.query(
    `
    INSERT INTO messages (text, username, email, age, bio)
    VALUES($1, $2, $3, $4, $5)
  `,
    [message.text, message.username, message.email, message.age, message.bio]
  );
}

async function getMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1;", [
    id,
  ]);
  return rows;
}

module.exports = {
  getAllMessages,
  addMessage,
  getMessage,
  isEmailAvailable,
  isUsernameAvailable,
};
