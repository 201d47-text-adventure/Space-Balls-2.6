'use strict'

function getUserName(){
    var userName = document.getElementById('userName').value;
    var result = document.getElementById('result');

    if (userName.length > 15){
        result.textContent = 'Username must contain less than 15 characters';
        alert('Username must contain less than 15 characters');
    }  else {
        result.textContent = 'Your username is:' + userName;
        alert('Welcome, Captain, ' + userName);
        console.log(userName);
        }
}
var submitButton = document.getElementById('subButton');
