
$(document).ready(function(){
    let win_w = $(window).width()
    let win_h = $(window).height()
    console.log(win_w, win_h)
    $('.wh').text('넓이는' + win_w + '  높이는' + win_h)
})