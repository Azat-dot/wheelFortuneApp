import {optionValue} from "./constant.js";

const wheel = document.querySelector('.wheel-image-wrapper');
const startButton = document.querySelector('.button');
const jackpot = document.querySelector('.jackpot');
const backWindow = document.querySelector('.back-window');


let win;
let deg = 0;
const actualDeg = deg % 360;

  
    startButton.addEventListener('click', () => {
      // Disable button during spin

      startButton.style.pointerEvents = 'none';
      // Calculate a new rotation between 5000 and 10 000
      deg = Math.floor(5000 + Math.random() * 5000);
      // Set the transition on the wheel
      wheel.style.transition = `all 1s ease-out`;
      // Rotate the wheel
      wheel.style.transform = `rotate(${deg}deg)`;
      // Apply the blur
      wheel.classList.add('blur');

   
      setTimeout(()=>backWindow.style.display = 'block', 2000);
    });

switch (true){
    case actualDeg <= 50 && actualDeg >= 5:
      win = optionValue[7];
      break;
    case actualDeg > 50 &&  actualDeg < 95:
      win = optionValue[6];
      break;
    case actualDeg >= 95 && actualDeg < 140:
      win = optionValue[5];
      break;
    case actualDeg >= 140 && actualDeg < 185:
      win = optionValue[4];
      break;
    case actualDeg >= 185 && actualDeg < 230:
      win = optionValue[3];
      break;
    case actualDeg >= 230 && actualDeg < 275:
      win = optionValue[2];
      break;
    case actualDeg >= 275 && actualDeg < 320:
      win = optionValue[1];
      break;
    default:
      win = 1000
      jackpot.style.background = "linear-gradient(241.78deg, #BC0000 27.02%, #8B0000 82.05%)",
                                  "linear-gradient(180deg, #FFCD7E 0%, #E18A00 100%)";
}

export {wheel, startButton, win, actualDeg, backWindow}