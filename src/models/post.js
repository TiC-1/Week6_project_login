var db = require("../database/db_connection.js");

function getAllWithUser() {
  return db.query(
    "SELECT post_id, content, username FROM users, posts WHERE created_id=user_id;");
}

module.exports = {getAllWithUser: getAllWithUser};
