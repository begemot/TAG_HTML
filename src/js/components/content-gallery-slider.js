$(document).ready( () => {
	if ( $('.gallery__slider').length > 0 ) {
		$('.gallery__slider').slick({
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			prevArrow: '.js-gallery--prev',
			nextArrow: '.js-gallery--next',
			appendDots: '.gallery__dots',
			asNavFor: '.gallery__thumbs',
		})

		$('.gallery__thumbs').slick({
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			mobileFirst: true,
			swipeToSlide: true,
			//focusOnSelect: true,
			asNavFor: '.gallery__slider',
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 3,
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
		$('.slick-slide').on('click', function(ev) {
			console.log("obj");
			$('.gallery__thumbs').slick('slickGoTo', $(ev.currentTarget).data('slick-index') + 1);
		});
	}
})