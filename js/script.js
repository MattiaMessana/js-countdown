//variabili 
let seconds = 11;
const timeDisplay = document.getElementById("countdown");

// individuo il bottone in pagina 
const startBtn = document.getElementById("start");

//eseguiamo la funziona al click sul bottone 
startBtn.addEventListener("click" , function() {
    //creo un countDown di 10 secondi 
const countDown = setInterval(function(){
    seconds--;
    if (seconds === 0) {
        console.warn('Buon Anno');
        clearInterval(countDown);
    }
    timeDisplay.innerHTML += ` 
    <div> ${seconds} </div>`
}, 1000);
})
