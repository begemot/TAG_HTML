$(document).ready(() => {

    // models slider
    if ($('.models_slider').length > 0) {


        $('.models_slider').slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            prevArrow: '.js-models_slider--prev',
            nextArrow: '.js-models_slider--next',
            adaptiveHeight: true
        })


        showGallery(0)

        function showGallery(showIndex) {

            console.log(showIndex);
            $('.models_slider').slick('slickUnfilter')
            $('.models_slider').slick('slickFilter', function (index) {
                colorId = $(this).find('.models_slider__item').attr('color-id')
                return colorId == showIndex

            })


        }

        $('.model-color').click(function () {
            $('.model-color.current').removeClass('current')
            $(this).addClass('current')
            showGallery($(this).index())
        });


    }
})