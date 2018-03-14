var allowSubmit = false;
var warning = [];

checkUserStatus();

// Global function checkUserStatus
function checkUserStatus() {
  console.log('Enter checkUserStatus function');
  redirectIfLogin();

  // Function to check if token contains logged_in=true
  function redirectIfLogin(token) {
    console.log('Enter redirectIfLogin function');
    // *** To be changed to .logged_in == true
    if ((token) && tokenReader(token).admin == true) {
      // *** To be changed to end point /posts
      // window.location.href = './posts.html';
      return token;
      // if no token or token not validated, listen to loggin form data
    } else {
      console.log('allowSubmit :' + allowSubmit);
      listenToForm();
    }
  }
}

function listenToForm() {
  console.log('Enter listenToForm function');

  document.getElementById("login_form").addEventListener("submit", function(event) {
    console.log('event function');

    if (!allowSubmit) {
      event.preventDefault();
      // Get email input value
      var userEmail = event.target.querySelectorAll("input")[0].value;
      // Get password input value
      var userPassword = event.target.querySelectorAll("input")[1].value;
      // Display login warning message
      displayLoginWarning(userEmail, userPassword);
    }
  });
}


// Check some input values and add infos to user global warning message
function buildLoginWarning(email, password) {
  console.log('Enter buildLoginWarning function');
  warning = [];
  if (email == '') {
    warning.push('Enter email');
  }
  if (password == '') {
    warning.push('Enter password');
  }
  if (password != '' && password.length < 6) {
    warning.push('Password must be at least 6 characters');
  }
  if (warning != []) {
    console.log(warning);
    return warning;
  } else {
    console.log(warning);
    allowSubmit = true;
  }
}

// Display user warning message
function displayLoginWarning(email, password) {
  // Call appropriate function to build warning
  buildLoginWarning(email, password);
  console.log(createList(warning, 'warning_list', 'warning'));
  // Set html section 'message_container' as container
  var container = document.getElementById("message_container");
  // Display warning in container
  container.replaceChild(createList(warning, 'warning_list', 'warning'), container.firstChild);
}
