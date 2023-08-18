import { winnersNumber, URL } from './constant.js';

let userTest = {
  name: "",
  surname: "",
  balance: 0,
  photoURL: "https://i.pravatar.cc/300"
};

let players = await getUsers();
let winners = topPlayers(players, winnersNumber);


  
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

function topPlayers(players, winnersNumber ) {
  players.sort( (a, b) => b.balance - a.balance )

   return players.slice(0, winnersNumber)
}



export {postUser, userTest, winners}