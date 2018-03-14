// READ TOKEN
test("Test read token", function(assert) {
  var token = tokenReader(provideToken());
  assert.equal(token.admin, true, "Token 'admin' property is true");
  assert.equal(token.name, "Ado Kukic", "User is Ado Kukic");
});

// LOGIN FORM WARNING MESSAGES
test("Test login form with empty values", function(assert) {
  var email = provideLoginData()[0].email;
  var password = provideLoginData()[0].password;
  console.log(email, password);
  var formData = buildLoginWarning(email, password);
  console.log(formData);
  assert.equal(formData[0], "Enter email", "Email warning exists");
  assert.equal(formData[1], "Enter password", "Password warning exists");
});

test("Test login form with bad email and short password", function(assert) {
  var email = provideLoginData()[1].email;
  var password = provideLoginData()[1].password;
  console.log(email, password);
  var formData = buildLoginWarning(email, password);
  console.log(formData);
  assert.equal(formData[0], "Password must be at least 6 characters", "Password length warning exists");
});

test("Test login form with valid data", function(assert) {
  var email = provideLoginData()[2].email;
  var password = provideLoginData()[2].password;
  console.log(email, password);
  var formData = buildLoginWarning(email, password);
  console.log(formData);
  assert.equal(formData[0], undefined, "No warnings");
});
