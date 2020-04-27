/*
 <span class="tooltipText">Text tooltipa</span>
 */

let tooltip = document.querySelectorAll('.tooltip');
console.log(tooltip);

tooltip.forEach(function (element) {
    element.addEventListener("mouseover",function (event) {


      let span = document.createElement("span");
        span.className = 'tooltipText';
        span.innerText = element.dataset.text;
        element.appendChild(span);

    })
});
tooltip.forEach(function (element) {
    element.addEventListener("mouseout",function (event) {

        element.removeChild(element.firstElementChild)


    })
});

