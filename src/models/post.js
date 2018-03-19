var db = require("../database/db_connection.js");

function getAllWithUser(limit) {
  return db.query(`
    SELECT post_id, content, username
    FROM users, posts
    WHERE created_id=user_id
    ORDER BY post_id DESC
    LIMIT ${limit};
  `);
}

module.exports = {getAllWithUser: getAllWithUser};
