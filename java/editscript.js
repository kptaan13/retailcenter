var editButtons = document.querySelectorAll("button.edit");
for (var i = 0; i < editButtons.length; i++) {
  editButtons[i].addEventListener("click", function() {
  });
}
var deleteButtons = document.querySelectorAll("button.delete");

for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function(event) {
    var button = event.target;
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  });
}
