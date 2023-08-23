import { postUser} from './requests.js'
import { User } from './user.js'
import { getWin } from './getWin.js'
import { COST } from './constant.js'

let user;
let deg = 0;


function renderCard (winners) {

  return `
          <div class="winners-info">
                    <div class="avatar"> <img src=${winners.photoURL} class="avatar-img" style="border-radius: 50%"></div> 
                    <div class="user-name">${winners.name} ${winners.surname}</div>
                    <div class="money-totall">${winners.balance}</div>
                    <div class="coins"><img src="./coins.png" class="coins-img"></div>
                    
           </div>
  `
}

function renderWinners(winners) {
  document.getElementById('winners').innerHTML = ""
  winners.forEach(winner => {
      const element = document.createElement('div')
      element.innerHTML = renderCard(winner)
      
      document.getElementById('winners').append(element)
  })
}

function appearBackWindow(backWindow) {
    setTimeout(()=>backWindow.style.display = 'block', 1500);
  }
  
function disappearBackWindow(greatButton, backWindow) {
        greatButton.addEventListener('click', () => {
    backWindow.style.display = 'none'
    })
}

function rotateWheel(startButton, wheel, backWindow, backTextWrapper) {
  
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

function updateStylesOnWheelStop(wheel, startButton, actualDeg) {

      wheel.classList.remove('blur');
      startButton.style.pointerEvents = 'auto';
      wheel.style.transition = 'none';
      wheel.style.transform = `rotate(${actualDeg}deg)`;

  }
  
function getTransitionAndInfo(wheel, startButton, greatButton, backWindow, backTextWrapper, balance, jackpot, backTextWindowBalance) {
      wheel.addEventListener('transitionend', () => {
      
      let actualDeg = deg % 360;
      let win = getWin(actualDeg, jackpot)

      updateUserBalance(win - COST);
      balance.innerHTML = "BALANCE <br> " + user.balance
      backTextWindowBalance.innerHTML =  win

    

      updateStylesOnWheelStop(wheel, startButton, actualDeg);

      disappearBackWindow(greatButton, backWindow)
      disappearBackWindow(greatButton, backTextWrapper)
  
    });
  }

function updateUserBalance (sumBalance) {
    user.balance += sumBalance
}


function getUserDate() {
    let userName = prompt("Please, type your name ?", "");
    let surname = prompt("Please, type your surname ?", "");
    
    user = new User(userName, surname)


}

window.addEventListener('beforeunload', (event) => {
   postUser(user)



  // event.preventDefault();
  // return (event.returnValue = "");
});




  export {rotateWheel, getTransitionAndInfo, appearBackWindow, disappearBackWindow, renderWinners, getUserDate};
