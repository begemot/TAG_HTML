$(document).ready( () => {
	// search
	$('.js-open-search').click(function(e) {
		e.preventDefault()
		$('.header').addClass('--show-search')
	});
	$('.js-close-search').click(function(e) {
		e.preventDefault()
		$('.header').removeClass('--show-search')
	});
})