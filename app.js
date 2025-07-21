const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("node:path");

const PORT = process.env.PORT || 3000;
const app = express();

const { indexRouter } = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(expressLayouts);

app.get("/", indexRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
