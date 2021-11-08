$(document).ready(function () {
    var slideWidth = $('.slide').width();

    $('#prev').on('click', function(){
        $('.slides').animate({
            left: +slideWidth
        }, 0, function(){
            $('.slide:last-child').prependTo('.slides')
            $('.slides').css({
                left : 0
            });
        })
    })

    $('#next').on('click', function(){
        $('.slides').animate({
            left: -slideWidth
        }, 0, function(){
            $('.slide:first-child').appendTo('.slides')
            $('.slides').css({
                left : 0
            });
        })
    })

})