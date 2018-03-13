var container = document.getElementById("posts");
var my_cookie = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkbyBLdWtpYyIsImFkbWluIjp0cnVlLCJpYXQiOjE0NjQyOTc4ODV9.Y47kJvnHzU9qeJIN48_bVna6O0EDFiMiQ9LpNVDFymM";
var state = [{
  id: 1,
  content: 'Curabitur turpis. Phasellus accumsan cursus velit. Nunc nec neque. Integer tincidunt. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Curabitur vestibulum aliquam leo. Nullam cursus lacinia erat. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. Proin faucibus arcu quis ante.',
  author: 'Toto'
},
{
  id: 2,
  content: 'Curabitur vestibulum aliquam leo. Nullam cursus lacinia erat. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. Proin faucibus arcu quis ante.',
  author: 'Tata'
},
{
  id: 3,
  content: 'Nullam cursus lacinia erat.',
  author: 'Titi'
},
{
  id: 4,
  content: 'Phasellus accumsan cursus velit.',
  author: 'Pipo'
},
{
  id: 5,
  content: 'Phasellus accumsan cursus velit. Nunc nec neque. Integer tincidunt. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Curabitur vestibulum aliquam leo. Nullam cursus lacinia erat. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo.',
  author: 'Pipa'
}];

// function for reading the cookie and avoid or not the display of the login page
var cookieReader= function(cookie){
  var my_array = cookie.split('.');
  var my_jwt = JSON.parse(atob(my_array[1]));
  console.log(my_jwt);
  return my_jwt;
}
// print on screen "hello username"
document.getElementById("user_header").innerHTML = "HELLO "+ cookieReader(my_cookie).name;
// console.log(cookieReader(my_cookie).name);

// General function to create list items
function createLI(posts) {
  // Create a new <li></li>
  var postLI_node = document.createElement("li");
  //Add some class to it to style it
  postLI_node.setAttribute('class', 'postLI');
  // Add son content from the returned array from server
  postLI_node.innerHTML = "<span>"+posts.content+"</span><span>"+posts.author+"</span>";
  // Return li to the parent function (renderState)
  return postLI_node;
};

// General function to render the new state
function renderState(state) {
  // Create a new <ul></ul> with 'acList' class
  var postUL_node = document.createElement('ul');
  postUL_node.setAttribute('class', 'postUL');
  // Insert <li> calling createLI function
  state.forEach(function(item) {
    postUL_node.appendChild(createLI(item));
  });
  // Replace previous 'container' content (<ul>...</ul>)
  container.replaceChild(postUL_node, container.firstChild);
};

renderState(state);
