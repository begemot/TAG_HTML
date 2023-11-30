$(document).ready( () => {

	// features__info accordion
	$('.features__info').each(function() {
		if ( !$(this).hasClass('active')) {
			$(this).find('.features__info__answer').slideToggle('fast');
		}
	});
	$('.features__info__question').click(function(e) {
		let _this = $(e.target),
			wrap = _this.closest('.features__info')
			content = wrap.find('.features__info__answer');

		wrap.toggleClass('active');
		content.slideToggle('fast');
	});
	
})