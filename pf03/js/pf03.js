$(function(){
    // 스크롤할때 헤드변경

    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        console.log(sct);
        if(sct>0) {
            $('#header').addClass('on');
        }else{
            $('#header').removeClass('on');
        }
    });

    $('.main_slider').slick({
        //autoplay:true,
        autoplaySpeed:400,
        pauseOnHover:false,
        arrows:false,
        dots:true,
    });
     //제품 슬라이드
$('.pr_slider'). slick({
    
    arrows:false,
    autoplay:true,
    slidesToShow: 4,
    //centerMode:true,
    //centerPadding:"100px",

});


//제품 슬라이드 가운데 커지는거랑 바 이동//

$('.pr_slider figure').eq(4).addClass('on')
$('.pr_slider').on('afterChange',function(e,s,c){
    //c = 1,2.......
    $('.pr_slider figure').eq(c+8).addClass('on').siblings().removeClass('on');
    $('#content01 .slide_bar>span').css({left:c*100})
    
});


//제품 슬라이드 화살표//

$('#content01 .btn i.xi-angle-left-thin').on('click',function(){
    $('.pr_slider').slick('slickPrev');
});
$('#content01 .btn i.xi-angle-right-thin').on('click',function(){
    $('.pr_slider').slick('slickNext');
});

    //------화살표------//

    $('#main_visual .main_btn i.xi-angle-left-thin').on('click', function(){
        $('.main_slider').slick('slickPrev');
    });
    $('#main_visual .main_btn i.xi-angle-right-thin').on('click', function(){
        $('.main_slider').slick('slickNext');
    });

   

    //------네번째 동영상------//

    $('#mv01').YTPlayer({
        videoURL:'https://youtu.be/SRTFvKv9Qk8',
        containment:'self',
        autoPlay:true,
        mute:true,
        startAt:0,
        opacity:1,
        showControls:false,
        playOnlyIfVisible:true,
        optimizeDisplay:false,
    });
    
    $('#content04_mv i.xi-pause').on('click',function(){
        $('#mv01').YTPause();
    });

    $('#content04_mv i.xi-play').on('click',function(){
        $('#mv01').YTPlay();
    });

    $('#content04_mv i.xi-tv').on('click',function(){
        $('#mv01').YTPFullscreen();
    });

    //toTop//
$('#toTop').on('click', function(){
    $('html, body').animate({scrollTop:0},400)
});

$(window).on('scroll', function(){
    var sct=$(window).scrollTop();
    //if(sct>400){
    //    $('#toTop').fadeIn()
   // }else
    //$('#toTop').fadeOut()
    //}
   sct>400 ? $('#toTop').fadeIn() : $('#toTop').fadeOut();
   $('#scroll_banner').css({top:300+sct})
});

});  