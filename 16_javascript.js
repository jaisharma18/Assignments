var todoinput = document.getElementById("to-do");
var todolist = document.getElementById("to-do list");
var todobutton = document.getElementById("logo");

todobutton.onclick = create;
todolist.onclick = buttons;

function create(a) {
    
    if(todoinput.value.length > 0)
    {
        a.preventDefault();
        var newdiv = document.createElement("div");
        newdiv.classList.add("todo");

        var newlist = document.createElement("li");
        newlist.classList.add("todo-items");
        newlist.innerHTML = todoinput.value;
        newdiv.appendChild(newlist);

        var rightitem = document.createElement("button");
        rightitem.classList.add("check");
        rightitem.innerHTML = '<i class="fa fa-check"></i>'
        newdiv.appendChild(rightitem);

        var deleteitem = document.createElement("button");
        deleteitem.classList.add("delete");
        deleteitem.innerHTML = '<i class="fa fa-trash"></i>'
        newdiv.appendChild(deleteitem);

        todolist.appendChild(newdiv);
        todoinput.value = '';
    }

    else {   
        a.preventDefault();
        alert("Input Field Can't Be Blanck");
    }
}

function buttons(b) {
    var item = b.target;
    if(item.classList[0]=="delete")
    {
        var par = item.parentNode;
        par.remove();
    }
    if(item.classList[0]=="check")
    {
        var par = item.parentNode;
        par.classList.toggle("completed");
    }
}