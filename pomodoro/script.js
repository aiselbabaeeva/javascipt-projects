let buttonTrio = document.querySelectorAll('.trio');
let buttonFocus = document.getElementById('focus');
let buttonShortBreak = document.getElementById('shortBreak');
let buttonLongBreak = document.getElementById('longBreak');
let buttonShow = document.getElementById('show');
let buttonStart = document.getElementById('start');
let buttonReset = document.getElementById('reset');
let buttonPause = document.getElementById('pause');
let time = document.getElementById("time");


let set;
let active = "focus";
let count = 59;
let paused = true;
let minCount = 24;
time.textContent = `${minCount + 1}:00`;

const appendZero = (value) => {
    value = value < 10 ? `0${value}` : value;
    return value;
  };
  buttonReset.addEventListener(
    "click",
    (resetTime = () => {
      pauseTimer();
      switch (active) {
        case "long":
          minCount = 14;
          break;
        case "short":
          minCount = 4;
          break;
        default:
          minCount = 24;
          break;
      }
      count = 59;
      time.textContent = `${minCount + 1}:00`;
    })
  );
  

  const removeFocus = () => {
    buttonTrio.forEach((btn) => {
      btn.classList.remove("btn-focus");
    });
  };
  
  buttonFocus.addEventListener("click", () => {
    removeFocus();
    focusButton.classList.add("btn-focus");
    pauseTimer();
    minCount = 24;
    count = 59;
    time.textContent = `${minCount + 1}:00`;
  });
  
  buttonShortBreak.addEventListener("click", () => {
    active = "short";
    removeFocus();
    buttonShortBreak.classList.add("btn-focus");
    pauseTimer();
    minCount = 4;
    count = 59;
    time.textContent = `${appendZero(minCount + 1)}:00`;
  });
  
  buttonLongBreak.addEventListener("click", () => {
    active = "long";
    removeFocus();
    buttonLongBreak.classList.add("btn-focus");
    pauseTimer();
    minCount = 14;
    count = 59;
    time.textContent = `${minCount + 1}:00`;
  });
  
  buttonPause.addEventListener(
    "click",
    (pauseTimer = () => {
      paused = true;
      clearInterval(set);
      buttonStart.classList.remove("hide");
      buttonPause.classList.remove("show");
      buttonReset.classList.remove("show");
    })
  );
  
  buttonStart.addEventListener("click", () => {
    buttonReset.classList.add("show");
    buttonPause.classList.add("show");
    buttonStart.classList.add("hide");
    buttonStart.classList.remove("show");
    if (paused) {
      paused = false;
      time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
      set = setInterval(() => {
        count--;
        time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
        if (count == 0) {
          if (minCount != 0) {
            minCount--;
            count = 60;
          } else {
            clearInterval(set);
          }
        }
      }, 1000);
    }
  });




