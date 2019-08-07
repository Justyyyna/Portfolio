//------------------- GALLERY OVERLAY---------------------//
//-------------------------------------------------------//

var img = document.querySelectorAll('.portfolio-photos > li > img'); //nodelist
var imgArr = Array.from(img); //nodelist wird in ein array umgewandelt
var overlay = document.querySelector('.g-overlay'); //referenz aufs overlay
var pic = document.querySelector('.pic'); //referenz auf den container im overlay wo die fotos reinkommen
var right = document.querySelector('.arrow-right'); // rechter button
var left = document.querySelector('.arrow-left');
var closeBtn = document.querySelector('.g-close-btn'); // linker button
var index; // der angesprochene index-wert
// var img = document.createElement('img');

for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function (event) {
        var src = event.target.getAttribute('src');   // das src attribut wird herausgelesen
        overlay.classList.add('j-open');
        pic.setAttribute('src', src);   // 
        index = imgArr.indexOf(event.target);
        console.log(event.target);
    });
}

function arrowRight() {
    if (index < img.length - 1) {
        index++;
    } else {
        index = 0;
    }

    var src = imgArr[index].getAttribute('src');
    pic.setAttribute('src', src);
}

right.addEventListener('click', arrowRight);  // der rechte buttton

function arrowLeft() {
    if (index > 0) {
        index--;
    } else {
        index = img.length - 1;
    }

    var src = imgArr[index].getAttribute('src');
    pic.setAttribute('src', src);
}

left.addEventListener('click', arrowLeft); // der linke button

closeBtn.addEventListener('click', function () {  // close button 
    overlay.classList.remove('j-open');
});



