$(document).ready(function(){
    $('.review__wrapper').slick({
        speed: 1200,
        centerMode: true,
        slidesToShow: 1,
	    adaptiveHeight: true,
	    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
	    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
	    responsive: [
		    {
			    breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
		    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
	    ]
    });
});