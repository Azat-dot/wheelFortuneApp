   import { rotateWheel, getTransitionAndInfo, renderWinners, getUserDate} from"./events.js"
   import { winners } from './requests.js'




    const wheel = document.querySelector('.wheel-image-wrapper');
    const startButton = document.querySelector('.button');
    const balance = document.querySelector('.balance');
    const jackpot = document.querySelector('.jackpot');
    const backWindow = document.querySelector('.back-window');
    const backTextWrapper = document.querySelector('.back-text-wrapper');
    const greatButton = document.querySelector(".congrat-button")
    const backTextWindowBalance = document.querySelector(".back-window-money")
   



    rotateWheel(startButton, wheel, backWindow, backTextWrapper)
    getTransitionAndInfo(wheel, startButton, greatButton, backWindow, backTextWrapper, balance, jackpot, backTextWindowBalance)
    renderWinners(winners)
    window.addEventListener("load", async function()  { getUserDate()})
    window.addEventListener('beforeunload', (event) => {
            console.log('beforeunload');
            postUser(user.name, user.surname, user.balance)
            event.preventDefault();
    });
    


    
