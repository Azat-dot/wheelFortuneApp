import { postUser} from './requests.js'

// console.log("Event.js");
// postUser()
let deg = 0;
function appearBackWindow(backWindow) {
    setTimeout(()=>backWindow.style.display = 'block', 1500);
  }
  
function disappearBackWindow(greatButton, backWindow) {
        greatButton.addEventListener('click', () => {
    backWindow.style.display = 'none'
    })
}
  
  function rotateWheel(startButton, wheel, appearBackWindow, backWindow, backTextWrapper) {
  
    startButton.addEventListener('click', () => {
      startButton.style.pointerEvents = 'none';
      deg = Math.floor(5000 + Math.random() * 5000)
      wheel.style.transition = `all 1s ease-out`;
      wheel.style.transform = `rotate(${deg}deg)`;
      wheel.classList.add('blur');
  

      
      appearBackWindow(backWindow);
      appearBackWindow(backTextWrapper);
      
    });
  }
  
function getTransitionAndInfo(wheel, startButton, disappearBackWindow, greatButton, backWindow, backTextWrapper, balance_number, balance, getBalance, actualDeg,  optionValue, jackpot, backTextWindowBalance, moneyTotal, win) {
      wheel.addEventListener('transitionend', () => {
      wheel.classList.remove('blur');
      startButton.style.pointerEvents = 'auto';
      wheel.style.transition = 'none';
  
      actualDeg = deg % 360;
  
      disappearBackWindow(greatButton, backWindow)
      disappearBackWindow(greatButton, backTextWrapper)
  
        balance_number = balance.innerText.match(/\d{1,}/);

        getBalance(actualDeg, optionValue, jackpot, win)
        win = getBalance(actualDeg, optionValue, jackpot, win)
        backTextWindowBalance.innerHTML =  win
        balance_number = +balance_number + win - 50;
        balance.innerHTML = "BALANCE <br> " + balance_number
        moneyTotal.innerHTML = balance_number
  
      wheel.style.transform = `rotate(${actualDeg}deg)`;
    });
  }

  export {rotateWheel, getTransitionAndInfo, appearBackWindow, disappearBackWindow};