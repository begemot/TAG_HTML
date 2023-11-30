$(document).ready( () => {
	if ( $('.blog-list__slider').length > 0 ) {
		$('.blog-list__slider').slick({
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			//variableWidth: true,
			centerMode: true,
			centerPadding: '73px',
			mobileFirst: true,
			responsive: [
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						centerPadding: 'calc(50vw - 265px)',
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						centerPadding: 'calc(50vw - 355px)',
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
						centerPadding: 'calc(50vw - 475px)',
					}
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
						centerPadding: '0',
					}
				},
			]
		})
	}
})