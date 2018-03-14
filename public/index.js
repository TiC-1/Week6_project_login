//
function checkUserStatus {

  // Function to check if token contains logged_in=true
  function redirectIfLogin(token) {
    // *** To be changed to .logged_in == true
    if (tokenReader(token).admin == true) {
      // *** To be changed to end point /posts
      // window.location.href = './posts.html';
      return token;
      // if no token or token not validated, listen to loggin form data
    } else {
      var allowSubmit = false;
      listenToForm();
    }
  }
}

function listenToForm() {
  document.getElementById("login_form").addEventListener("submit", function(event) {

    if (!allowSubmit) {
      event.preventDefault();
      // Get email input value
      var userEmail = event.target.querySelectorAll("input")[0].value;
      // Get password input value
      var userPassword = event.target.querySelectorAll("input")[1].value;
      // Display login warning message
      displayLoginWarning(userEmail, userPassword);

      // Display user warning message
      function displayLoginWarning(email, password) {
        // Call appropriate function to build warning
        buildLoginWarning(email, password);
        // Set html section 'message_container' as container
        var container = document.getElementById("message_container");
        // Display warning in container
        document.getElementById(container).innerHTML = createList(warning);

        // Check some input values and add infos to user global warning message
        function buildLoginWarning(email, password) {
          var warning = [];
          if (email == '') {
            warning.push('<p>Enter email</p>');
          }
          if (password == '') {
            warning.push('<p>Enter password</p>');
          }
          if (password != '' && password.length < 6) {
            warning.push('<p>Password must be at least 6 characters</p>');
          }
          if (warning != []) {
            return warning;
          } else {
            allowSubmit = true;
          }
        }
      }
    }
  });
}
