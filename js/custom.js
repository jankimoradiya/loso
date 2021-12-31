$(document).ready(function(){
  /*$('.bxslider').bxSlider({
  	slideWidth: 280,
  	minSlides:1,
  	maxSlides:3,
  	auto: true,
  	slideMargin:50,
  	responsive: true
  });*/


  /*$('.bxslider').slick({
	 dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});*/
		
});
// Use the conventional $ prefix for variables that hold jQuery objects.
var $slider;

// If the only purpose of the windowWidth() function is to set the slide variables,
// it can be renamed and rewritten to supply the full configuration object instead.
function buildSliderConfiguration() {

    // When possible, you should cache calls to jQuery functions to improve performance.
    var windowWidth = $(window).width();
    var numberOfVisibleSlides;

    if (windowWidth < 420) {
        numberOfVisibleSlides = 1;
    } else if (windowWidth < 768) {
        numberOfVisibleSlides = 2;
    } else if (windowWidth < 1200) {
        numberOfVisibleSlides = 3;
    } else {
        numberOfVisibleSlides = 3;
    }

    return {
        pager: true,
        controls: false,
        auto: true,
        slideWidth: 280,
        startSlide: 0,
        nextText: ' ',
        prevText: ' ',
        adaptiveHeight: true,
        moveSlides: 2,
        slideMargin: 20,
        minSlides: numberOfVisibleSlides,
        maxSlides: numberOfVisibleSlides,
        responsive:true
    };
}

// This function can be called either to initialize the slider for the first time
// or to reload the slider when its size changes.
function configureSlider() {
    var config = buildSliderConfiguration();

    if ($slider && $slider.reloadSlider) {
        // If the slider has already been initialized, reload it.
        $slider.reloadSlider(config);
    } else {
        // Otherwise, initialize the slider.
        $slider = $('.bxslider').bxSlider(config);
    }
}

/*$('.slider-prev').click(function () {
    var current = $slider.getCurrentSlide();
    $slider.goToPrevSlide(current) - 1;
});

$('.slider-next').click(function () {
    var current = $slider.getCurrentSlide();
    $slider.goToNextSlide(current) + 1;
});*/

// Configure the slider every time its size changes.
$(window).on("orientationchange resize", configureSlider);
// Configure the slider once on page load.
configureSlider();