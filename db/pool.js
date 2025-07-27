const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "mothibi",
  database: "top_users",
  password: "mothibi",
  port: 5432 // The default port
});
