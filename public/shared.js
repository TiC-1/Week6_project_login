// Generic function to read token in the cookie and return decoded payload
function tokenReader(jwt) {
  var splittedJWT = jwt.split('=');
  var splittedToken = splittedJWT[1].split('.');
  var payload = JSON.parse(atob(splittedToken[1]));
  console.log(payload);
  return payload;
}


// Generic function to create an HTML list from an array of values (NOT objects)
function createList(array, listClass, listItemClass) {
  if (array.length != 0) {
    // Create a new <ul></ul> and add a class
    var ul_node = document.createElement('ul');
    ul_node.setAttribute('class', listClass);
    // Insert <li> calling createLI function
    array.forEach(function(arrayItem) {
      ul_node.appendChild(createListItem(arrayItem, listItemClass));
    });
    return ul_node;
  } else {
    console.log('Empty array. No list to build!')
    return;
  }

  // Embeded generic function to create list items
  function createListItem(arrayEl, listItemClass) {
    // Create a new <li></li> and add a class
    var li_node = document.createElement("li");
    li_node.setAttribute('class', listItemClass);
    // Add son content from 'arrayItem'
    li_node.innerHTML = arrayEl;
    // Return li to the parent function (renderState)
    return li_node;
  };

};


// Generic function to create an HTML list from the array of posts (objects)
function createPostsList(array, listClass, listItemClass) {
  if (array.length != 0) {
    // Create a new <ul></ul> and add a class
    var ul_node = document.createElement('ul');
    ul_node.setAttribute('class', listClass);
    // Insert <li> calling createLI function
    for (var i = 0; i < postsNumbers; i++) {
      ul_node.appendChild(createPostsListItem(array[i], listItemClass));
    }
    return ul_node;
  } else {
    console.log('Empty array. No list to build!')
    return;
  }

  // Embeded generic function to create list items
  function createPostsListItem(arrayEl, listItemClass) {
    // Create a new <li></li> and add a class
    var li_node = document.createElement("li");
    li_node.setAttribute('class', listItemClass);
    // Add son content from 'arrayItem'
    li_node.innerHTML = '<span class="post_content">' + arrayEl.content + '</span><span class="post_author">' + arrayEl.username + '</span>';
    // Return li to the parent function (renderState)
    return li_node;
  };

};

// ***** GENERIC REQUEST FUNCTION *****
// Also parses the returned object

function request(cb, url) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) { // Request is completed
      if (xhr.status === 200) { // Request succeeded
        var responseObj = JSON.parse(xhr.responseText); // ok?
        cb(null, responseObj);
      } else { // Error in request
        var errorMessage = xhr.responseText;
        cb("Error " + url + " " + errorMessage);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
