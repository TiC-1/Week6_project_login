// *** VARIABLES ***
var warning = [];
var userEmail;
var userPassword;


// *** ACTIONS ***

// checkUserStatus();


// *** FUNCTIONS ***

// Global function checkUserStatus
function checkUserStatus() {
  console.log('Enter checkUserStatus function');
  redirectIfLogin(document.cookie);

  // Function to check if token contains logged_in=true
  function redirectIfLogin(token) {
    console.log('Enter redirectIfLogin function');

    if (document.cookie && tokenReader(document.cookie).loggedin) {
      window.location.href = '/posts.html';
      return token;
      // if no token or token not validated, listen to loggin form data
    } else {
      listenToForm();
    }
  }
}

function listenToForm() {
  console.log('Enter listenToForm function');

  document.getElementById("login_form").addEventListener("submit", function(event) {
    console.log('event function');
    event.preventDefault();
    // Get email input value
    userEmail = event.target.querySelectorAll("input")[0].value;
    // Get password input value
    userPassword = event.target.querySelectorAll("input")[1].value;
    // Display login warning message
    displayLoginWarning(userEmail, userPassword);
    if (warning.length == 0) {
      document.getElementById("login_form").submit();
    }
  });
}

// Display user warning message
function displayLoginWarning(email, password) {
  // Call appropriate function to build warning
  buildLoginWarning(email, password);
  // Set html section 'message_container' as container
  var container = document.getElementById("message_container");
  // Display warning in container
  if (warning.length != 0) {
    container.replaceChild(createList(warning, 'warning_list', 'warning'), container.firstChild);
  } else {
    container.innerHTML = '';
  }
  console.log(warning);
  return warning;
}

// Check some input values and add infos to user global warning message
function buildLoginWarning(email, password) {
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
  console.log(warning);
  return warning;
}
