'use strict';

const {
  readFile
} = require('fs');
const {
  parse
} = require('cookie');
const {
  sign,
  verify
} = require('jsonwebtoken');
const qs = require('querystring');

const db = require("./database/db_connection.js");

const hashPassword = require('./passwordHandler.js').hashPassword;
const comparePasswords = require('./passwordHandler.js').comparePasswords;

const bcrypt = require("bcryptjs");

const postsHandler = require("./postsHandler");

const SECRET = process.env.SECRET || 'poiugyfguhijokpkoihugyfyguhijo';

const notFoundPage = '<p style="font-size: 10vh; text-align: center;">404!</p>';

module.exports = (req, res) => {
  var fileName = req.url;
  switch (`${req.method} ${req.url}`) {
    case 'POST /login':
      var info = '';
      req.on('data', function(data) {
        info += data;
      });
      req.on('end', function() {
        var loginData = qs.parse(info);
        db.query("select password, user_id, username from users where email = ($1);", [loginData.email], function(err, result) {
          const userDetails = {
            userid: result.rows[0].user_id,
            username: result.rows[0].username,
            loggedin: true
          };
          comparePasswords(loginData.password, result.rows[0].password, function(err, result) {
            if (result === true) {
              const cookie = sign(userDetails, SECRET);
              res.writeHead(
                302, {
                  'Set-Cookie': `jwt=${cookie}`,
                  'Location': '/posts.html '
                }
              );
            } else {
              res.writeHead(
                302, {
                  'Location': '/index.html '
                }
              );
            }
            return res.end();
          });
        });
        hashPassword(loginData.password, function(err, result) {
        });
      });
      break;

    case "POST /post/create":
      postsHandler.create(req, res);
      break;

    case "GET /posts":
      postsHandler.index(req, res);
      break;

    case 'GET /logout':
      res.writeHead(
        302, {
          'Location': '/',
          'Set-Cookie': 'jwt=0; Max-Age=0'
        }
      );
      res.end();
      break;

    case 'GET /':
      fileName = '/index.html';

    default:
      var fileType = fileName.split(".")[1];
      readFile(__dirname + "/../public" + fileName, function(error, file) {
        if (error) {
          res.writeHead(404, "Content-Type:text/html");
          res.end("<h1>Sorry, page not found</h1>");
        } else {
          res.writeHead(200, {
            "Content-Type": "text/" + fileType
          });
          res.end(file);
        }
      });
  }
}
