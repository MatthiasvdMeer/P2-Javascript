
let shoppingcart = ["Bananen","Whiskey","Chips", "Bonen", "Aardappelen"];

let products = shoppingcart.length;
    document.getElementById("length").innerText = 
        "There are "  +  products  +  " products in your shoppingcart.";


let listproducts = shoppingcart.join(", ");
    document.getElementById("products").innerText = 
        "Your items are: " + listproducts;


let fourthproduct = shoppingcart[3];
    document.getElementById("4th").innerText = 
        fourthproduct  + " is on the 4th place in your shoppingcart.";

  
let shoppingcartchange = [...shoppingcart];
shoppingcartchange[1] = "Bier";
    document.getElementById("products").innerText = 
    "Your products are now: " + shoppingcartchange.join(", ");


function addproduct() {
    let newproduct = document.getElementById("input").value;

    if (newproduct.trim() === "") {
        alert("use a valid product id");
        return;
    }

    shoppingcartchange.push(newproduct);

    Showshoppingcart();

    document.getElementById("input").value = "";

}

function Showshoppingcart(){
    if (shoppingcartchange.length > 1) {
        document.getElementById("products").innerText =
            "Your products are: " + shoppingcartchange.join(", ");
    } else {
        document.getElementById("products").innerText =
            "You don't have enough products to show";
    }
}

Showshoppingcart();

function controleerVijfdeProduct() {
    if (shoppingcartchange.length >= 5) {
        if (shoppingcartchange[5].toLowerCase() === "drop") {
            document.getElementById("drop").innerText =
                "Uw producten zijn: " + shoppingcartchange.join(", ");
        } else {
            document.getElementById("drop").innerText =
                "U heeft geen drop.";
        }
    } else {
        document.getElementById("drop").innerText =
            "U heeft te weinig producten om te controleren.";
    }
}


function removeproducts() {
   
    let oudWinkelmandje = [...shoppingcartchange];

    shoppingcartchange.splice(0, 2);

    document.getElementById("old").innerText = 
        "Uw oude winkelmandje: " + oudWinkelmandje.join(", ");
}

function sortshoppingcart() {
    shoppingcartchange.sort();

    document.getElementById("products").innerText = 
        "Uw gesorteerde winkelmandje: " + shoppingcartchange.join(", ");
}
Showshoppingcart();