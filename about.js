document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector("#carouselExampleAutoplaying");
    var carouselInstance = new bootstrap.Carousel(carousel, {
        interval:4000, // Set autoplay interval
        pause:true// Prevent pausing on hover
    
    });

    // Restart autoplay when clicking any button inside the carousel
    carousel.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            carouselInstance.cycle(); // Restart autoplay
        });
    });

    document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(button => {
        button.addEventListener('click', function () {
            this.blur(); // Removes focus
        });
    });
});
