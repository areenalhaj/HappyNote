document.getElementById("new-task").value = "";
var notes = [];
var counter = 0;
var c = 0;
var tracker = document.getElementsByClassName("add-btn")[0].addEventListener('click', function () {
    var taskData = document.getElementById("new-task").value;
    if (taskData !== "" && taskData !== undefined) {
        notes.push(`<li class="note${counter}"><button class="btns texts delete-btn">delete</button>${taskData}</li>`);
        // inserting the note
        document.getElementsByClassName("tasks-list")[0].insertAdjacentHTML('afterbegin', notes[counter]);
        document.getElementById("new-task").value = "";
        // delete button function:
        document.querySelector(`.note${counter}>button`).addEventListener('click', function () {
            this.parentElement.remove();
        })
        counter++;
    }
});