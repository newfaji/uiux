$(document).ready(function(){
    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

		navigation: true, /* 오른쪽에 각 페이지의 paging */
		navigationPosition: 'left', /* 위치 */
		navigationTooltips: ['Main', '나무심기', '숲 활동', '활동이야기', 'Footer'], /* 툴팁 */
		showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */
		lockAnchors: false,
		anchors: ['Main', 'Tree', 'Activity', 'News', 'SiteInfo'], /* href="#link1" 이렇게 코딩하면 해당 링크명으로 이동 */
		autoScrolling: true, /* 한페이지씩 스크롤 */
		scrollHorizontally: true,
		verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
		scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

		afterLoad: function(origin, destination, direction, trigger){
			console.log('나와????', destination.index)
			if((destination.index == 1) || (destination.index == 3)){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
				//console.log('2번째 슬라이드');
                $('#fp-nav').removeClass('hide')
				$('header').addClass('dark')
				$('#fp-nav').addClass('dark')
				$('.tree .tit h2 strong').counterUp();
			}else if(destination.index == 4){
				$('#fp-nav').addClass('hide')
			}else{
                $('#fp-nav').removeClass('hide')
				$('header').removeClass('dark')
				$('#fp-nav').removeClass('dark')
            }
		},

		responsiveWidth: 769, /* fullpage를 적용시키지 않을 모바일 사이즈 */
        responsiveHeight: 500
	});//fullpage

	let visual_name = ['서울마이트리', '2025 후원의달', '고목나무이야기', '후원자인터뷰']
	const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
		autoplay: {  /* 팝업 자동 실행 */
			delay: 5000,
			disableOnInteraction: true,
		},
		effect: "fade", /* fade 효과 */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.visual .paging ul', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
			//type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
			renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
				return '<li class="'+ className +'"><span>'+ visual_name[index] +'</span></li>';
			},
		},
	});


	/***************************************
	 * 퀵메뉴 열고 닫기
	 * aside.quick .quick_open 를 클릭하면 aside.quick open
	 * ----> aside.quick .quick_wrap slideDown()으로 나타나기
	 * aside.quick .quick_close 를 클릭하면 aside.quick에 open 삭제
	 * ----> aside.quick .quick_wrap slideUp()으로 나타나기
	*/

	$('aside.quick .quick_open').on('click', function(){
		$('aside.quick').addClass('open')
		$('aside.quick .quick_wrap').slideDown()
	})
	$('aside.quick .quick_close').on('click', function(){
		$('aside.quick').removeClass('open')
		$('aside.quick .quick_wrap').slideUp()
	})


	

})//맨끝