
$(document).ready(function(){
    //console.log('연결')
    /* 
        .tour .list ul li에 
        마우스를 마우스를 올린 li에만
        on클래스를 추가해야됨
        --> 마우스를 오버하면 모든 li에 있는 on 클래스를 지움 
            (없는애는 가만히 있고 있는애만 지움)
            누가 on클래스를 가지고있는지 모르니까 
    */
    $('.tour .list ul li').on('mouseenter', function(){
        //console.log('오버했다')
        $('.tour .list ul li').removeClass('on')
        $(this).addClass('on')
    })

    $('footer .right_area .family_site button.family_open').on('click', function(){
        // console.log('여는 버튼 클릭 ')
        $('footer .right_area .family_site').addClass('open')
    })
    $('footer .right_area .family_site button.family_close').on('click', function(){
        // console.log('닫는 버튼 클릭 ')
        $('footer .right_area .family_site').removeClass('open')
    })

    /*
        footer .right_area .top를 클릭하면 
        브라우저가 상단으로 스크롤이 됨 ....
    */
    $('footer .right_area .top').on('click', function(){
        console.log('누름')
        let scrolling = $(window).scrollTop()
        console.log(scrolling)
        //$(window).scrollTop(100)
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })

    AOS.init({
        offset: 150, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });

})//$(document).ready 무조건 맨 아래