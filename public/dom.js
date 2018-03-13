document.getElementById("login_form").addEventListener("submit", function(event) {
  event.preventDefault();

  // select email input
  var userEmail = event.target.querySelectorAll("input")[0].value;
  // select password input
  var userPassword = event.target.querySelectorAll("input")[1].value;


  // check some input values and add infos to user global warning message
  var warningMessage = '';

  if (userEmail == '') {
    warningMessage += '<p>Enter email</p>';
  }
  if (userPassword == '') {
    warningMessage += '<p>Enter password</p>';
  }
  if (userPassword != '' && userPassword.length < 6) {
    warningMessage += '<p>Password must be at least 6 characters</p>';
  }

  // display user warning message
  document.getElementById("message").innerHTML = warningMessage;

  // updateStateFromCity(updateDOM, location)

});
