$(document).ready( () => {

	// product about slider slick
	if ( $('.product-about__slider').length > 0 ) {
		$('.product-about__slider').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			prevArrow: '.js-product-about--prev',
			nextArrow: '.js-product-about--next',
			appendDots: '.product-about__dots',
		})
	}
})