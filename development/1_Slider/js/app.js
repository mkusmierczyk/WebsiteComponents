let prev = document.querySelector('#prevPicture');
let next = document.querySelector('#nextPicture');
let htmlElem = document.querySelectorAll('ul');


let list = document.querySelector('ul').children;
let picCounter = 0;
let htmlElem = Array.from(list);
htmlElem.forEach(function (elem) {
    if (elem.style.display === "inline-block") {
        pickCounter = elem [i];
    }

});
htmlElem[0].classList.add['visible'];

prev.addEventListener('click', function () {
    console.log('click1');
    htmlElem[pickCounter].classList.add('visible');
});
next.addEventListener('click', function () {
    console.log('click2');

    htmlElem[pickCounter].classList.remove('visible');
    pickCounter += 1;
    if (picCounter === htmlElem.length) {
        pickCounter = 0;
    }
    htmlElem[picCounter].classList
});

})








