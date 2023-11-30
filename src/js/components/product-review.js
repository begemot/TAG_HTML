$(document).ready( () => {

	// product review slider
	if ( $('.product-review__exterior__top').length > 0 ) {
		$('.product-review__exterior__top').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: true,
			swipeToSlide: true,
			arrows: true,
			fade: true,
			//adaptiveHeight: true,
			prevArrow: '.js-product-review__exterior--prev',
			nextArrow: '.js-product-review__exterior--next',
			appendDots: '.product-review__exterior__dots',
			asNavFor: '.product-review__exterior__down',
		})

		$('.product-review__exterior__down').slick({
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			mobileFirst: true,
			asNavFor: '.product-review__exterior__top',
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
	if ( $('.product-review__interior__top').length > 0 ) {
		$('.product-review__interior__top').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: true,
			swipeToSlide: true,
			arrows: true,
			fade: true,
			//adaptiveHeight: true,
			prevArrow: '.js-product-review__interior--prev',
			nextArrow: '.js-product-review__interior--next',
			appendDots: '.product-review__interior__dots',
			asNavFor: '.product-review__interior__down',
		})

		$('.product-review__interior__down').slick({
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			mobileFirst: true,
			asNavFor: '.product-review__interior__top',
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