let timer; // Om de setTimeout-ID op te slaan
let startTime; // Om de starttijd vast te leggen
let gameActive = false; // Om de spelstatus bij te houden

function Klikknop() {
    const goButton = document.getElementById("GO");
    const redArea = document.getElementById("red");
    const message = document.getElementById("message");

    // Verberg de knop en maak het scherm rood
    goButton.style.display = "none";
    redArea.style.backgroundColor = "red";
    message.style.display = "none";

    // Genereer een willekeurige tijd (max 10 seconden)
    const randomTime = Math.random() * 10000;

    // Start de groenfase na de random tijd
    timer = setTimeout(() => {
        redArea.style.backgroundColor = "green";
        message.textContent = "Klik nu!";
        message.style.display = "block";
        startTime = Date.now();
        gameActive = true; // Het spel wordt actief
    }, randomTime);

    // Voeg een klikgebeurtenis toe aan rood/groen gebied
    redArea.addEventListener("click", handleClick);
}

function handleClick() {
    const redArea = document.getElementById("red");
    const message = document.getElementById("message");
    const goButton = document.getElementById("GO");

    if (gameActive) {
        // Bereken reactietijd
        const reactionTime = Date.now() - startTime;
        message.textContent = `Je reactietijd was ${reactionTime} ms!`;
        gameActive = false; // Spel stopt na een klik
        setTimeout(resetGame, 2000); // Wacht 2 seconden en reset dan
    } else if (redArea.style.backgroundColor === "red") {
        message.textContent = "TO EARLY!!!! YOU DONT KNOW HOW TO PLAY!!!!!";
        message.style.display = "block";
    }
}

function resetGame() {
    const goButton = document.getElementById("GO");
    const redArea = document.getElementById("red");
    const message = document.getElementById("message");

    // Reset spelstatus
    clearTimeout(timer);
    redArea.style.backgroundColor = "white";
    goButton.style.display = "inline-block";
    message.style.display = "none";
    gameActive = false;
}

// Voeg een klikgebeurtenis toe aan de "GO" knop
document.getElementById("GO").addEventListener("click", Klikknop);