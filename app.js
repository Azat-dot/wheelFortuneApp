    const wheel = document.querySelector('.wheel-image-wrapper');
    const startButton = document.querySelector('.button');
    const balance = document.querySelector('.balance');
    const jackpot = document.querySelector('.jackpot');
    const moneyTotal = document.querySelector('.money-totall');
    const backWindow = document.querySelector('.back-window');
    const greatButton = document.querySelector(".congrat-button")
    const backWindowBalance = document.querySelector(".back-window-money")
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

   
      setTimeout(()=>backWindow.style.display = 'block', 2000);
    });
  
    wheel.addEventListener('transitionend', () => {
      // Remove blur
      wheel.classList.remove('blur');
      backWindow.classList.add('block');

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
          jackpot.style.background = "linear-gradient(241.78deg, #BC0000 27.02%, #8B0000 82.05%)",
                                      "linear-gradient(180deg, #FFCD7E 0%, #E18A00 100%)";
    }

        backWindowBalance.innerHTML =  win
        
        balance_number = +balance_number + win - 50;
      
        balance.innerHTML = "BALANCE <br> " + balance_number

        moneyTotal.innerHTML = balance_number


      // Set the real rotation instantly without animation
      wheel.style.transform = `rotate(${actualDeg}deg)`;
    });
