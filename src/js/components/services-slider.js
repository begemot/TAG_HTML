$(document).ready( () => {

	// services slider slick
	if ( $('.services-slider').length > 0 ) {
		$('.services-slider').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			prevArrow: '.js-services-slider--prev',
			nextArrow: '.js-services-slider--next',
			appendDots: '.services-slider__dots',
		})
	}
})