$(document).ready( () => {
	if ( $('.js-auto-add').length > 0 ) {

		let auto = $('.auto')
		if (auto.length > 4) {
			for (let i = 4; i < auto.length; i++ ) {
				auto.eq(i).addClass("--no-show")
			}
			$('.js-auto-add').addClass("--show")
		}

		function showAuto() {
			let autoHidden = $('.auto.--no-show'),
				count = 4,
				scrollPosition = $(document).scrollTop()

			if (autoHidden.length < 5) {
				count = autoHidden.length
				$('.js-auto-add').removeClass("--show")
			}

			for (let i = 0; i < count; i++ ) {
				autoHidden.eq(i).removeClass("--no-show")
			}
			$(document).scrollTop(scrollPosition)
		}

		$('.js-auto-add').click(function(e) {
			showAuto();
		});
	}


	if ( $('.js-auto-product-add').length > 0 ) {
		let auto = $('.auto')
		if (auto.length > 5) {
			for (let i = 5; i < auto.length; i++ ) {
				auto.eq(i).addClass("--no-show")
			}
			$('.js-auto-product-add').addClass("--show")
		}

		function showProductAuto() {
			let autoHidden = $('.auto.--no-show'),
				count = 5,
				scrollPosition = $(document).scrollTop()

			if (autoHidden.length < 6) {
				count = autoHidden.length
				$('.js-auto-product-add').removeClass("--show")
			}

			for (let i = 0; i < count; i++ ) {
				autoHidden.eq(i).removeClass("--no-show")
			}
			$(document).scrollTop(scrollPosition)
		}

		$('.js-auto-product-add').click(function(e) {
			showProductAuto();
		});
	}
})