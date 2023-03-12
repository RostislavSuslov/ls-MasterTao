const SECTION = document.querySelectorAll('section');
const CONTAINER_FLUID =  document.querySelectorAll('.container-fluid');
console.log(CONTAINER_FLUID);


const containerMobile =()=> CONTAINER_FLUID.forEach(element => {
    const sectionHasFluid = element.closest('section');

    if (sectionHasFluid.classList.contains('first-screen')){
        null
    }
    else {
        sectionHasFluid.closest('section').style.padding = '0 50px';
    }
})


function adopContainer(x) {
    if (x.matches) { // If media query matches
        null
    } else {
        containerMobile();
    }
}
  
var x = window.matchMedia("(max-width: 991px)")
adopContainer(x) // Call listener function at run time
x.addListener(adopContainer) // Attach listener function on state changes




















$(document).ready(function() {
    $('.banner').slick({
        // dots: true,
        arrows: true,
        appendArrows: ".banner-nav",
        responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },

        ]
    });


    mobileOnlySlider("#slider-advantages", true, false,  991);

    function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
      var slider = $($slidername);
      var settings = {
        mobileFirst: true,
        dots: $dots,
        arrows: $arrows,
        responsive: [
          {
            breakpoint: $breakpoint,
            settings: "unslick"
          }
        ]
      };
    
      slider.slick(settings);
    
      $(window).on("resize", function () {
        if ($(window).width() > $breakpoint) {
          return;
        }
        if (!slider.hasClass("slick-initialized")) {
          return slider.slick(settings);
        }
      });
    } // Mobile Only Slider
    
    
});





const btnBox = document.querySelectorAll('.btn-box');
 

btnBox.forEach(item => {
 
    item.closest('.col-md-6').classList.add('button-group');
})

document.getElementById('fileInput').onchange = function () {
  document.getElementById('file-name').innerHTML = this.files[0].name;
};



