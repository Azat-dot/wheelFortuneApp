    const wheel = document.querySelector('.wheel-image-wrapper');
    const startButton = document.querySelector('.button');
    const balance = document.querySelector('.balance');
    const jackpot = document.querySelector('.jackpot');
    const moneyTotal = document.querySelector('.money-totall');
    const backWindow = document.querySelector('.back-window');
    const backTextWindow = document.querySelector('.back-text-window');
    const greatButton = document.querySelector(".congrat-button")
    const backTextWindowBalance = document.querySelector(".back-window-money")
    let deg = 0;
    let win;
    let balance_number = 0;

    
    let optionValue = [
        "JACKPOT",
        250,
        400,
        10,
        100,
        150,
        200,
        750,
        ]
  
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

   
      setTimeout(()=>backWindow.style.display = 'block', 1500);
      setTimeout(()=>backTextWindow.style.display = 'block', 1600);

    });
  
    wheel.addEventListener('transitionend', () => {
      // Remove blur
      wheel.classList.remove('blur');
 


      // Enable button when spin is over
      startButton.style.pointerEvents = 'auto';
      // Need to set transition to none as we want to rotate instantly
      wheel.style.transition = 'none';
      // Calculate degree on a 360 degree basis to get the "natural" real rotation
      // Important because we want to start the next spin from that one
      // Use modulus to get the rest value from 360
      const actualDeg = deg % 360;

      greatButton.addEventListener('click', () => {
        backWindow.style.display = 'none'
      })
      greatButton.addEventListener('click', () => {
        backTextWindow.style.display = 'none'
      })
//only numbers
      balance_number = balance.innerText.match(/\d{1,}/);

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
          jackpot.style.border = "3px solid"
          jackpot.style["border-image-source"] = "linear-gradient(180deg, #FFCD7E 0%, #E18A00 100%)";
          jackpot.style["background-image"] = "linear-gradient(241.78deg, #BC0000 27.02%, #8B0000 82.05%), linear-gradient(180deg, #FFCD7E 0%, #E18A00 100%)";
          // jackpot.style[box-shadow] = "0";

    }

        backTextWindowBalance.innerHTML =  win
        
        balance_number = +balance_number + win - 50;
      
        balance.innerHTML = "BALANCE <br> " + balance_number

        moneyTotal.innerHTML = balance_number


      // Set the real rotation instantly without animation
      wheel.style.transform = `rotate(${actualDeg}deg)`;
    });
