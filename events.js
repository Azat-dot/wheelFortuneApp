import { postUser, userTest, winners } from './requests.js'
import { User } from './user.js'

let user;

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

renderWinners(winners)



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
  
function getTransitionAndInfo(wheel, startButton, disappearBackWindow, greatButton, backWindow, backTextWrapper, balance, getBalance, actualDeg,  optionValue, jackpot, backTextWindowBalance, moneyTotal) {
      wheel.addEventListener('transitionend', () => {
      wheel.classList.remove('blur');
      startButton.style.pointerEvents = 'auto';
      wheel.style.transition = 'none';


      actualDeg = deg % 360;
        let balance_number = balance.innerText.match(/\d{1,}/);// куда надо отправить

        let win = getBalance(actualDeg, optionValue, jackpot) // текуший выйгрыш
        backTextWindowBalance.innerHTML =  win
        balance_number = +balance_number + win - 50;

        balance.innerHTML = "BALANCE <br> " + balance_number// отправка баланса

        moneyTotal.innerHTML = balance_number
        
        user.balance += balance_number // итоговый баланс
   
      disappearBackWindow(greatButton, backWindow)
      disappearBackWindow(greatButton, backTextWrapper)
  
      wheel.style.transform = `rotate(${actualDeg}deg)`;

    });
  }


function getUserDate() {
    let userName = prompt("Please, type your name ?", "");
    let surname = prompt("Please, type your surname ?", "");
    
    user = new User(userName, surname)

}

window.addEventListener("load", async function()  {

    getUserDate()
})

// postUser(user.balance = balance_number, user.name = userName, user.surname = surname)




  export {rotateWheel, getTransitionAndInfo, appearBackWindow, disappearBackWindow, renderWinners};