/***********************
* 파일명 : main.js 
* 작성자 : 문미영
* 작성일 : 25-10-23
* 설  명 : 메인페이지에서만 적용되는 js를 저장 (header/footer 제외)
*********************/
$(document).ready(function(){
    $('.visual .popup').slick({
        autoplay: false, //팝업 자동 실행
        autoplaySpeed: 3000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        fade: true,  //페이드 효과 적용
        dots: false, //하단 페이지 버튼 (true, false)
        arrows: false,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        infinite: true, //무한반복 (loop)
    });
})//밑끝