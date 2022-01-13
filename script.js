const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = new Date("Dec 25, 2022 00:00:00").getTime();
    
    let timer = setInterval(function () {
    let myDate = new Date().getTime();   
    let solution = christmas - myDate;
    let days = Math.floor(solution / (1000 * 60 * 60 * 24));
    let hours = Math.floor((solution %(1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((solution %(1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((solution %(1000 * 60)) / 1000);
    countdownDisplay.innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S "
    }, 1000)
    
    
}

renderCountdown()
