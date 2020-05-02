//  <div class="fullScreen">
//    <img src="./images/wrong.png">
//    <button class="close">Close</button>
//  </div>
document.addEventListener('DOMContentLoaded', function () {


    const bodyEl = document.querySelector("body");
    console.log(bodyEl);
    const images = document.querySelectorAll('li');
    console.log(images);

    images.forEach(function (element) {
        element.addEventListener("click", function (event) {
            console.log("działa");
            console.log(this.firstElementChild.getAttribute('src'));
            const currentSrc = this.firstElementChild.getAttribute('src');
            const newDiv = document.createElement("div");
            const newImg = document.createElement("img");
            const btn = document.createElement("button");

            newDiv.classList.add("fullScreen");
            newImg.setAttribute("src", currentSrc);
            btn.classList.add("close");
            btn.innerText = "Close";

            newDiv.appendChild(btn);
            newDiv.appendChild(newImg);
            bodyEl.appendChild(newDiv);

            btn.addEventListener("click", function (event) {
                bodyEl.removeChild(newDiv);

            })
        })
    });
});