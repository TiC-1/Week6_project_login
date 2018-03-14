var token = provideToken();
var postsArray = providePostsList();


// Print on screen "hello username !"
document.getElementById("user_header").innerHTML = "Hello " + tokenReader(token).name + "!";

// Render posts list
function renderPostsList(postsArray) {
  // Call createList generic function
  createList(postsArray, "posts_list", "post");
  // Set html section 'post_container' as container
  var container = document.getElementById("posts_container");
  // Replace previous 'container'
  container.innerHTML = postsList;
}

// "<span>" + arrayItem.content + "</span><span>" + arrayItem.author + "</span>";
