const n = documen.getElementById("no");
let nLen = n.length;

let number = "<ul>";
for (let i = 0; i < nLen; i++) {
  number += "<li>" + n[i] + "</li>";
}
number += "</ul>";

document.getElementById("demo3").innerHTML = number;

