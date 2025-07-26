const path = require("node:path")

exports.indexGet = (req, res) => {
    res.send("usernames will be logged here - wip");
}
exports.indexGetForm = (req, res) => {
    res.render("form")
}
exports.indexPostForm = (req, res) => {
    const { username } = req.body
    res.redirect("/")
}