document.addEventListener("DOMContentLoaded", function () {
    const allImg = document.querySelectorAll("img");
    console.log(allImg);
    const showBtn = document.querySelector("#showButton");
    console.log(showBtn);
    const hideBtn = document.querySelector("#hideButton");
    console.log(hideBtn);
    const tagInput = document.querySelector("#tagInput");
    console.log(tagInput);

    showBtn.addEventListener("click",function (event) {
        console.log("event");

        allImg.forEach(function (element) {
            if (element.dataset.tag.indexOf(tagInput.value) !== -1) {
                element.classList.remove('invisible');
            }else{
                element.classList.add('invisible');
            }

        });
        tagInput.value = "";
    });
    hideBtn.addEventListener("click", function (event) {
        console.log("event");

        allImg.forEach(function (element) {
            if (element.dataset.tag.indexOf(tagInput.value) !== -1) {
                element.classList.add('invisible');
            }

        });
        tagInput.value = "";
    });

});