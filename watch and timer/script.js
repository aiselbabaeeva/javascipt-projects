const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");

const setClock = setInterval(function clock() {
  let dateNow = new Date();
  let hr = dateNow.getHours();
  let min = dateNow.getMinutes();
  let sec = dateNow.getSeconds();

  let calcHr = hr * 30 + min / 2;
  let calcMin = min * 6;
  let calcSec = sec * 6;

  hour.style.transform = `rotate(${calcHr}deg)`;
  minute.style.transform = `rotate(${calcMin}deg)`;
  seconds.style.transform = `rotate(${calcSec}deg)`;
}, 1000);


let minuteButton = document.getElementById('minutes');
let secondButton = document.getElementById('seconds');
let tensButton = document.getElementById('tens');


let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

let interval;


let min = 0;
let sec = 0;
let ten = 0;

const startTimer = () => {
    ten++;
    if(ten <= 9) {
        tensButton.innerHTML = '0' + ten;
    }
    if(ten < 9) {
        tensButton.innerHTML = ten;
    }    
    if(ten < 99) {
        sec++;
        secondButton.innerHTML = '0' + sec;
        ten=0
        tensButton.innerHTML = '0' + 0;

    }
    if(sec > 9){
        secondButton.innerHTML = sec;
    }
    if(sec > 59){
        min++;
        minuteButton.innerHTML = '0' + min;
        sec = 0;
        secondButton.innerHTML = '0' + 0;

    }
}

startButton.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startTimer,1000);

};


stopButton.onclick = () => {
    clearInterval(interval);

};

