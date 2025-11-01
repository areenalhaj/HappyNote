document.getElementById("new-task").value = "";
var notes = [];
var counter = 0;
var c = 0;
var tracker = document.getElementsByClassName("add-btn")[0].addEventListener('click', function () {
    // var taskData = document.getElementById("new-task").value;
    var taskData = document.getElementById("new-task").value;
    if (taskData !== "") {
        notes.push(`<li>${taskData}</li>`);
        // var list = document.getElementsByClassName("tasks-list")[0].insertAdjacentHTML('beforeend', `<li>${taskData}</li>`);
        document.getElementsByClassName("tasks-list")[0].insertAdjacentHTML('beforeend', notes[counter]);
        document.getElementById("new-task").value = "";
    }
    counter++;
});

document.getElementById("delete-btn").addEventListener('click', function () {
    document.getElementsByClassName("tasks-list")[0].getElementsByTagName("li")[counter - 1].remove();
    counter--;
}
)

//   text-decoration: line-through; for done
/* scores, emojies according to scores
colors change
*/