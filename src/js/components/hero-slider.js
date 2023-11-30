$(document).ready( () => {

	// hero slider slick
	if ( $('.hero-slider').length > 0 ) {
		$('.hero-slider').slick({
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: true,
			swipeToSlide: true,
			arrows: false,
			fade: true,
			asNavFor: '.hero-content__slider',
		})

		$('.hero-content__slider').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			adaptiveHeight: true,
			prevArrow: '.js-hero-slider--prev',
			nextArrow: '.js-hero-slider--next',
			appendDots: '.hero-content__dots',
			asNavFor: '.hero-slider',
		})
	}
})