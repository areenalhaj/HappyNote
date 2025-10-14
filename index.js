document.getElementById("new-task").value = "";

var tracker = document.getElementsByClassName("add-btn")[0].addEventListener('click', function () {

    var taskData = document.getElementById("new-task").value;
    if (taskData !== "") {
        var list = document.getElementsByClassName("tasks-list")[0].insertAdjacentHTML('beforeend', `<li>${taskData}</li>`);
        document.getElementById("new-task").value = "";
    }
});

//   text-decoration: line-through; for done
/* scores, emojies according to scores
colors change
*/