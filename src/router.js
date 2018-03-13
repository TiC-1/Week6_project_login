'use strict';

const { readFile } = require('fs');
const { parse } = require('cookie');
const { sign, verify } = require('jsonwebtoken');
const qs = require('querystring');

const db = require("./database/db_connection.js");

const comparePasswords = require('./passwordHandler.js').comparePasswords;

const bcrypt = require("bcryptjs");

const SECRET = process.env.SECRET || 'poiugyfguhijokpkoihugyfyguhijo';

const userDetails = { userId: 5, role: 'admin' };

const notFoundPage = '<p style="font-size: 10vh; text-align: center;">404!</p>';

module.exports = (req, res) => {
  switch (`${req.method} ${req.url}`) {
    case 'GET /':
      return readFile(
        './public/index.html',
        (err, data) => {
          res.writeHead(
            200,
            {
              'Content-Type': 'text/html',
              'Content-Length': data.length
            }
          );
          return res.end(data);
        }
      );
    case 'POST /login':

      var info = '';

      req.on('data', function (data) {
          info += data;
      });

      req.on('end', function () {
          var loginData = qs.parse(info);
          var hashedpassword = '$2a$10$/VEP0V7yxcHvnen09h1VHuJ73wlK1wSSuFOKzC.vpBdwePR2zxl96';
          // Query al DB logindata.email estrarre dal db

          comparePasswords(loginData.password, hashedpassword , function (err, result) {
            console.log(result); // result e la pssword hashed
            console.log('errore' + err);

          });
          console.log(loginData);

      });

      // di qui in poi va eseguito solo se c 'è il match degli hash
      const cookie = sign(userDetails, SECRET);
      return readFile(
        './public/posts.html',
        (err, data) => {
          res.writeHead(
            200,
            {
              'Content-Type': 'text/html',
              'Content-Length': data.length,
              'Set-Cookie': `jwt=${cookie}; HttpOnly`
            }
          );
          return res.end(data);
        }
      );
      //fino a qui

    default:
      res.writeHead(
        404,
        {
          'Content-Type': 'text/html',
          'Content-Length': notFoundPage.length
        }
      );
      return res.end(notFoundPage);
  }
}
