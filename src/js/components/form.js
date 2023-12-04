let chek = false
$(document).ready(function() {

    $('.get-commerce-purpose').click(()=>{
        $('.overlay').addClass('active');
        $('.form_myModal').css({
            'display':'block'
        })
    })
    $('button.close').click(()=>{
        closeModal();
    });
    function closeModal(){
        $('.overlay').removeClass('active');
    }


    $('.modal-open').click(function() {
        $('.modal').addClass('visible');
        $('.overlay').addClass('active');
    });

    $('.card-car__modal').click(function() {
        const dataActionValue = $(this).data('action');
        console.log('Значение data-action:', dataActionValue);
        $('.modal').removeClass('visible');
        if ($(window).width() < 1000) {
            $('#myModal__page_mobile').css({
                'display': 'block',
            })
        } else {
            $('.modal__page').removeClass('novisible');
        }
        $('.comlpectation-name').text($(this).data('action'));
        if ($(this).data('action') == 'Standard'){
            $('.circle').css({
                'display':'block'
            })
            $('.circle-blue').css({
                'display':'none'
            })
            $('.chekbox').css({
                'display':'none'
            })
            $('.yellow-box-auto').css({
                'display':'block'
            })
            $('.btn__main-display').addClass('btn__main-display_enabled');
            $('.description__btn__main-display').css({'visibility':'hidden'})
        }
        else if ($(this).data('action') == 'A-Spec')
        {
            $('.circle').css({
                'display':'block'
            })
            $('.chekbox').css({
                'display':'none'
            })
            $('.yellow-box-auto').css({
                'display':'block'
            })
            $('.btn__main-display').addClass('btn__main-display_enabled');
            $('.description__btn__main-display').css({'visibility':'hidden'})
        }
        else if ($(this).data('action') == 'A-Spec Technology')
        {
            $('.circle').css({
                'display':'block'
            })
            $('.yellow-box-auto').css({
                'display':'none'
            })
            $('.chekbox').css({
                'display':'block'
            })
            $('.description__btn__main-display').css({
                'visibility':'visible'
            })
            $('.btn__main-display').removeClass('btn__main-display_enabled');
            $('.form-check').removeClass('active-radio');
            $('input[type="radio"]').prop('checked', false);
            
        }
        $('.car-color-image_max').text($(this).data('newprice'));
    });

    $('.close-x').click(function() {
        $('.modal').removeClass('visible');
        $('.overlay').removeClass('active');
    });

    $('.close-x__page').click(function() {
        $('.modal__page').addClass('novisible');
        $('.overlay').removeClass('active');
    });

    $('.close-x__page_mobile').click(function() {
        $('#myModal__page_mobile').css({
            'display': 'none',
        })
        $('.overlay').removeClass('active');
    });
    $('.close-x__form').click(function() {
        $('.form_myModal').css({
            'display':'none'
        })
        if ($(window).width() < 1000) {
            $('#myModal__page_mobile').css({
                'display': 'block',
            })
        } else {
            $('.modal__page').removeClass('novisible');
        }
    });

    $('.circle').click(function() {
        $('.circle').removeClass('circle-activ')
        $(this).addClass('circle-activ');
        if ($(this).data('color') == 'white') {
            $('.car-color-image').attr('src', 'assets/img/form/color-car/white.jpg');
            $('.color-name').text('Platinum White Pearl');
        }
        else if ($(this).data('color') == 'black') {
            $('.car-color-image').attr('src', 'assets/img/form/color-car/black.jpg');
            $('.color-name').text('Majestic Black Pearl');
        }
        else if ($(this).data('color') == 'blue') {
            $('.car-color-image').attr('src', 'assets/img/form/color-car/blue.jpg');
            $('.color-name').text('Apex Blue Pearl');
        }
        else if ($(this).data('color') == 'red') {
            $('.car-color-image').attr('src', 'assets/img/form/color-car/red.jpg');
            $('.color-name').text('Performance Red Pearl');
        }
        else if ($(this).data('color') == 'metalic') {
            $('.car-color-image').attr('src', 'assets/img/form/color-car/metalic.jpg');
            $('.color-name').text('Lunar Silver Metallic');
        }
        else if ($(this).data('color') == 'carbon-metalic') {
            $('.car-color-image').attr('src', 'assets/img/form/color-car/carbon-metalic.jpg');
            $('.color-name').text('Liquid Carbon Metallic');
        }
    });
    $('.btn__prw').click(function() {
        $('.modal__page').addClass('novisible');
        $('#myModal__page_mobile').css({
            'display': 'none',
        })
        $('.modal').addClass('visible');
    });
    $('.form-check-input').change(function() {
        var dataFormValue = $(this).data('form');

        // Убираем класс active-radio у всех .form-check
        $('.form-check').removeClass('active-radio');

        // Добавляем класс active-radio к нужному .form-check
        $('.form-check[data-form="' + dataFormValue + '"]').addClass('active-radio')
        $('.btn__main-display').addClass('btn__main-display_enabled');
        $('.description__btn__main-display').css({'visibility':'hidden'})
    });

    $('.btn__main-display').click(function() {
        $('#myModal__page_mobile').css({
            'display': 'none',
        })
        $('.modal__page').addClass('novisible');
        $('.modal').removeClass('visible');
        $('.form_myModal').css({
            'display':'block'
        })
    });

    $('#chekbox__form').change(function() {
        // Если чекбокс отмечен, плавно показываем блок, иначе плавно скрываем
        if ($(this).is(':checked')) {
          $('.form_group_nodisplay').slideDown();
        } else {
          $('.form_group_nodisplay').slideUp();
        }
    });

    $(".arrow-animation").click(function() {
        $(".arrow").toggleClass("up");
    });

    $(".arrow-animation").click(function() {
        if (chek == false) {
            $('.form_group_allcar').slideDown();
            chek = true
        }
        else {
            $('.form_group_allcar').slideUp();
            chek = false
        }
        $(".form_group_allcar").toggleClass("form_group_allcar_display");
    });
});