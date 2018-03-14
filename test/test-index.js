// READ TOKEN
test("Test read token", function(assert) {
  var token = tokenReader(provideToken());
  assert.ok(token.admin, "Ado", "Token as 'admin' property");
});

// LOGIN FORM WARNING MESSAGES
test("Test login form warning messages", function(assert) {
  var token = tokenReader(provideToken());
  assert.ok(token.admin, "Ado", "Token as 'admin' property");
});
