const path = require("node:path");
const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));