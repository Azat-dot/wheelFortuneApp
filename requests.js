const URL = "http://localhost:3000/users"



let user = {
  name: "John",
  surname: "Smith",
  balance: 0
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



async function getUser() {
  console.log("post req is working");
  let response = await fetch(URL)
  return response.json();
}


export {postUser, user, getUser}