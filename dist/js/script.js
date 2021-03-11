$(document).ready(function(){
    $('.review__wrapper').slick({
        speed: 1200,
        slidesToShow: 1,
	    adaptiveHeight: true,
	    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
	    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
	    responsive: [
		    {
			    breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
		    },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
	    ]
    });

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.promo-header__menu'),
        menuItem = document.querySelectorAll('.promo-header__item'),
        hamburger = document.querySelector('.promo-header__menu_hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('promo-header__menu_hamburger_active');
            menu.classList.toggle('promo-header__menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('promo-header__menu_hamburger_active');
                menu.classList.toggle('promo-header__menu_active');
            });
        });
    });
    
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const blockID = anchor.getAttribute('href').substr(1);
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
});