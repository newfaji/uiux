$(document).ready(function(){
    const snbScroll = function() {
        const $menu_wrap = $(".snb ul");  /* 선택자를 잘 입력해야함 */
        const $menu_li = $(".snb ul li");
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
    snbScroll();   /* 함수의 실행 */
})//맨끝