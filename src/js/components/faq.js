$(document).ready( () => {

	// faq accordion
	$('.faq').each(function() {
		if ( !$(this).hasClass('active')) {
			$(this).find('.faq__answer').slideToggle('fast');
		}
	});
	$('.faq__question').click(function(e) {
		let _this = $(e.target),
			wrap = _this.closest('.faq')
			content = wrap.find('.faq__answer');

		wrap.toggleClass('active');
		content.slideToggle('fast');
	});
	
})