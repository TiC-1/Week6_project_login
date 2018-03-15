// *** VARIABLES ***
var postsNumbers = 0;
var actualCookie = document.cookie;

console.log(actualCookie);
// Check token so see if user is logged in
if (actualCookie && tokenReader(actualCookie).loggedin) {
  // Print on screen "hello username !"
  document.getElementById("user_header").innerHTML = "<p>Hello " + tokenReader(actualCookie).name + "!</p>";
  // Print screen Add post button
  document.getElementById("addpost_form").innerHTML =
    '<form id="post_add" class="post_add" action="post/add" method="post">' +
    '<input type = "submit" role = "button" name = "" value = "" >' +
    '</form>';
} else {
  // Print screen 'anonymous user message'
  document.getElementById("user_header").innerHTML =
    '<p>As an anonymous user, you can only see the 3 latest posts. Sign in to see more posts.' +
    '<form id="post_add" class="post_add" action="/" method="post">' +
    '<input type="submit" role="button" name="" value="Sign in">' +
    '</form>';
  // Set visible posts to 3
  postsNumbers = 3;
}

// *** ACTIONS ***

checkUserStatus(actualCookie);
request(renderPostsList, '/posts');


// *** FUNCTIONS ***

function checkUserStatus(token) {
  // Check token so see if user is logged in
  if (token && tokenReader(token).loggedin) {
    // Print on screen "hello username !"
    document.getElementById("user_header").innerHTML = "<p>Hello " + tokenReader(token).username + "!</p>";
    // Print screen Add post button
    document.getElementById("addpost_form").innerHTML =
      '<form id="post_add" class="post_add" action="addpost.html" method="post">' +
      '<input type = "submit" role = "button" name = "" value = "Add post" >' +
      '</form>';
  } else {
    // Print screen 'anonymous user message'
    document.getElementById("user_header").innerHTML =
      '<p>As an anonymous user, you can only see the 3 latest posts. Sign in to see more posts.' +
      '<form id="post_add" class="post_add" action="/" method="get">' +
      '<input type="submit" role="button" name="" value="Sign in">' +
      '</form>';
    // Set visible posts to 3
    postsNumbers = 3;
  }
}

function renderPostsList(err, postsArray) {
  // Set visible posts to all
  postsNumbers = postsArray.length;
  // Set html section 'post_container' as container
  var container = document.getElementById("posts_container");
  // Replace previous 'container'
  container.replaceChild(createPostsList(postsArray, "posts_list", "post"), container.firstChild);
}
