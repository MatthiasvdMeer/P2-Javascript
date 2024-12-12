const products = { "console": "playstation", "console2": "Xbox", "Console3": "PC" };

let txt = "";
for (let key in products) {
    txt += products[key] + "<br>";
}

document.getElementById("list").innerHTML = txt.trim();