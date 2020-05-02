document.addEventListener('DOMContentLoaded', function () {
    const buttonNext = document.querySelector('#nextPicture');
    const buttonPrev = document.querySelector('#prevPicture');
    const listElements = document.querySelectorAll('li');
    let photoCounter = 0;
    listElements[photoCounter].classList.add('visible');

    buttonNext.addEventListener('click', function (event) {
        listElements[photoCounter].classList.remove('visible');
        photoCounter += 1;
        if (photoCounter > listElements.length - 1) {
            photoCounter = 0;
        }
        listElements[photoCounter].classList.add('visible');
    });
    buttonPrev.addEventListener('click', function (event) {
        listElements[photoCounter].classList.remove('visible');
        photoCounter -= 1;
        if (photoCounter < 0) {
            photoCounter = listElements.length - 1;
        }
        listElements[photoCounter].classList.add('visible');
    })

});