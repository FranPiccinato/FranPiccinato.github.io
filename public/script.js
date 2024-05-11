"use strict"
const db = firebase.firestore();

let todoRef;
let unsubscribe;

todoRef = db.collection('TodoList');

function setCookie(cname, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${cname}=${value}; ${expires}; path=/`

}

function deleteCookie(cname) {
    setCookie(cname, null, null);
}

function getCookie(cname) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(e => {
        if (e.indexOf(cname) == 0) {
            result = e.substring(cname.length + 1);
        }
    })

    return result;
}
var nItems = document.querySelector("#nItems");
var count = 0;
var input = document.querySelector('#newTodo');
var submit = document.getElementById("newTodo");
var todoList = document.getElementById("todoList");
var body = document.body;
var btnAc = document.querySelector("#btn-active");
var btnAll = document.querySelector("#btn-all");
var btnCom = document.querySelector("#btn-completed");
var btnCl = document.querySelector("#btn-clear");

setTheme(getCookie("theme"));
newUuid();
loadValues();
filters();

function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}


function newUuid() {
    if (getCookie("uuidv4") == null) {
        setCookie("uuidv4", uuidv4(), 365);
    }
}


var checked = document.querySelector('.btn-check');


checked.addEventListener('click', () => {
    checked.classList.toggle('checked');
    input.classList.toggle('marked');
});


var buttonState = document.querySelector('#btn-state');

function setTheme(themeName) {
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

    var btnCh = document.querySelectorAll('.btn-check');

    if (themeName == 'moon') {
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
        setCookie("theme", imageName, 365);
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
        setCookie("theme", imageName, 365);

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

function filters() {
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


body.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {
        if (submit.value.trim().length === 0) {
            alert("Empty");
        } else {
            let statem = "unmarked";
            if(submit.classList.item(1) != null){
                statem = "marked";
            }
            const { serverTimestamp } = firebase.firestore.FieldValue;
            todoRef.add({
                uid: getCookie("uuidv4"),
                task: submit.value,
                createdAt: serverTimestamp(),
                state: statem,
                id: uuidv4()
                

            });
            submit.value = "";
            input.classList.remove('marked');
            checked.classList.remove('checked');
        }
        filters();
    }
});

function loadValues() {
    
    unsubscribe = todoRef
        .where("uid", '==', getCookie("uuidv4"))
        .orderBy("createdAt")
        .onSnapshot(querySnapshot => {
            const items = querySnapshot.docs.map(doc => {
                return [doc.data().task, doc.data().state, doc.data().id]
            });
            if (items.length === 1) {
                nItems.textContent = "1 item";
            } else {
                nItems.textContent = `${items.length} items`;
            }
            todoList.innerHTML = "";
            items.forEach(item => {
                if(item[1] == "marked"){
                    input.classList.add("marked");
                }
                switch (input.className) {
                    case 'inputLight':
                        todoList.innerHTML += `
                        <li class="lightLine" draggable="true" id="${item[2]}">
                        <div class="btn-check btn-checkLight">
                        <img class="imgCheck" src="images/icon-check.svg">
                        </div>
                        ${item[0]}
                        <div id="cross" class="hide">
                        <img class="imgCross" src="images/icon-cross.svg">
                        </div>
                        </li>
                            `
                        break;
                    case 'inputDark':
                        todoList.innerHTML += `
                        <li class="lightLine" draggable="true" id="${item[2]}">
                        <div class="btn-check btn-checkDark">
                        <img class="imgCheck" src="images/icon-check.svg">
                        </div>
                        ${item[0]}
                        <div id="cross" class="hide">
                        <img class="imgCross" src="images/icon-cross.svg">
                        </div>
                        </li>
                            `
                        break;
                    case 'inputLight marked':
                        todoList.innerHTML += `
                        <li class="lightLine marked" draggable="true" id="${item[2]}">
                        <div class="btn-check btn-checkLight checked">
                        <img class="imgCheck" src="images/icon-check.svg">
                        </div>
                        ${item[0]}
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
                        <li class="lightLine marked" draggable="true" id="${item[2]}">
                        <div class="btn-check btn-checkDark checked">
                        <img class="imgCheck" src="images/icon-check.svg">
                        </div>
                        ${item[0]}
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
                input.classList.remove("marked")

            });
        });
};
var contList = document.querySelector("#containerList")

contList.addEventListener("click", (e) => {
    if (e.target.className.match("btn-check")) {
        e.target.classList.toggle("checked");
        e.target.parentElement.classList.toggle('marked');
        
        let name = e.target.parentElement.innerText;
        let updateState = e.target.parentElement.classList.item(1);
        let idUpdate = e.target.parentElement.id;

        if(e.target.parentElement.classList.item(1) != null){
            updateItem(name, updateState, idUpdate);
        }else{
            updateItem(name, "unmarked", idUpdate);
        }

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
        const delItem = e.target.parentElement.parentElement.innerText;
        const delId = e.target.parentElement.parentElement.id;
        e.target.parentElement.parentElement.remove();
        deleteItem(delItem, delId);
        filters();
        
    }
    filters();

});


async function deleteItem(item, id){
   const docId = await todoRef
    .where('task', '==', item)
    .where('uid', '==', getCookie("uuidv4"))
    .where('id', '==', id)
    .get();
    docId.forEach(element => {
        element.ref.delete();
    });

}

async function updateItem(item, nState, id){
    const docId = await todoRef
     .where('task', '==', item)
     .where('uid', '==', getCookie("uuidv4"))
     .where('id', '==', id)
     .get();
     docId.forEach(element => {
         element.ref.update({state: nState});
     });
 
 }


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
            deleteItem(e.innerText, e.id);
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

const todoCont = document.querySelector("ul");
let li = null;


todoCont.addEventListener("dragstart", (e) => {
    li = e.target;
});

todoCont.addEventListener("dragend", (e) => {
    li = null;
});

todoCont.addEventListener("dragover", (e) => {

    const afterElement = getDragAfterElement(todoCont, e.clientY);
    if (afterElement == null) {
        todoCont.appendChild(
            li
        );
    }
    else {
        todoCont.insertBefore(
            li,
            afterElement
        );
    }
});
const getDragAfterElement = (container, y) => {
    const draggableElements = [...container.querySelectorAll("li:not(.dragging)"),];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return {
                offset: offset,
                element: child,
            };
        }
        else {
            return closest;
        }
    },
        {
            offset: Number.NEGATIVE_INFINITY,
        }
    ).element;
};
