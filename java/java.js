// ADD NEW ITEM TO END OF LIST
// give the ul an id name of 'list'
document.getElementsByTagName("ul")[0].id = "list";

var node = document.createElement("li");
var textNode = document.createTextNode("cream");
node.appendChild(textNode);
document.getElementById("list").appendChild(node);

// ADD NEW ITEM START OF LIST
var newItem = document.createElement("li");
var textNode = document.createTextNode("kale");
newItem.appendChild(textNode);

var listArray = document.getElementById("list");
listArray.insertBefore(newItem, list.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var liArray = document.getElementsByTagName("li");

for (let i = 0; i < liArray.length; i++)
{
	liArray[i].className = "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var tag = document.createElement("span");
var liLen = liArray.length;
var textNode = document.createTextNode(liLen);
tag.appendChild(textNode);

var element = document.getElementsByTagName("body")[0];
element.appendChild(tag);