$(document).ready(()=>{

    function showWindow() {
        $('#form__myModal').css('display','block');
        $('.modalBg').css('display','block')
    }

    function hideWindow(){
        $('.modalBg').css('display','none')
        $('#form__myModal').css('display','none');
    }

    $('.cpToggle').click((e)=>{
        showWindow()
    })

    $('.modalBg').click(()=>{
        hideWindow()
    })
    $('.closeBtn').click(()=>{
        hideWindow()
    })
    $('.close-x__form').click(()=>{
        hideWindow()
    })

    appElement = $('#form__myModal').get(0)
    angular.bootstrap(appElement,['siteForms'])
    console.log();
});
