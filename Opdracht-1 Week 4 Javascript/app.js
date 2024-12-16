const container = document.getElementById('tafelvantien');

let txt = "";
for (let i = 1; i <= 10; i++) { 
  const result = i * 10;  
  txt += i + " x 10 = " + result + "<br>"; 
}
container.innerHTML = txt; 