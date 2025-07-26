const { Router } = require("express");
const { indexGet, indexGetForm, indexPostForm } = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", indexGet);

indexRouter.get("/new", indexGetForm);

indexRouter.post("/new", indexPostForm);

module.exports = indexRouter;
