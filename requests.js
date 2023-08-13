const URL = "http://localhost:3000/users"

let newName = +prompt("your name ?", " ")

let user = {
    name: +prompt("your name ?", ""),
    surname: 'Smith'
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
  alert(result.message);
}


export {postUser}