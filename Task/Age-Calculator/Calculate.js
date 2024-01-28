let today = Date();
document.getElementById("date").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)) + '-' + (today.getDate());
console.log(document.getElementById("date").value)
