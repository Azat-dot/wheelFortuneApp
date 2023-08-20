import { OPTION_VALUE } from './constant.js'

function getWin(actualDeg, jackpot)  {
  let win
    switch (true){
   case actualDeg <= 50 && actualDeg >= 5:
     win = OPTION_VALUE[7];
     break;
   case actualDeg > 50 &&  actualDeg < 95:
     win = OPTION_VALUE[6];
     break;
   case actualDeg >= 95 && actualDeg < 140:
     win = OPTION_VALUE[5];
     break;
   case actualDeg >= 140 && actualDeg < 185:
     win = OPTION_VALUE[4];
     break;
   case actualDeg >= 185 && actualDeg < 230:
     win = OPTION_VALUE[3];
     break;
   case actualDeg >= 230 && actualDeg < 275:
     win = OPTION_VALUE[2];
     break;
   case actualDeg >= 275 && actualDeg < 320:
     win = OPTION_VALUE[1];
     break;
   default:
     win = 1000
     jackpot.style.border = "3px solid",
     jackpot.style["border-image-source"] = "linear-gradient(180deg, #FFCD7E 0%, #E18A00 100%)";
     jackpot.style["background-image"] = "linear-gradient(241.78deg, #BC0000 27.02%, #8B0000 82.05%), linear-gradient(180deg, #FFCD7E 0%, #E18A00 100%)";
   
     setTimeout(() => jackpot.style["background-image"] = "linear-gradient(327.68deg, #588DD8 -2.66%, #324FA5 80.63%), linear-gradient(180deg, #FFCD7E 0%, #E18A00 100%)", 3000
     )
}

return win
}

export {getWin};