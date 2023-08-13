const URL = "http://localhost:3000/users"


let user = {
    name: prompt("Please, type your name ?", ""),
    surname: prompt("Please, type your surname ?", ""),
  };

  
async function postUser() {
    console.log("Function is working");
  let response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });
  
  let result = await response.json();
}


export {postUser}