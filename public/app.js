var list = document.getElementById("list");

function addTodo(){
    var input = document.getElementById("input");

    //create li tag
    var li = document.createElement('li');
    var liText = document.createTextNode(input.value);
    li.appendChild(liText)

    //create delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("delete")
    delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)

    //create edit button
    var editBtn = document.createElement("button");
    var editText =document.createTextNode("Edit")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick", "editItem(this)")

    li.appendChild(editBtn)

    li.appendChild(delBtn)

    list.appendChild(li)
    input.value = ""

    console.log(li)
    
}

//create function for delete button
function deleteItem(e){
    e.parentNode.remove()
}

//create function for delete all
function deleteAll(){
    list.innerHTML = ""
}

//function for edit button

function editItem(e){
    var val =e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value", val)

    e.parentNode.firstChild.nodeValue = editValue
}
