const path = require("node:path")
const db = require("../db/queries")

const indexGet = async (req, res) => {
    const users = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}
const indexGetForm = async(req, res) => {
    res.render("form")
}
const indexPostForm = async(req, res) => {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
}

module.exports = {
    indexGet,
    indexGetForm,
    indexPostForm
}