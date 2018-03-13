// function for reading the cookie and avoid or not the display of the login page
var cookieReader= function(cookie){
  var my_array = cookie.split('.');
  var my_jwt = JSON.parse(atob(my_array[1]));
  console.log(my_jwt);
  return my_jwt;
}



























//
//
// 'use strict';
//
// const {
//   readFile
// } = require('fs');
// const path = require('path')
// const cookieParser = require('cookie');
// const jwt = require('jsonwebtoken');
// const secretKey = 'azerty'; // key for token signature
// const notFoundPage = '<p style="font-size: 10vh; text-align: center;">404!</p>';
// const backToIndexPage = '<a href="/"><button>Back to Homepage</button></a>'; // button to turn back front page
// var serverCode; // serverCode to use in
// var pageContent;
//
//
// if (req.headers.cookie) { // checks if cookie exists
//   var parsedCookie = cookieParser.parse(req.headers.cookie);
//   console.log(parsedCookie);
//   jwt.verify(parsedCookie.token, secretKey, function(err, result) {
//     if (err) {
//       serverCode = 401;
//       pageContent = '<p style="font-size: 10vh; text-align: center;">Unauthorized access!</p>' + backToIndexPage;
//       writeHeadHtmlType(serverCode, pageContent);
//     }
//     if (result.logged_in) { // then checks if cookie contains 'loggin_in'
//       serverCode = 302;
//       pageContent = '<p style="font-size: 10vh; text-align: center;">You\'re logged in!</p>' + backToIndexPage;
//       writeHeadHtmlType(serverCode, pageContent);
//     }
//   });
