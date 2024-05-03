"use strict"

var todoList = document.querySelectorAll('.btn-check');
todoList.forEach(todo => {
    todo.addEventListener('click', () =>{
        todo.classList.toggle('checked');
    });
});


