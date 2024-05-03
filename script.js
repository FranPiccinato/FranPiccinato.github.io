"use strict"

var todoList = document.querySelectorAll('.btn-check');

todoList.forEach(todo => {
    todo.addEventListener('click', () =>{
        todo.classList.toggle('checked');
    });
});


var buttonState = document.querySelector('#btn-state');
var icon = document.querySelector('#img-state');


function modeChange(){
    if(icon.src == 'images/icon-moon.svg'){
        icon.src = 'images/icon-sun.svg';
    }else{
        icon.src = 'images/icon-moon.svg';
    }
}

buttonState.addEventListener('click', modeChange);
