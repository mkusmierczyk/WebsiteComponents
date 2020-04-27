document.addEventListener('DOMContentLoaded', function () {

    const menuVisible = document.querySelectorAll(".nav > ul > li");
    console.log(menuVisible);

    menuVisible.forEach(function (element) {
        element.addEventListener('mouseover', function (event) {
            if (element.firstElementChild !== null) {
                element.firstElementChild.style.display = "block"
            } else {
            }
        })
    });
    menuVisible.forEach(function (element) {
        element.addEventListener('mouseout', function (event) {

            if (element.firstElementChild !== null) {
                element.firstElementChild.style.display = "none"
            } else {
            }

        })
    })


});

