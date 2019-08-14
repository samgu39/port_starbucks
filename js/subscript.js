$(document).ready(function(){

    var tmLabel = $('#header .top_menu ul li label');
    var tmInput = $('#header .top_menu ul li .search');
    
    tmLabel.click(function(){
        if(tmInput.hasClass('on')){ 
            tmInput.animate({width : 0 , opacity : 0 }, 0);
            tmInput.removeClass('on');
        }else{
            tmInput.css({
                "display":"inline-block",
                "position":"absolute",
                "top":"7px",
                "right":"30px"
            });
            tmInput.animate({width : 150 , opacity : 1 }, 0);
            tmInput.addClass('on');
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
        var menuIdx = $(this).index();
        var subIdx = submenu.eq(menuIdx);
        subIdx.stop().slideDown();
        subIdx.css({"height":"auto"});
    });
    menu.mouseleave(function(){
        var menuIdx = $(this).index();
        var subIdx = submenu.eq(menuIdx);
        subIdx.stop().slideUp();
    });
    
    menu.focusin(function(){
        var menuIdx = $(this).index();
        var subIdx = submenu.eq(menuIdx);
        subIdx.stop().slideDown();
        subIdx.css({"height":"auto"});
    });
    menu.focusout(function(){
        var menuIdx = $(this).index();
        var subIdx = submenu.eq(menuIdx);
        subIdx.stop().slideUp();
    });
      
    // 메인 메뉴 서브 메뉴 창 활성화
    
    var line= $('.line_news_right a');
    
    line.click(function(e){
        e.preventDefault();
        
        $('.line_news_right').toggleClass('on')
        
        if($('.line_news_right').hasClass('on')){
            $('.line_news_box').slideDown();
        }else{
            $('.line_news_box').slideUp();
        };
    });
    
    // 공지사항 창 활성화
    
    var btnTop = $('#footer .top_btn');
    
    btnTop.click(function(e){
        e.preventDefault();
        $('html, body').animate({ scrollTop : 0 },500);
    });
    
    // top 버튼 활성화
    
    var tab = $('.tab ul li');
    
    tab.mouseover(function(){
        $(this).children('ul').stop().slideDown();
    });
    
    tab.mouseleave(function(){
        $(this).children('ul').stop().slideUp();
    });
    
    // 탭메뉴 슬라이드 업/다운
});
