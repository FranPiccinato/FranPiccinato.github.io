"use strict"

var checked = document.querySelector('.btn-check');
var input = document.querySelector('#newTodo');

checked.addEventListener('click', () => {
    checked.classList.toggle('checked');
    input.classList.toggle('marked');
});


var buttonState = document.querySelector('#btn-state');

function modeChange() {
    var icon = document.querySelector('#img-state');
    var body = document.body;
    var containerNew = document.querySelector('#containerNewTodo');
    var containerList = document.querySelector('#containerList');
    var containerFilter = document.querySelector('#containerFilter');
    var attri = document.querySelector(".attribution");
    var li = document.querySelectorAll("li");
    var input = document.querySelector("input");
    var btnAc = document.querySelector("#btn-active");
    var btnAll = document.querySelector("#btn-all");
    var btnCom = document.querySelector("#btn-completed");
    var btnCl = document.querySelector("#btn-clear");

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

        input.classList.add("inputDark");
        input.classList.remove("inputLight");

        btnAc.classList.add("buttons-dark");
        btnAc.classList.remove("buttons-light");
        btnAll.classList.add("buttons-dark");
        btnAll.classList.remove("buttons-light");
        btnCom.classList.add("buttons-dark");
        btnCom.classList.remove("buttons-light");
        btnCl.classList.add("buttons-dark");
        btnCl.classList.remove("buttons-light");
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

        input.classList.add("inputLight");
        input.classList.remove("inputDark");

        btnAc.classList.add("buttons-light");
        btnAc.classList.remove("buttons-dark");
        btnAll.classList.add("buttons-light");
        btnAll.classList.remove("buttons-dark");
        btnCom.classList.add("buttons-light");
        btnCom.classList.remove("buttons-dark");
        btnCl.classList.add("buttons-light");
        btnCl.classList.remove("buttons-dark");
    }
}

buttonState.addEventListener('click', modeChange);


var submit = document.getElementById("newTodo");
var todoList = document.getElementById("todoList");
var body = document.body;
var nItems = document.querySelector("#nItems")
var count = 0;

body.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {
        if (submit.value === '') {
            alert("Vacío");
        } else {
            count += 1;
            if(count === 1){
                nItems.textContent = "1 item";
            }else{
                nItems.textContent = `${count} items`;
            }
            switch(input.className){
                case 'inputLight':
                    todoList.innerHTML += `
                    <li class="lightLine">
                    <div class="btn-check btn-checkLight">
                    <img class="imgCheck" src="images/icon-check.svg">
                    </div>
                    ${submit.value}
                    <div id="cross" class="hide">
                    <img class="imgCross" src="images/icon-cross.svg">
                    </div>
                    </li>
                        `
                        break;
                case 'inputDark':
                    todoList.innerHTML += `
                    <li class="lightLine">
                    <div class="btn-check btn-checkDark">
                    <img class="imgCheck" src="images/icon-check.svg">
                    </div>
                    ${submit.value}
                    <div id="cross" class="hide">
                    <img class="imgCross" src="images/icon-cross.svg">
                    </div>
                    </li>
                        `
                        break;
                case 'inputLight marked':
                    todoList.innerHTML += `
                    <li class="lightLine marked">
                    <div class="btn-check btn-checkLight checked">
                    <img class="imgCheck" src="images/icon-check.svg">
                    </div>
                    ${submit.value}
                    <div id="cross" class="hide">
                    <img class="imgCross" src="images/icon-cross.svg">
                    </div>
                    </li>
                        `
                        break;
                case 'inputDark marked':
                    todoList.innerHTML += `
                    <li class="lightLine marked">
                    <div class="btn-check btn-checkDark checked">
                    <img class="imgCheck" src="images/icon-check.svg">
                    </div>
                    ${submit.value}
                    <div id="cross" class="hide">
                    <img class="imgCross" src="images/icon-cross.svg">
                    </div>
                    </li>
                        `
                        break;
            }
            submit.value = "";
            input.classList.remove('marked');
            checked.classList.remove('checked')
        }
    }
});

var contList = document.querySelector("#containerList")
contList.addEventListener("click", (e) => {
    if (e.target.className.match("btn-check")) {
        e.target.classList.toggle("checked");
        e.target.parentElement.classList.toggle('marked');
    }

    if (e.target.className.match("imgCross")) {
        e.target.parentElement.parentElement.remove();
        count -= 1;
        if(count === 1){
            nItems.textContent = "1 item";
        }else{
            nItems.textContent = `${count} items`;
        }
    }
});

