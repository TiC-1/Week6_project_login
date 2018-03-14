// Generic function to read token in the cookie and return decoded payload
function tokenReader(token) {
  var splittedToken = token.split('.');
  var payload = JSON.parse(atob(splittedToken[1]));
  return(payload);
}

// Generic function to creat an HTML list from an array
function createList(array, listClass, listItemClass) {
  // Create a new <ul></ul> and add a class
  var ul_node = document.createElement('ul');
  ul_node.setAttribute('class', listClass);
  // Insert <li> calling createLI function
  array.forEach(function(arrayItem) {
    ul_node.appendChild(createListItem(arrayItem));
  });
  return ul_node;

  // Embeded generic function to create list items
  function createListItem(arrayItem, listItemClass) {
    // Create a new <li></li> and add a class
    var li_node = document.createElement("li");
    li_node.setAttribute('class', listItemClass);
    // Add son content from 'arrayItem'
    li_node.innerHTML = "<span>" + arrayItem.content + "</span><span>" + arrayItem.author + "</span>";
    // Return li to the parent function (renderState)
    return li_node;
  };

};
