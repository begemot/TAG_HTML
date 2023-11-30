$(document).ready( () => {
	// select
	$('.select').selectric({
		disableOnMobile: false,
		nativeOnMobile: false,
	});

	// select
	if ( $('.select-auto').length > 0 ) {
		$('.select-auto').selectric({
			disableOnMobile: false,
			nativeOnMobile: false,
			onChange: function(itemData, element) {
				let index = element.state.selectedIdx
				setCurrentAutoType(index)
			}
		})
		loadCurrentAutoType();

		$('.select-auto-tab__link').on('click', function(e) {
			e.preventDefault()

			let index = $(this).data("index")
			setCurrentAutoType(index)
		})

		function loadCurrentAutoType() {
			let index = $('.select-auto-tab__link.active').data("index")
			$('.select-auto').prop('selectedIndex', index).selectric('refresh')
		}

		function setCurrentAutoType(index) {
			$('.select-auto').prop('selectedIndex', index).selectric('refresh')
			$('.select-auto-tab__link.active').removeClass('active')
			$('.select-auto-tab__link[data-index="' + index +'"]').addClass('active')
		}
	}

	$('.js-btn-reset-catalog').on('click', function(e) {
		e.preventDefault()

		$('.select').each(function() {
			$(this).prop('selectedIndex', 0).selectric('refresh')
		})
	})

	// filters open/close
	if ( !$('.catalog__sidebar__filters').hasClass('active')) {
		$('.catalog__sidebar__form').slideToggle('fast');
	}
	$('.catalog__sidebar__filters').click(function(e) {
		$(this).toggleClass('active');
		$('.catalog__sidebar__form').slideToggle('fast');
	});
});