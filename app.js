//SELECTORS
let button =document.getElementById('button');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let passwordinput =document.getElementById('password');

//EVENT LISTENERS
button.addEventListener('click', getPassword);
button2.addEventListener('click', function(){
    passwordinput.value = "";
});
button3.addEventListener('click', function(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    button.style.backgroundColor = "#" + randomColor;
})

//FUNCTIONS
function getPassword(){
    let chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?><:{}"';
    let passwordLength =16;
    let password="";

    for(var i=0; i<=passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password+= chars.substring(randomNumber, randomNumber+1);
    }
    passwordinput.value = password;
}