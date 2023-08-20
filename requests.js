import { WINNERS_NUMBERS, URL } from './constant.js';

let userTest = {
  name: "",
  surname: "",
  balance: 0,
  photoURL: "https://i.pravatar.cc/300"
};

let players = await getUsers();
let winners = topPlayers(players, WINNERS_NUMBERS);


  
async function postUser() {
  let response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });
  
}

async function getUsers() {
  let response = await fetch(URL)
  return response.json();
}

function topPlayers(players, winnersNumbers) {
  players.sort( (a, b) => b.balance - a.balance )

   return players.slice(0, winnersNumbers)
}


export {postUser, userTest, winners}