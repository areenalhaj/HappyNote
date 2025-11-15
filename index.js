document.getElementById("new-task").value = "";
var notes = [];
var counter = 0;
var c = 0;
var tracker = document.getElementsByClassName("add-btn")[0].addEventListener('click', function () {
    var taskData = document.getElementById("new-task").value;
    if (taskData !== "") {
        notes.push(`<li class="note${(counter + 1)}">${taskData} <button id="delete-btn">Delete</button></li>`);
        document.getElementsByClassName("tasks-list")[0].insertAdjacentHTML('afterbegin', notes[counter]);
        document.getElementById("new-task").value = "";
    }
    counter++;
});

document.getElementById("delete-btn").addEventListener('click', function () {
    document.getElementsByClassName("tasks-list")[0].getElementsByTagName("li")[counter - 1].remove();
    counter--;
}
)

