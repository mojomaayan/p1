function click_action() {
var item = document.getElementById("item");
var yes = document.getElementById("yes");
// var no = document.getElementById("no");
//
// yes.onclick = function(){
//
item.style.background = "red";

if (item.style.background != "red") {
   item.style.background = "red";
}
if (yes.style.background != "red") {
   yes.style.background = "red";
}
// }
//
// no.onclick = function(){
//     item.style.backgroundColor = "green";
// }
}
