// *** VARIABLES ***

var token = provideToken();
console.log(token);

var warning = [];
var postContent;


// ***ACTIONS ***

checkUserStatus(token);


// *** FUNCTIONS ***

function checkUserStatus(token) {
  console.log('Enter checkUserStatus function');
  // Check token so see if user is logged in
  if ((token) && tokenReader(token).admin == true) {
    // Print on screen "hello username !"
    document.getElementById("user_header").innerHTML = "<p>Hello " + tokenReader(token).name + "!</p>";
    // Print screen Add post form
    document.getElementById("createpost_container").innerHTML =
      '<form id="createpost_form" class="createpost_form" action="/post/create" method="post">' +
      '<label for="post_content">Your new post</label>' +
      '<textarea id="post_content" class="post_content" name="post_content" rows="8" cols="80" placeholder="Type your post here"></textarea>' +
      '<input type="submit" role="button" class="createpost_button" name="" value="Create post">' +
      '</form>'
    listenToForm();
  } else {
    document.getElementById("user_header").innerHTML = '<p>Access unauthorized to anonymous users! Sign in to add posts.<p>' +
      '<form id="post_add" class="post_add" action="/" method="post">' +
      '<input type="submit" role="button" name="" value="Sign in">' +
      '</form>';
    // *** to change to end point /post/create
    // window.location.href = '/post/create';
  }
}

function listenToForm() {
  console.log('Enter listenToForm function');
  document.getElementById("createpost_form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Get email input value
    postContent = event.target.querySelector("textarea").value;
    // Display login warning message
    displayWarning(postContent);
    if (warning.length == 0) {
      document.getElementById("createpost_form").submit();
    }
  });
}

// Display user warning message
function displayWarning(content) {
  console.log('Enter displayWarning function');
  // Call appropriate function to build warning
  buildWarning(content);
  // Set html section 'message_container' as container
  var container = document.getElementById("message_container");
  // Display warning in container
  if (warning.length != 0) {
    container.replaceChild(createList(warning, 'warning_list', 'warning'), container.firstChild);
  } else {
    container.innerHTML = '';
  }
  console.log('warning = ' + warning);
  return warning;
}

// Check some input values and add infos to user global warning message
function buildWarning(content) {
  console.log('Enter buildWarning function');
  warning = [];
  if (content == '') {
    warning.push('Enter some content');
  }
  console.log(warning);
  return warning;
}
