function xyzClick() {
    var form = document.getElementById("forgetxyz");
    form.style.display = "block";
    var vendorForm = document.getElementById("forgetvendor");
	vendorForm.style.display = "none";
}
function vendorClick() {
    var form = document.getElementById("forgetvendor");
    form.style.display = "block";
    var xyzForm = document.getElementById("forgetxyz");
	xyzForm.style.display = "none";
}