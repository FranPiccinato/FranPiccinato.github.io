"use strict"
var nItems = document.querySelector("#nItems");
var count = 0;

var checked = document.querySelector('.btn-check');
var input = document.querySelector('#newTodo');


var btnAc = document.querySelector("#btn-active");
var btnAll = document.querySelector("#btn-all");
var btnCom = document.querySelector("#btn-completed");
var btnCl = document.querySelector("#btn-clear");

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

function filters(){
    if (btnAll.className.match("buttons-blue")) {
        var lis = document.querySelectorAll("li");
        count = lis.length;

        if (count === 1) {
            nItems.textContent = "1 item";
        } else {
            nItems.textContent = `${count} items`;
        }
    } else if (btnAc.className.match("buttons-blue")) {
        var lis = document.querySelectorAll("li:not(.marked)");
        count = lis.length;

        if (count === 1) {
            nItems.textContent = "1 item";
        } else {
            nItems.textContent = `${count} items`;
        }
    } else if (btnCom.className.match("buttons-blue")) {
        var lis = document.querySelectorAll("li.marked");
        count = lis.length;

        if (count === 1) {
            nItems.textContent = "1 item";
        } else {
            nItems.textContent = `${count} items`;
        }
    }
}

var submit = document.getElementById("newTodo");
var todoList = document.getElementById("todoList");
var body = document.body;

body.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {
        if (submit.value.trim().length === 0) {
            alert("Empty");
        } else {
            switch (input.className) {
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

                    if (btnAc.className.match("buttons-blue")) {
                        var li = document.querySelectorAll("li");
                        li.forEach(e => {
                            if (e.className.match("marked")) {
                                e.classList.add("hideTodo");
                            }
                        })
                    }
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

                    if (btnAc.className.match("buttons-blue")) {
                        var li = document.querySelectorAll("li");
                        li.forEach(e => {
                            if (e.className.match("marked")) {
                                e.classList.add("hideTodo");
                            }
                        })
                    }
                    break;
            }
            submit.value = "";
            input.classList.remove('marked');
            checked.classList.remove('checked')
        }
        filters();
    }
});

var contList = document.querySelector("#containerList")

contList.addEventListener("click", (e) => {
    if (e.target.className.match("btn-check")) {
        e.target.classList.toggle("checked");
        e.target.parentElement.classList.toggle('marked');

        if (btnAc.className.match("buttons-blue")) {
            var li = document.querySelectorAll("li");
            li.forEach(e => {
                if (e.className.match("marked")) {
                    e.classList.add("hideTodo");
                }
            })
        }

        
        if (btnCom.className.match("buttons-blue")) {
            var li = document.querySelectorAll("li");
            li.forEach(e => {
                if (!e.className.match("marked")) {
                    e.classList.add("hideTodo");
                }
            })
        }
    }

    if (e.target.className.match("imgCross")) {
        e.target.parentElement.parentElement.remove();
       filters();
    }
    filters();
    
});


btnAc.addEventListener("click", () => {
    var li = document.querySelectorAll("li");
    li.forEach(e => {
        e.classList.remove("hideTodo");
    })
    btnAc.classList.add("buttons-blue");
    btnAll.classList.remove("buttons-blue");
    btnCom.classList.remove("buttons-blue");

    li.forEach(e => {
        if (e.className.match("marked")) {
            e.classList.add("hideTodo");
        }
    });
    var lis = document.querySelectorAll("li:not(.marked)");
    count = lis.length;

    if (count === 1) {
        nItems.textContent = "1 item";
    } else {
        nItems.textContent = `${count} items`;
    }
});

btnAll.addEventListener("click", () => {
    var li = document.querySelectorAll("li");
    btnAll.classList.add("buttons-blue");
    btnAc.classList.remove("buttons-blue");
    btnCom.classList.remove("buttons-blue");

    li.forEach(e => {
        e.classList.remove("hideTodo");
    })
    var lis = document.querySelectorAll("li");
    count = lis.length;

    if (count === 1) {
        nItems.textContent = "1 item";
    } else {
        nItems.textContent = `${count} items`;
    }
});

btnCom.addEventListener("click", () => {
    var li = document.querySelectorAll("li");
    li.forEach(e => {
        e.classList.remove("hideTodo");
    })
    btnCom.classList.add("buttons-blue");
    btnAll.classList.remove("buttons-blue");
    btnAc.classList.remove("buttons-blue");

    li.forEach(e => {
        if (!e.className.match("marked")) {
            e.classList.add("hideTodo");
        }
    })

    var lis = document.querySelectorAll("li.marked");
    count = lis.length;

    if (count === 1) {
        nItems.textContent = "1 item";
    } else {
        nItems.textContent = `${count} items`;
    }
});

btnCl.addEventListener("click", (e) => {
    var li = document.querySelectorAll("li");

    li.forEach(e => {
        if (e.className.match("marked")) {
            e.remove();
        }
    })
    if (btnCom.className.match("buttons-blue")) {
        nItems.textContent = "0 items";
    }
    else if (btnAll.className.match("buttons-blue")) {
        var lis = document.querySelectorAll("li");
        count = lis.length;

        if (count === 1) {
            nItems.textContent = "1 item";
        } else {
            nItems.textContent = `${count} items`;
        }
    }
});

