var now = Date();
document.getElementById("date").value =now.getFullYear()  + "-" + ("0" + now.getMonth() + 1) + "-" + now.getDate();
console.log(document.getElementById("date").value);
// document.getElementsByClassName("date").value = DateString();
