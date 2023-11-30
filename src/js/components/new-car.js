// market new cars
let setPothitionAddSlide = 0,
	setPothitionVideoAddSlide = 0,
	slickVideoInit = false,
	slickInit = false;

$(window).on('load resize orientationchange', function() {
	if ( $('.media__top').length > 0 ) {
		if ( window.matchMedia("(max-width: 767.98px)").matches ) {
			if ( $('.media__top').hasClass('slick-initialized') ) {
				$('.media__top').slick('unslick')
			}
			if ( $('.media__down').hasClass('slick-initialized') ) {
				$('.media__down').slick('unslick')
			}
			slickInit = false;
		} else {
			if ( !$('.media__top').hasClass('slick-initialized') ) {
				$('.media__top').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					mobileFirst: true,
					infinite: true,
					draggable: true,
					swipeToSlide: true,
					fade: true,
					dots: false,
					arrows: true,
					prevArrow: '.js-media--prev',
					nextArrow: '.js-media--next',
					asNavFor: '.media__down',
				})
			}
			if ( !$('.media__down').hasClass('slick-initialized') ) {
				$('.media__down').on('init', function(event, slick) {
					setPothitionAddSlide = slick.slideCount - 2
				})
				$('.media__down').slick({
					dots: false,
					infinite: true,
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					mobileFirst: true,
					asNavFor: '.media__top',
					responsive: [
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1
							}
						}
					]
				})
				$('.media__down').on('afterChange', function(event, slick) {
					setPothitionAddSlide = slick.slideCount - 2
				})
			}
			slickInit = true;
		}
	}
	if ( $('.media-video__top').length > 0 ) {
		if ( window.matchMedia("(max-width: 767.98px)").matches ) {
			if ( $('.media-video__top').hasClass('slick-initialized') ) {
				$('.media-video__top').slick('unslick')
			}
			if ( $('.media-video__down').hasClass('slick-initialized') ) {
				$('.media-video__down').slick('unslick')
			}
			slickVideoInit = false;
		} else {
			if ( !$('.media-video__top').hasClass('slick-initialized') ) {
				$('.media-video__top').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					mobileFirst: true,
					infinite: true,
					draggable: true,
					swipeToSlide: true,
					fade: true,
					dots: false,
					arrows: true,
					prevArrow: '.js-media-video--prev',
					nextArrow: '.js-media-video--next',
					asNavFor: '.media-video__down',
				})
			}
			if ( !$('.media-video__down').hasClass('slick-initialized') ) {
				$('.media-video__down').on('init', function(event, slick) {
					setPothitionVideoAddSlide = slick.slideCount - 2
				})
				$('.media-video__down').slick({
					dots: false,
					infinite: true,
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					mobileFirst: true,
					asNavFor: '.media-video__top',
					responsive: [
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1
							}
						}
					]
				})
				$('.media-video__down').on('afterChange', function(event, slick) {
					setPothitionVideoAddSlide = slick.slideCount - 2
				})
			}
			slickVideoInit = true;
		}
	}
})

$('.js-media-add').on('click', function() {
	let newCar = makeNewCar();
	let newBigCar = makeNewBigCar();

	if (slickInit) {
		$('.media__down').slick('slickAdd', newCar, setPothitionAddSlide);
		$('.media__top').slick('slickAdd', newBigCar);
	} else {
		$(".media__top").append( newBigCar )
		$(".media__down__item.--start-item").before( newCar )
	}
});

function makeNewCar() {
	let itemBox = `<div class="media__down__item media-car">
				<h3 class="media-car__title">Lincoln Aviator Cloned</h3>
				<div class="media-car__picture" style="background-image: url('assets/img/media/slide-1.jpg')"></div>
				<a href="#" class="link-more">
					Подробнее
					<i class="demo-icon icon-arrow-more"></i>
				</a>
			</div>`

	return slickInit
		? "<div class=\"slick-slide\"><div>" + itemBox + "</div></div>"
		: itemBox;
}
function makeNewBigCar() {
	let itemBox = `<div class="media__top__item media-car media-car--big">
					<h3 class="media-car__title">Lincoln navigator Cloned</h3>
					<div class="media-car__picture" style="background-image: url('assets/img/media/slide-1.jpg')"></div>
					<p class="media-car__text">Полёт в будущее</p>
					<a href="#" class="link-more">
						Подробнее
						<i class="demo-icon icon-arrow-more"></i>
					</a>
				</div>`

	return slickInit
		? "<div class=\"slick-slide\"><div>" + itemBox + "</div></div>"
		: itemBox;
}

$('.js-media-video-add').on('click', function() {
	let newCar = makeNewVideoCar();
	let newBigCar = makeNewBigVideoCar();

	if (slickVideoInit) {
		$('.media-video__down').slick('slickAdd', newCar, setPothitionVideoAddSlide);
		$('.media-video__top').slick('slickAdd', newBigCar);
	} else {
		$(".media-video__top").append( newBigCar )
		$(".media-video__down__item.--start-item").before( newCar )
	}
});

function makeNewVideoCar() {
	let itemBox = `<div class="media-video__down__item media-car-video">
				<a href="#" class="btn-play-video">
					<span>
						<i class="demo-icon icon-play"></i>
						<svg class="svg-icon svg-square-bg" viewBox="0 0 42 30" preserveAspectRatio="none">
							<polygon points="10,0 41,0 31,30 0,30" />
						</svg>
					</span>
				</a>
				<h3 class="media-car-video__title">Lincoln navigator</h3>
				<div class="media-car-video__picture" style="background-image: url('assets/img/media/slide-5.jpg')"></div>
			</div>`

	return slickVideoInit
		? "<div class=\"slick-slide\"><div>" + itemBox + "</div></div>"
		: itemBox;
}
function makeNewBigVideoCar() {
	let itemBox = `<div class="media-video__top__item media-car-video media-car-video--big">
					<h3 class="media-car-video__title">Lincoln navigator</h3>
					<div class="media-car-video__picture" style="background-image: url('assets/img/media/slide-5.jpg')"></div>
					<p class="media-car-video__text">Полёт в будущее</p>
					<a href="#" class="btn-play-video btn-play-video--big">
						<span>
							<i class="demo-icon icon-play"></i>
							<svg class="svg-icon svg-square-bg" viewBox="0 0 42 30" preserveAspectRatio="none">
								<polygon points="10,0 41,0 31,30 0,30" />
							</svg>
						</span>
						<span class="btn-play-video__text">Смотреть обзор</span>
					</a>
				</div>`

	return slickVideoInit
		? "<div class=\"slick-slide\"><div>" + itemBox + "</div></div>"
		: itemBox;
}