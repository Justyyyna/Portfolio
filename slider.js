//------------------- SLIDER ---------------------//

window.addEventListener('load', function () {
    var n = document.querySelectorAll('.j-slide_list > li').length;
    var slide_list = document.querySelector('.j-slide_list');
    var slide_box = document.querySelector('.slide_box');
    slide_list.style.width = n * 100 + '%';

    function nextImg() {
        var offset = parseInt(slide_list.style.left);

        if (isNaN(offset)) {
            offset = 0;
        }

        offset = offset - 100;
        if (offset === -100 * n) {
            offset = 0;
        }
        slide_list.style.left = offset + '%';
    }

    function prevImg() {
        var offset = parseInt(slide_list.style.left);

        if (isNaN(offset)) {
            offset = 0;
        }
        offset = offset + 100;
        if (offset > 99) {
            offset = (n - 1) * -100;
        }
        slide_list.style.left = offset + '%';
    }

    document.querySelector('.j-next').addEventListener('click', nextImg);
    document.querySelector('.j-prev').addEventListener('click', prevImg)

    let autoSlide = setInterval(nextImg, 2000);

    slide_box.addEventListener('click', function () {
        clearInterval(autoSlide);
    });
});