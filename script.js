"use strict"

var todoList = document.querySelectorAll('.btn-check');
var check = document.querySelector('.imgCheck');

todoList.forEach(todo => {
    todo.addEventListener('click', () => {
        todo.classList.toggle('checked');
    });
});


var buttonState = document.querySelector('#btn-state');
var icon = document.querySelector('#img-state');
var body = document.body;
var containerNew = document.querySelector('#containerNewTodo');
var containerList = document.querySelector('#containerList');
var containerFilter = document.querySelector('#containerFilter');
var attri = document.querySelector(".attribution");
var li = document.querySelectorAll("li");

function modeChange() {
    const img = icon.src;
    const imageName = img.match(/\w+(?=\.svg$)/)[0];
    var btnCh = document.querySelectorAll('.btn-check');

    if (imageName == 'moon') {
        icon.src = 'images/icon-sun.svg';
       
        body.classList.add("bodyDark");
        
        containerNew.classList.add("DarkNewTodo");
        containerNew.classList.remove("lightNewTodo");

        btnCh.forEach(btn => {
            btn.classList.add("btn-checkDark");
            btn.classList.remove("btn-checkLight");
        });

        containerList.classList.add("containerListDark");
        containerList.classList.remove("containerListLight");

        containerFilter.classList.add("FilterDark");
        containerFilter.classList.remove("FilterLight");

        attri.classList.add("footerDark");
        attri.classList.remove("footerLight");

        li.forEach(item => {
            item.classList.add("darkLine");
            item.classList.remove("lightLine");
        });
    } else {
        icon.src = 'images/icon-moon.svg';
        body.classList.remove("bodyDark");
        
        containerNew.classList.remove("DarkNewTodo");
        containerNew.classList.add("lightNewTodo");

        btnCh.forEach(btn => {
            btn.classList.add("btn-checkLight");
            btn.classList.remove("btn-checkDark");
        });

        containerList.classList.add("containerListLight");
        containerList.classList.remove("containerListDark");

        containerFilter.classList.add("FilterLight");
        containerFilter.classList.remove("FilterDark");

        attri.classList.add("footerLight");
        attri.classList.remove("footerDark");

        li.forEach(item => {
            item.classList.add("lightLine");
            item.classList.remove("darkLine");
        });
    }
}

buttonState.addEventListener('click', modeChange);
