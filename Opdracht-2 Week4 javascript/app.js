function tafel(number) {
    const container = document.getElementById('tafelvantien');
  
    container.innerHTML = '';
    let txt = '';
    for (let i = 1; i <= 10; i++) {
        const result = i * number;
        txt += `${i} x ${number} = ${result}<br>`; 
    }
  
    container.innerHTML = txt;
}