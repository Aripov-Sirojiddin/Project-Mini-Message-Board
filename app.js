const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("node:path");

const PORT = process.env.PORT || 3000;
const app = express();

const { indexRouter } = require("./routes/indexRouter");
const { newRouter } = require("./routes/newRouter");

const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(expressLayouts);

app.use("/new", newRouter);
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
