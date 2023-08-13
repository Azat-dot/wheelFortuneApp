   import { rotateWheel, getTransitionAndInfo, appearBackWindow, disappearBackWindow } from"./events.js"
   import { getBalance} from './getBalance.js'
   import { optionValue } from './constant.js'



    const wheel = document.querySelector('.wheel-image-wrapper');
    const startButton = document.querySelector('.button');
    const balance = document.querySelector('.balance');
    const jackpot = document.querySelector('.jackpot');
    const moneyTotal = document.querySelector('.money-totall');
    const backWindow = document.querySelector('.back-window');
    const backTextWrapper = document.querySelector('.back-text-wrapper');
    const greatButton = document.querySelector(".congrat-button")
    const backTextWindowBalance = document.querySelector(".back-window-money")
    let win;
    let balance_number = 0;
    let actualDeg = 0;



    rotateWheel(startButton, wheel, appearBackWindow, backWindow, backTextWrapper)
    getTransitionAndInfo(wheel, startButton, disappearBackWindow, greatButton, backWindow, backTextWrapper, balance_number, balance, getBalance, actualDeg, optionValue, jackpot, backTextWindowBalance, moneyTotal, win)

    


    
