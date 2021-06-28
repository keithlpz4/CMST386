//get year
const d = new Date();
document.getElementById("showTimeDate").innerHTML = (("0"+d.getDate()).slice(-2)) + "." + (("0"+(d.getMonth()+1)).slice(-2)) + "."+(d.getFullYear()) + " " + (("0" + d.getHours()).slice(-2)) + ":" + (("0"+d.getMinutes()).slice(-2));
d.toLocaleDateString();