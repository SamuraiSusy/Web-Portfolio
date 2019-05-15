
        let slideIndex = 0;
        showSlides();
        /* tee vaakatason kuvansiirto */
        function showSlides() {
            let slides = document.getElementsByClassName("pimgs");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"; 
            }

            slideIndex++;

            if (slideIndex > slides.length) {slideIndex = 1} 

            slides[slideIndex-1].style.display = "block"; 
            
            setTimeout(showSlides, 8000); // Change image every 2 seconds
            }