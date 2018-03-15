var db = require("./database/db_connection.js");
var querystring = require("querystring");
const {
  decode
} = require('jsonwebtoken');
const {
  parse
} = require('cookie');

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
  var decodedToken = decode(parse(request.headers.cookie).jwt);
  var formData = "";
  request.on("data", function(chunk) {
    formData += chunk;
  });
  request.on("end", function() {
    var parsedFormData = querystring.parse(formData);
    db.query("INSERT INTO posts (content, created_id) VALUES ($1, $2)", [parsedFormData.content, decodedToken.userid],
      function(err, result) {
        if (err) {
          response.writeHead(500);
          return response.end();
        }
        response.writeHead(302, {
          "Location": "/posts.html"
        });
        response.end();
      });
  });
}

module.exports = {
  index: index,
  create: create
};
