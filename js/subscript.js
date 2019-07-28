$(document).ready(function(){

    var tmlabel = $('#header .top_menu ul li label');
    var tminput = $('#header .top_menu ul li .search');
    
    tmlabel.click(function(){
        if(tminput.hasClass('on')){ 
            tminput.animate({width : 0 , opacity : 0 }, 0);
            tminput.removeClass('on');
        }else{
            tminput.css({
                "display":"inline-block",
                "position":"absolute",
                "top":"7px",
                "right":"30px"
            });
            tminput.animate({width : 150 , opacity : 1 }, 0);
            tminput.addClass('on');
        };
    });
    
    // 상단 메뉴 검색창 활성화
    
    var nav = $('#header .nav');
    var navOffset = nav.offset().top;
    
    $(window).scroll(function(){
        var winScroll = $(this).scrollTop();
        
        if (winScroll > navOffset){
            nav.addClass('on');
        }else {
            nav.removeClass('on');
        };
    });
    
    // nav에 fixed 효과 추가
    
    var menu = $('#header > .nav > div > ul > li');
    var submenu = $('#header > .nav > div > ul > li > .submenu');
    
    menu.mouseover(function(){
        var menuidx = $(this).index();
        var subidx = submenu.eq(menuidx);
        subidx.stop().slideDown();
    });
    menu.mouseleave(function(){
        var menuidx = $(this).index();
        var subidx = submenu.eq(menuidx);
        subidx.stop().slideUp();
    });
      
    // 메인 메뉴 서브 메뉴 창 활성화
    
    var line= $('.line_news_right a');
    
    line.click(function(a){
        a.preventDefault();
        
        $('.line_news_right').toggleClass('on')
        
        if($('.line_news_right').hasClass('on')){
            $('.line_news_box').slideDown();
        }else{
            $('.line_news_box').slideUp();
        };
    });
    
    // 공지사항 창 활성화
    
    var btn_top = $('#footer .top_btn');
    
    btn_top.click(function(s){
        s.preventDefault();
        $('html, body').animate({ scrollTop : 0 },500);
    });
    
    // top 버튼 활성화
    
});
