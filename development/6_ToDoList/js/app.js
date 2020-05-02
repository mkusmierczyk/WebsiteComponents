document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector('#taskInput');
    const addTaskBtn = document.querySelector('#addTaskButton');
    const removeButton = document.querySelector('#removeFinishedTasksButton');

    addTaskBtn.addEventListener('click', function (event) {
        const newLi = document.createElement('li');
        const newH1 = document.createElement('h1');
        const newDeleteBtn = document.createElement('button');
        const newCompleteBtn = document.createElement('button');
        const placeToInsert = document.querySelector('#taskList');

        if (input.value.length > 5 && input.value.length < 100) {
            newH1.innerText = input.value;
            newDeleteBtn.innerText = "Delete";
            newCompleteBtn.innerText = "Complete";
            newDeleteBtn.classList.add('delete');
            newCompleteBtn.classList.add("complete");

            newLi.appendChild(newH1);
            newLi.appendChild(newDeleteBtn);
            newLi.appendChild(newCompleteBtn);
            placeToInsert.appendChild(newLi);

        } else {
            console.log("Min 5 znaków Max 100 znaków")
        }

        input.value = "";
        newDeleteBtn.addEventListener('click', function (event) {
            const elemToRemove = this.parentElement;
            elemToRemove.parentElement.removeChild(elemToRemove);

        });
        newCompleteBtn.addEventListener('click', function (event) {
            const elemToColor = this.previousElementSibling.previousElementSibling;
            elemToColor.classList.toggle('red');

        })

    });
    removeButton.addEventListener('click', function (event) {
        const elementsToDelete = document.querySelectorAll('.red');
        elementsToDelete.forEach(function (value) {
            if (value !== null ) {
                const elementToDelete = value.parentElement;
                elementToDelete.parentElement.removeChild(elementToDelete);
            }
        })


    })

});