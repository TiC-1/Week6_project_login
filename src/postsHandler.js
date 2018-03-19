var db = require("./database/db_connection.js");
var querystring = require("querystring");
const {
  decode
} = require('jsonwebtoken');
const {
  parse
} = require('cookie');

var post = require("./models/post");

function index(request, response) {
  var decodedToken = request.headers.cookie ? decode(parse(request.headers.cookie).jwt) : null;
  var loggedin = false;
  var numberOfPosts = 3;
  if(decodedToken && decodedToken.userid) {
    loggedin = true;
    numberOfPosts = 10;
  }
  post.getAllWithUser(numberOfPosts)
    .then(result => {
      response.render("posts", { posts: result.rows, loggedin: loggedin });
    })
    .catch(err => {
      response.writeHead(500);
      return response.end();
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
