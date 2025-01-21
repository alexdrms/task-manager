function createNewTask()
{
    var numChildren = document.getElementById('taskContainer').childElementCount;
    const myString = document.getElementById("taskControlText").value;
    if (myString) {
        var div = document.createElement('div');
        div.innerHTML = '<div class="col-xs-1 col-1"><input class="form-check-input check" type="checkbox" value="" id="check'+numChildren+'"></div><div class="col-8 col-sm-8 col-md-9" id="task-text"><h5>'+myString+'</h5></div><div class="col-3 col-md-2 d-flex justify-content-evenly"><button class="btn btn-task" onclick="deleteTask(this)" alt="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FEFAE0" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg></button><button class="btn btn-task" onclick="editTask(this)"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FEFAE0" class="bi bi-pencil" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/></svg></button></div>';
        div.className = 'row rounded m-2 task align-items-center';
        div.id = 'row' + numChildren;
        document.getElementById("taskContainer").appendChild(div);
    }
}
function deleteTask(button){
    button.parentNode.parentNode.remove();
}
function editTask(button)
{
    var previousText = button.parentNode.previousSibling.firstChild.textContent;
    var buttonContainer = button.parentNode;
    while (buttonContainer.firstChild)
    {
        buttonContainer.removeChild(buttonContainer.firstChild)
    }
    var newButton = document.createElement('button');
    newButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FEFAE0" class="check" viewBox="0 0 16 16"> <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg>';
    newButton.className='btn btn-task';
    newButton.addEventListener('click', function(){
        var nButtonContainer = this.parentNode;
        var inputContainer = this.parentNode.previousSibling;
        var newText = inputContainer.firstChild.value;
        inputContainer.removeChild(inputContainer.firstChild);
        var newTextDOM = document.createElement('h5');
        newTextDOM.innerHTML = newText;
        inputContainer.appendChild(newTextDOM);
        nButtonContainer.removeChild(nButtonContainer.firstChild);
        nButtonContainer.innerHTML = '<button class="btn btn-task" onclick="deleteTask(this)" alt="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FEFAE0" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg></button><button class="btn btn-task" onclick="editTask(this)"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FEFAE0" class="bi bi-pencil" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/></svg></button>'
    })
    buttonContainer.appendChild(newButton);
    buttonContainer.previousSibling.innerHTML = '<input type="text" class="form-control"id="taskControlText" value='+ previousText+' required>'
    /*button.parentNode.previousSibling.firstChild.textContent = "ola"; */
    
}
