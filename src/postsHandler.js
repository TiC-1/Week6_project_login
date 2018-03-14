var db = require("./database/db_connection.js");
var querystring = require("querystring");
const {
  decode
} = require('jsonwebtoken');

function index(request, response) {
  db.query("SELECT post_id, content, username FROM users, posts WHERE created_id=user_id;", function(err, result) {
    if (err) {
      response.writeHead(500);
      return response.end();
    }
    response.writeHead(200, {
      "Content-Type": "application/json"
    });
    response.end(JSON.stringify(result.rows));
  });
}

function create(request, response) {
  console.log(request.headers.cookie);
  var formData = "";
  request.on("data", function(chunk) {
    formData += chunk;
  });
  request.on("end", function() {
    var parsedFormData = querystring.parse(formData);
    db.query("INSERT INTO posts (content, created_id) VALUES ($1, $2) RETURNING post_id", [parsedFormData.content],
      function(err, result) {
        var query = "";
        for (var i = 0; i < parsedFormData.users.length; i++) {
          query += "INSERT INTO tasks_assignments (task_id, user_id) VALUES (" + result.rows[0].id + ", " + parsedFormData.users[i] + ");";
        }
        db.query(escapeElement(query), function(err, result) {
          response.writeHead(302, {
            "Location": "/"
          });
          response.end();
        });

      });
  });
}

module.exports = {
  index: index,
  create: create
};
