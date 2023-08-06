import{win, wheel, startButton, actualDeg, backWindow} from "./circleValue.js"

const balance = document.querySelector('.balance');
const moneyTotal = document.querySelector('.money-totall');
const greatButton = document.querySelector(".congrat-button")
const backWindowBalance = document.querySelector(".back-window-money")

let balance_number = 0;

wheel.addEventListener('transitionend', () => {
    // Remove blur
    wheel.classList.remove('blur');
    backWindow.classList.add('block');

    // Enable button when spin is over
    startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none';

    greatButton.addEventListener('click', () => {
      backWindow.style.display = 'none'
    })

    balance_number = balance.innerText.match(/\d{1,}/);

      backWindowBalance.innerHTML =  win
      
      balance_number = +balance_number + win - 50;
    
      balance.innerHTML = "BALANCE <br> " + balance_number

      moneyTotal.innerHTML = balance_number


    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
