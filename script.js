$(function () {  // DOMContentLoaded
    $("#addtodo").attr("style", "visibility:visible");
    addDeleteListener();
    addNewEntryListener();
    addCheckListener();
    addDefaults();
    addButtonListener();

});

function addButtonListener() {
    $("#jodel").on("click", function(event) {
        $("#demo").toggleClass("no-vis");
    }); //onclick="document.getElementById('demo').style.display='block'"
}

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
}
