$(document).ready(function(){

    let mobile_size = 1024 //모바일 메뉴 시작 사이즈
    let window_w //브라우저 넓이
    let device_status //현재 pc인지 mobile인지 구분하는 값

    function device_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        //console.log(device_status)
    }

    device_chk() //문서가 로딩되었을때 1번실행
    $(window).resize(function(){
        device_chk() //브라우저가 리사이즈 할때마다 1번씩 실행
    })

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header').addClass('menu_pc')
        }
    })
    $('header .gnb .gnb_bg').on('mouseenter', function(){
        $('header').removeClass('menu_pc')
    })
    $('header .util .lang').on('focusin', function(){
        $('header').removeClass('menu_pc')
    })

    let gnb_open
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
		    e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            gnb_open = $(this).parent().hasClass('open')
            //console.log(gnb_open)
            if(gnb_open == true){ //열려있다면
                $(this).parent().removeClass('open')
                $(this).next().slideUp()
            }else{
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                $(this).parent().addClass('open')
                $(this).next().slideDown()
            }
        }
	});

    //header .gnb .gnb_wrap .gnb_close
    //header .gnb .gnb_open
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_mo')
    })
    $('header .gnb .gnb_wrap .gnb_close, header .gnb .gnb_bg').on('click', function(){
        $('header').removeClass('menu_mo')
    })


    //스크롤을 내리면 header fixed 
    let scrolling = $(window).scrollTop() //현재 스크롤 된값
    let prev_scroll //이전에 스크롤된값
    let diff_scroll //차이값
    function scroll_chk(){
        prev_scroll = scrolling
        scrolling = $(window).scrollTop()
        diff_scroll = prev_scroll - scrolling
        //console.log(diff_scroll)
        if(diff_scroll < 0){ //위로 스크롤 
            $('header').addClass('up')
            //console.log('if냐?')
        }else{ //아래로 스크롤
            $('header').removeClass('up')
            //console.log('else니?')
        }
        if(scrolling > 0){ //스크롤 내림
            $('header').addClass('fixed')
        }else{ //0이거나 0보다 작은경우 (fixed제거)
            $('header').removeClass('fixed')
        }
    }
    scroll_chk() //문서가 로딩되고 1번 실행
    $(window).scroll(function(){
        scroll_chk() //스크롤 할때마다 실행
    })


    /* family_site 열고 닫기
        footer .f_util .family_site .family_open 열기을 클릭하면
        footer .f_util .family_site 에 open 클래스 추가
        footer .f_util .family_site .family_close 닫기를 클릭하면
    */
    $('footer .f_util .family_site .family_open').on('click', function(){
        $('footer .f_util .family_site').addClass('open')
        $('footer .f_util .family_site .family_wrap').slideDown()
    })
    $('footer .f_util .family_site .family_close').on('click', function(){
        $('footer .f_util .family_site').removeClass('open')
        $('footer .f_util .family_site .family_wrap').slideUp()
    })

    /* top버튼을 클릭하면 상단으로 이동 */
    $('footer .f_util .top').on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })
})//맨끝