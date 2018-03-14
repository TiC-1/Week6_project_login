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

const SECRET = process.env.SECRET || 'poiugyfguhijokpkoihugyfyguhijo';

const userDetails = {
  userId: 5,
  role: 'admin'
};

const notFoundPage = '<p style="font-size: 10vh; text-align: center;">404!</p>';

module.exports = (req, res) => {
  switch (`${req.method} ${req.url}`) {
    case 'GET /':
      return readFile(
        './public/index.html',
        (err, data) => {
          res.writeHead(
            200, {
              'Content-Type': 'text/html',
              'Content-Length': data.length
            }
          );
          return res.end(data);
        }
      );
    case 'POST /login':

      var info = '';

      req.on('data', function(data) {
        info += data;
      });

      req.on('end', function(err) {

        var loginData = qs.parse(info);
        db.query("select password from users where email = ($1);", [loginData.email], function(err, result) {
          // if (result.length == 0) {
          //   return readFile(
          //     './public/index.html',
          //     (err, data) => {
          //       res.writeHead(
          //         200, {
          //           'Content-Type': 'text/html',
          //           'Content-Length': data.length
          //         }
          //       );
          //       return res.end(data);
          //     }
          //   );
          // }
          comparePasswords(loginData.password, result.rows[0].password, function (err, result) {
            if (result == true) {
              const cookie = sign(userDetails, SECRET);
              return readFile(
                './public/posts.html',
                (err, data) => {
                  res.writeHead(
                    200, {
                      'Content-Type': 'text/html',
                      'Content-Length': data.length,
                      'Set-Cookie': `jwt=${cookie}; HttpOnly`
                    }
                  );
                  return res.end(data);
                }
              );

            } else {
              return readFile(
                './public/index.html',
                (err, data) => {
                  res.writeHead(
                    200, {
                      'Content-Type': 'text/html',
                      'Content-Length': data.length
                    }
                  );
                  return res.end(data);
                }
              );

              // res.writeHead(
              //   404, {
              //     'Content-Type': 'text/html',
              //     'Content-Length': notFoundPage.length
              //   }
              // );
              // return res.end(notFoundPage);

            }
          });
          // console.log("la pass presa dal db è", hashPassword);
        });

        hashPassword(loginData.password, function(err, result) {

        });

      });
break;


    default:
      res.writeHead(
        404, {
          'Content-Type': 'text/html',
          'Content-Length': notFoundPage.length
        }
      );
      return res.end(notFoundPage);
  }
}
