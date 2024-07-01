let u = 2;
let arr = [];
let arr1 = [];

let innerdiv = document.querySelector(".user1");
console.log(innerdiv);
let button = document.querySelectorAll("button");
// console.log(button[0]);
button[0].addEventListener("click", adduser);
function adduser() {
  addUser();
}
function subbmit() {}

function addUser(e) {
  let user2 = document.createElement("div");
  user2.className = `user${u}`;
  let input1 = document.createElement("input");
  input1.setAttribute("name", `username${u}`);
  input1.setAttribute("type", `text`);
  input1.setAttribute("placeholder", `name`);

  let input2 = document.createElement("input");
  input2.setAttribute("name", `useremail${u}`);
  input2.setAttribute("type", `text`);
  input2.setAttribute("placeholder", `email`);
  user2.appendChild(input1);
  user2.appendChild(input2);
  innerdiv.appendChild(user2);
  console.log(user2);

  input1.addEventListener("keyup", runname);
  input2.addEventListener("keyup", runemail);
  u++;
}
let namee = "";
let email = "";
let input = document.querySelectorAll("input");
input[0].addEventListener("keyup", runname);
input[1].addEventListener("keyup", runemail);
function runname(e) {
  let str = "";
  namee = e.target.value;
}
function runemail(e) {
  email = e.target.value;
  //   console.log(email);
}
button[1].addEventListener("click", subbmit);
function subbmit() {
  let obj = {};
  obj.name = namee;
  obj.email = email;
  //   console.log(namee);
  //   console.log(email);
  arr.push(obj);
  console.log(arr);
}
