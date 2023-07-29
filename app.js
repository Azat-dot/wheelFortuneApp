(function() {
    const wheel = document.querySelector('.wheel-image-wrapper');
    const startButton = document.querySelector('.button');
    const balance = document.querySelector('.balance');
    const jackpot = document.querySelector('.jackpot');
    const moneyTotal = document.querySelector('.money-totall');
    let deg = 0;
    let optionValue = [
        "JACKPOT",
        "250",
        "400",
        "10",
        "100",
        "150",
        "200",
        "750",
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
      let win;
      console.log(actualDeg);
      if (actualDeg <= 50 && actualDeg >= 5) {
        balance.innerHTML = `BALANCE ${optionValue[7]}`;
        win = +optionValue[7];
        } else if (
          actualDeg > 50 &&  actualDeg < 95) {
        balance.innerHTML = `BALANCE ${optionValue[6]}`;
        win = +optionValue[6];
        } else if (
          actualDeg >= 95 && actualDeg < 140) {
        balance.innerHTML = `BALANCE ${optionValue[5]}`;
        win = +optionValue[5];
        } else if (
          actualDeg >= 140 && actualDeg < 185) {
        balance.innerHTML = `BALANCE  ${optionValue[4]}`;
        win = +optionValue[4];
        } else if (
            actualDeg >= 185 && actualDeg < 230) {
        balance.innerHTML = `BALANCE <br>${optionValue[3]}`;
        win = +optionValue[3];
        } else if (
            actualDeg >= 230 && actualDeg < 275) {
        balance.innerHTML = `BALANCE ${optionValue[2]}`;
        win = +optionValue[2];
        } else if (
            actualDeg >= 275 && actualDeg < 320) {
        balance.innerHTML = `BALANCE ${optionValue[1]}`;
        win = +optionValue[1];
        } else {
        balance.innerHTML = `BALANCE ${1000}`
            jackpot.style.background = "linear-gradient(241.78deg, #BC0000 27.02%, #8B0000 82.05%)",
            "linear-gradient(180deg, #FFCD7E 0%, #E18A00 100%)";
        win = 1000
        }
        console.log(win);
        moneyTotal.innerHTML = `${win}`


      // Set the real rotation instantly without animation
      wheel.style.transform = `rotate(${actualDeg}deg)`;
    });
  })();