document.addEventListener("DOMContentLoaded", function () {
    let btnAdd = document.querySelector("#addTaskButton");
    console.log(btnAdd);
    let btnRemove = document.getElementById("removeFinishedTasksButton");
    console.log(btnRemove);
    let taskInput = document.querySelector('#taskInput');

    let counter = 0;

    btnAdd.addEventListener("click", function (event) {
        //stworzenie zadania
        if (taskInput.value.length > 5 && taskInput.value.length < 100) {

            let li = document.createElement("li");
            li.className = "task";
            li.innerText = taskInput.value;
            li.style.fontSize = "20px";
            li.style.fontWeight = "bold";

            let div = document.createElement('div');
            div.className = "btns";

            let btnDelete = document.createElement("button");
            btnDelete.innerText = "Usuń zadanie";
            btnDelete.style.width = "120px";
            btnDelete.style.height = "20px";
            btnDelete.style.margin = "10px";

            let btnComplete = document.createElement("button");
            btnComplete.style.width = "120px";
            btnComplete.style.height = "20px";
            btnComplete.style.margin = "10px";
            btnComplete.innerText = "Zakończone";

            this.parentElement.appendChild(li);
            li.appendChild(div);
            li.appendChild(btnDelete);
            li.appendChild(btnComplete);
            counter++;
            console.log(counter);
            li.innerText = taskInput.value +" "+counter;

            // nowy event usuwanie zadań

        btnDelete.addEventListener("click", function (event) {
            this.parentElement.parentElement.removeChild(this.parentElement);
        });
        // zadnia completne
        btnComplete.addEventListener("click", function (event) {
            if (this.parentElement.style.backgroundColor === "white") {
                this.parentElement.style.backgroundColor = "green"
            } else this.parentElement.style.backgroundColor = "white"

        }) } else {
            console.log("niepoprawne dane")
        }

    });

    taskInput.innerText = "";



    btnRemove.addEventListener("click", function (event) {
        let task = document.querySelectorAll('.task');
        console.log(task);
        task.forEach(function (element) {
            if (element.style.backgroundColor === "green") {
                element.parentElement.removeChild(element)
            } else {
                console.log("brak aktywnych zadań")
            }
        })



});



});