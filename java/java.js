function xyzClick() {
    var form = document.getElementById("xyzlogin");
    form.style.display = "block";
    var vendorForm = document.getElementById("vendorlogin");
	vendorForm.style.display = "none";
}
function vendorClick() {
    var form = document.getElementById("vendorlogin");
    form.style.display = "block";
    var xyzForm = document.getElementById("xyzlogin");
	xyzForm.style.display = "none";
}
function plusClick() {
    var form = document.getElementById("plusform");
    if (form.style.display === "none") {
      form.style.display = "block";
      document.getElementById("plus");
      var xyzForm = document.getElementById("editshipment");
	xyzForm.style.display = "none";
    } else {
      form.style.display = "none";
      document.getElementById("plus").style.backgroundColor = "";
      var xyzForm = document.getElementById("editshipment");
	xyzForm.style.display = "block";
    }
  }