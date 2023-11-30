$(document).ready( () => {

	// product slider slick
	if ( $('.product-slider__top').length > 0 ) {
		$('.product-slider__top').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: true,
			swipeToSlide: true,
			arrows: true,
			fade: true,
			//adaptiveHeight: true,
			prevArrow: '.js-product-slider--prev',
			nextArrow: '.js-product-slider--next',
			appendDots: '.product-slider__dots',
			asNavFor: '.product-slider__down',
		})

		$('.product-slider__down').slick({
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			mobileFirst: true,
			asNavFor: '.product-slider__top',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1
					}
				}
			]
		})
	}
})