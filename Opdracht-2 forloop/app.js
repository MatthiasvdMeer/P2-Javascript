let text = "";

for (let i = 0; i < 101; i++) {
  text += "The number is " + i + "<br>";
}

document.getElementById("loop").innerHTML = text;