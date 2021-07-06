const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//실수 하고 싶지 않음을 나타낸다

function onLoginSubmit(event){

    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreeting(username);
    
}

function paintGreeting(username){
    //이미 유저이름이 있으면 greeting을 보여준다
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username} `;
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //유저이름이 없으면 hidden을 지워서 입력창을 보이게 함
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    //show the greetings
    paintGreeting(savedUsername);
}