
var token = provideToken();
var postsArray = providePostsList();
console.log(token, postsArray);

var allowSubmit = false;
var warning = [];

// Check token so see if user is logged in
if ((token) && tokenReader(token).admin == false) {
  // *** To be changed to end point '/'
  // window.location.href = '/';
  console.log('anonymous user: unauthorized acces!');
} else {
  listenToAddPostForm();
}


function listenToAddPostForm() {
  document.getElementById("createpost_form").addEventListener("submit", function(event) {
    if (!allowSubmit) {
      event.preventDefault();
      // Get email input value
      var postContent = event.target.querySelectorAll("input")[0].value;
      // Display login warning message
      displayLoginWarning(postContent);
    }
  });
}


// Check some input values and add infos to user global warning message
function buildLoginWarning(email, password) {
  warning = [];
  if (content == '') {
    warning.push('Enter some content');
  }
  if (warning != []) {
    return warning;
  } else {
    allowSubmit = true;
  }
}

// Display user warning message
function displayLoginWarning(warning) {
  // Call appropriate function to build warning
  buildLoginWarning(warning);
  console.log(createList(warning, 'warning_list', 'warning'));
  // Set html section 'message_container' as container
  var container = document.getElementById("message_container");
  // Display warning in container
  container.replaceChild(createList(warning, 'warning_list', 'warning'), container.firstChild);
}
