$(document).ready(function(){

    /*
        인터랙티브의 시작은 영역이 브라우저 상단에 닿았을때
        영역의 상단값 보다 스크롤된값이 크면 - 인터랙티브 시작
        ceo_area_start < ceo_scroll 
        종료는 영역의 하단이 브라우저 하단 위로 올라올때
        ceo_area_end - ceo_win_h < ceo_scroll

        //영역안에 들어가기전 (시작전)
        //영역에 들어갔을때 (진행중)
        //영역에서 벗어났을때 (종료)
    */
    let ceo_length = $('.ctn_ceo').length
    function ceo_ani(){
        let ceo_win_h = $(window).height() //브라우저의 높이
        let ceo_scroll = $(window).scrollTop() //현재 스크롤 된값
        let ceo_area_name = $('.ctn_ceo .ceo_head') //선택자
        let ceo_obj_wrap = $('.ctn_ceo .ceo_head .ceo_photo') //애니메이션대상
        let ceo_obj = $('.ctn_ceo .ceo_head .ceo_photo .ceo_img') //넓이가 조정되는 요소
        let ceo_obj_start = 50
        let ceo_obj_end = 100
        let ceo_obj_count //현재 계산한 넓이값
        let ceo_obj_bg = $('.ctn_ceo .ceo_head .ceo_photo .ceo_img .bg') //배경을 어둡게
        let ceo_obj_bg_start = 0
        let ceo_obj_bg_end = 0.4
        let ceo_obj_bg_count //현재 opacity값
        let ceo_area_start = ceo_area_name.offset().top //시작위치 (맨 위에서 부터 계산한)
        let ceo_area_end = ceo_area_start + ceo_area_name.height() - ceo_win_h //끝 위치
        let ceo_total = ceo_area_end - ceo_area_start //전체 스크롤 값
        let ceo_diff //진행중이후에 스크롤 된값
        let ceo_per //스크롤된값이 몇%인지

        //console.log(ceo_total)
        /* 
            진행중일때 몇%스크롤을 했는지 계산 해야함
            (1000px 동안 인터랙티브를 할껀데 100px 스크롤 함 10%)
            현재스크롤값(ceo_diff) x 100 / 전체값(ceo_total)

            처음의 넓이값 50 - 종료 넓이값 100
            진행율이 50%    ===  75
            (종료값 - 처음값) * 진행율/100 + 처음값
            (50) * 0.5 + 50
            25 + 50 = 75
        */
        
        //console.log('시작', ceo_area_start, '종료', ceo_area_end, '스크롤', ceo_scroll)
        if(ceo_scroll > ceo_area_end){
            //console.log('종료')
            ceo_obj_wrap.attr('data-status', 'end')
            ceo_obj.width(ceo_obj_end + '%')
            ceo_obj.height(ceo_obj_end + '%')
            ceo_obj_bg.css('opacity', ceo_obj_bg_end)
        }else if(ceo_scroll < ceo_area_start){
            //console.log('시작전')
            ceo_obj_wrap.attr('data-status', 'start')
            ceo_obj.width(ceo_obj_start + '%')
            ceo_obj.height(ceo_obj_start + '%')
            ceo_obj_bg.css('opacity', ceo_obj_bg_start)
        }else{
            //console.log('진행중')
            ceo_obj_wrap.attr('data-status', 'ing')
            ceo_diff = ceo_scroll - ceo_area_start
            ceo_per = ceo_diff * 100 / ceo_total
            //console.log(ceo_diff, ceo_total, ceo_per)
            ceo_obj_count = ceo_obj_start + (ceo_obj_end - ceo_obj_start) * (ceo_per / 100)
            ceo_obj_count = ceo_obj_count * 1.2
            if(ceo_obj_count > ceo_obj_end){ //100보다 크면 다시 100으로 만듬
                ceo_obj_count = ceo_obj_end
            }
            //console.log(ceo_obj_count)
            ceo_obj.width(ceo_obj_count + '%')
            ceo_obj.height(ceo_obj_count + '%')
            ceo_obj_bg_count = ceo_obj_bg_start + (ceo_obj_bg_end - ceo_obj_bg_start) * (ceo_per / 100)
            ceo_obj_bg_count = ceo_obj_bg_count * 1.2
            if(ceo_obj_bg_count > ceo_obj_bg_end){
                ceo_obj_bg_count = ceo_obj_bg_end
            }
            ceo_obj_bg.css('opacity', ceo_obj_bg_count)
        }
    }
    if(ceo_length > 0){
        ceo_ani() //브라우저가 로딩되었을때 단 한번
    }
    $(window).scroll(function(){
        if(ceo_length > 0){
            ceo_ani() //브라우저가 스크롤 될때마다 한번씩
        }
    })


    /*******************************
     * 회사소개 > 연혁 
    **********************************/
    let history_length = $('.ctn_history').length

    const snbScroll = function() {
        const $menu_wrap = $(".ctn_history .his_bar ul");  /* 선택자를 잘 입력해야함 */
        const $menu_li = $(".ctn_history .his_bar ul li");
        function scrollToElement($element) {
            const containerWidth = $menu_wrap.width();
            const itemWidth = $element.outerWidth(true);
            const totalItemsWidth = $menu_wrap[0].scrollWidth;
            const newScrollPosition = ($element.index() === 0) ? 0 :
                ($element.index() === $menu_li.length - 1) ? totalItemsWidth - containerWidth :
                $element.position().left + $menu_wrap.scrollLeft() - (containerWidth - itemWidth) / 2;
            $menu_wrap.animate({
                scrollLeft: newScrollPosition
            }, 500);
        }
        const $activeItem = $menu_wrap.find(".active");
        if ($activeItem.length) {
            scrollToElement($activeItem);
        }
    }
    
    if(history_length > 0){
        snbScroll();   /* 함수의 실행 */
    }

    /*
        .ctn_history .his_head 가 여러개..... (4개)
        4개 각각의 애니메이션 시작 시기와 종료시기를 계산해야함

        콘텐츠가 브라우저 아래에서 위로 올라오는 위치
        스크롤값 + 브라우저의 높이 == 콘텐츠의 offset().top 값과 같음
        ++ 브라우저 높이의 몇 %를 더하면 애니메이션 시작 시기
    */
    function his_head(){
        let obj_name = $('.ctn_history .his_head') // 영역
        let obj_txt = 'h3 strong' //애니메이션 글자
        let obj_length = obj_name.length //저 선택자로 선택되는 요소의 갯수
        let obj_top //위에서 부터 해당 요소 위까지의 거리
        let obj_start //애니메이션 시작 시기
        let obj_end //애니메이션 종료 시기
        let obj_per //애니메이션 진행률
        let scrolling = $(window).scrollTop() //스크롤 값
        let win_h = $(window).height() //브라우저 높이

        for(i=0; i<obj_length; i++){
            obj_top = obj_name.eq(i).offset().top
            obj_start = obj_top - win_h + (win_h * 0.2)
            obj_end = obj_top - win_h + (win_h * 0.9)
            //console.log(i, '번째', scrolling, obj_end)
            if(scrolling > obj_end){ //애니메이션 종료
                //console.log(i, '종료')
                obj_per = 100
            }else if(scrolling < obj_start){ //애니메이션 시작전
                //console.log(i, '시작전')
                obj_per = 0
            }else{
                //console.log(i, '진행중')
                //시작부터 스크롤한값 / 스크롤 구간 전체값 * 100
                obj_per = (scrolling - obj_start) / (obj_end - obj_start) * 100
            }
            //console.log(i, '번째', obj_per)
            obj_name.eq(i).find(obj_txt).width(obj_per + '%')
        }
    }//his_head

    function his_area(){
        //함수 안에서 선언한 변수명은 지역변수라고 함 
        //(다른 함수 안에 있는 변수와 변수명이 같아도 됨- 이 함수에서만 통하는 이름)
        let obj_name = $('.ctn_history .his_wrap')
        let obj_nav = $('.ctn_history .his_bar ul li')
        let obj_length = obj_name.length
        let obj_top //각 콘텐츠의 꼭대기 부터의 거리값
        let obj_start //애니메이션 시작 위치
        let obj_end //애니메이션 종료 위치
        let scrolling = $(window).scrollTop() //스크롤 값
        let win_h = $(window).height() //브라우저 높이
        //console.log(obj_length)

        for(i=0; i<obj_length; i++){
            obj_top = obj_name.eq(i).offset().top
            obj_start = obj_top - win_h + (win_h * 0.5)
            obj_end = obj_top + obj_name.eq(i).height() - (win_h * 0.5)
            //console.log(i, '번째', obj_start, scrolling, obj_end)
            if((scrolling < obj_end) && (scrolling > obj_start)){
                //console.log(i, '진행중')
                obj_nav.removeClass('active')
                obj_nav.eq(i).addClass('active')
                //snbScroll()
            }
        }
    }//his_area

    function his_nav(){
        let scrolling = $(window).scrollTop()
        let win_h = $(window).height()
        let obj_area = $('.ctn_history')
        let obj_name = $('.ctn_history .his_bar')
        let obj_top = obj_area.offset().top
        let obj_start = obj_top
        let obj_end = obj_top + obj_area.height() - win_h
        //console.log(obj_end, scrolling)
        if(scrolling > obj_end){
            //console.log('안보임')
            obj_name.addClass('hide')
        }else if(scrolling < obj_start){
            //console.log('시작전')
            obj_name.addClass('hide')
        }else{
            //console.log('진행중')
            obj_name.removeClass('hide')
        }
    }//his_nav

    if(history_length > 0){
        his_head()   /* 함수의 실행 */
        his_area()
        his_nav()
    }
    $(window).scroll(function(){/* 브라우저가 스크롤 할때마다 실행 */
        if(history_length > 0){
            his_head() 
            his_area() 
            his_nav() 
        }
    })
    $(window).resize(function(){ /* 브라우저가 리사이즈 될때마다 계산 */
        if(history_length > 0){
            his_head()   
            his_area()
            his_nav()
        }
    })

})//맨끝