let slideIndex = 0;
showSlides();
/* tee vaakatason kuvansiirto */
function showSlides() {
    let slides = document.getElementsByClassName("pimgs");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";


    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";

    setTimeout(showSlides, 8000); // Change image every 2 seconds
}

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("hdr").style.padding = "0px 20px";
    document.getElementById("hdr").style.fontSize = "24px"
  } else {
    document.getElementById("hdr").style.padding = "20px";
    document.getElementById("hdr").style.fontSize = "30px"

}
