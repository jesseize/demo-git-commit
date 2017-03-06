var getallen = [1,2,3,4,5];
var seizoenen = ["winter","lente","zomer","herfst"];
var seizoenen_getallen = [1,"winter",2,"lente",3,"zomer",4,"herfst"];

var part1 = document.getElementById('part-1');
var part2 = document.getElementById('part-2');
var part3 = document.getElementById('part-3');
var part4 = document.getElementById('part-4');
var part5 = document.getElementById('part-5');

// Getallen

for (var i = 0; i < getallen.length; i++) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(getallen[i]));
  part1.appendChild(li);
}

// Seizoenen

for (var i = 0; i < seizoenen.length; i++) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(seizoenen[i]));
  part2.appendChild(li);
}

// Seizoenen en getallen

for (var i = 0; i < seizoenen_getallen.length; i++) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(seizoenen_getallen[i]));
  part3.appendChild(li);
}

// Deel 4 Push

getallen.push("winter","zomer","lente");

for (var i = 0; i < getallen.length; i++) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(getallen[i]));
  part4.appendChild(li);
}

// Deel 5 Edit

getallen[0] = "winter";
getallen[1] = "lente";
getallen[2] = "zomer";

for (var i = 0; i < getallen.length; i++) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(getallen[i]));
  part5.appendChild(li);
}
