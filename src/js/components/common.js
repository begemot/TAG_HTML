$(document).ready( () => {

	// close mobile menu
	$('.modal-nav__btn-close').click(function(e){
		console.log("111");
		$('.modal').modal('hide');
	})

	// submenu
	$('.btn-submenu-open').click(function(e) {
		$(this).toggleClass('active')
		$(this).next('.submenu').slideToggle('fast')
	});

	// Btn Play Video
	$('.js-play-video').click(function(e){
		e.preventDefault();

		let url = $(this).data("url"),
			iframe = '<iframe frameborder="0" src="' + url + '" allowfullscreen></iframe>',
			wrap = $(this).closest(".video");

		wrap.append(iframe);
		let video = wrap.children("iframe");
		setTimeout(function(){
			$(video)[0].src += "&autoplay=1";
		}, 300)
	});

	// Input Mask
	if ( $('input[data-type=phone]').length > 0 ) {
		function initTelephoneMask() {
			// Переменные
			let selector = $('input[data-type=phone]'); // Объект с которым работаем
			//var focusMask = true; // Посещение селектора

			// Инициализация плагина
			function initMask(selector) {
			    Inputmask({ placeholder: "x" }).mask(selector);

			    return false;
			};
			initMask(selector[0]);

			// Перебираем
			selector.each(function() {

			    // При нажатии
			    $(this).focus(function() {

			        let $input = $(this);
			        let dataVisit = $input.attr( "data-visit" );
			        //console.log(dataVisit);

			        // Нажимаем ли мы впервые
			        if ( dataVisit == "false" ) {
			            //console.log("1");
			            // Меняем маску и посещение
			            $input.attr({
			              "data-inputmask" : "'mask':'+9 (999) 999 - 99 - 99'",
			              "data-visit" : "true"
			            });
			            initMask($input[0]);

			            // Устанавливаем дефолтное значение +7
			            $input.val("+7");
			        };
			    });
			});
		};
		initTelephoneMask();
	}
});