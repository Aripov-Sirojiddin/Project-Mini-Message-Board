const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("node:path");

const PORT = process.env.PORT || 3000;
const app = express();

const { indexRouter } = require("./routes/indexRouter");
const { messageRouter } = require("./routes/messageRouter");

const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/message", messageRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
