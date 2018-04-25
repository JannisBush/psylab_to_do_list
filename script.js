function createBulletpoint() {
 var x = document.getElementById("tf");
 var text = x.value;
 var ul = document.getElementById("list");
 var li = document.createElement("li");
 li.appendChild(document.createTextNode(text));
 ul.appendChild(li);
}
function createBulletpointEnter(event) {
 if(event.keyCode == 13) {  
  var x = document.getElementById("tf");
  var text = x.value;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  ul.appendChild(li);
  return false;
 }
}
