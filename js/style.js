$(document).ready( function () {

    $('#profile--ripple').ripples({
        resolution : 512 ,
        dropRadius : 10 
    });


    const bars = document.querySelectorAll('.progress-bar');

    bars.forEach( function (bar) {
        let percentage = bar.dataset.percent;

        let toollip = bar.children[0];

        toollip.innerText = percentage + '%';

        bar.style.width = percentage + '%';
    });


    // counter

    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });


    // img gallery 

    var $wrapper = $('.portfolio-wrapper');


    // isotope js

    $wrapper.isotope({

        filter : '*' ,
        layoutMode : 'masonry' ,
        animationOptions : {
            duration : 750 ,
            easing : 'linear'
        }

    });

    let links = document.querySelectorAll('.tabs a');
    
    
    links.forEach(link => {

        let selector = link.dataset.filter;

        link.addEventListener('click' , function (e) {

            e.preventDefault();

            $wrapper.isotope({

                filter : selector ,
                layoutMode : 'masonry' ,
                animationOptions : {
                    duration : 750 ,
                    easing : 'linear'
                }
        
            });

            links.forEach(link => {

                link.classList.remove('active');

            });

            e.target.classList.add('active');

        });
    });

    // slider 

    $('.slider').slick({

        arrows: false ,
        autoplay: true ,

    });



});


















