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


});



const btnBox = document.querySelectorAll('.btn-box');
console.log(btnBox);

btnBox.forEach(item => {
  console.log(item); 
    item.closest('.col-md-6').classList.add('button-group');
})

document.getElementById('fileInput').onchange = function () {
  document.getElementById('file-name').innerHTML = this.files[0].name;
};