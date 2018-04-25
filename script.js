<<<<<<< HEAD
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
=======
$(function () {  // DOMContentLoaded
    $("#addtodo").attr("style", "visibility:visible");
    addDeleteListener();
    addNewEntryListener();
    addCheckListener();
    addDefaults();

});

function addListEntry(value) {
    $("#thelist").append("<tr class='todo'><th>" + value +
            "</th><th><input class='check' type='checkbox'></th><th><input type='button' class='del' value='Delete'></th></tr>");
}

function addDefaults() {
    addListEntry("Shopping");
    addListEntry("Watch TV");
    addListEntry("Learn");
}

function addDeleteListener() {
    $(document).on("click", ".del", function () {
        $(this).parent().parent().fadeOut("slow", function () {
            $(this).remove();
        });
    });
}

function addNewEntryListener() {
    $("#addtodo").on("submit", function (event) {
        addListEntry($("#newtodo").val());
        event.preventDefault();
    });
}

function addCheckListener() {
    $(document).on("click", ".check", function (event) {
        $(this).parent().parent().toggleClass("done", this.checked);
    });
>>>>>>> 9522841e5d39cf5821099be8f77be2bcb308e6ed
}
