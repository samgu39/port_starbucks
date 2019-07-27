$(document).ready(function(){
    var uAgent = navigator.userAgent.toLowerCase();
    var mobilePhones = new Array('iphone','ipod','android','blackberry','windows ce','nokia','webos','opera mini','sonyericsson','opera mobi','iemobile');
    for(var i=0;i<mobilePhones.length;i++)
    if(uAgent.indexOf(mobilePhones[i]) != -1){
    document.location="./m/index.html";
    }
    
    // 모바일 체크 후 페이지 이동 스크립트
    
    var skip = $('#skip');
    
    skip.focusin(function(){
        $(this).addClass('on');
    });
    
    // tab 버튼 클릭 시 skip 메뉴 활성화
    
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
    
    var popup = $('#popup');
    var popclose = $('#popup .close');
    
    popclose.click(function(){
        popup.hide();
    });
    
    // 메인 페이지 팝업창 활성화
    
    var swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
        
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });
    
    // swiper 슬라이드 코드
    
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
    
    $('#favorite .favorite_close a').click(function(a){
        a.preventDefault();
        
        $('#favorite').fadeOut();
    });
    
    // 나만의 음료 등록 창닫기
    
    var question = $('.coffee_find_right .question');
    var question_answer = $('.coffee_find_right .question > div ul li a');
    
    question_answer.click(function(e){
        e.preventDefault();
        
        if (question.offset().top > 600 ) {
             question.animate({ top : '-=100%' }, 2000);
        }else {
            question.stop().animate({ top : '0' }, 2000);
        };
    });
    
    // 나와 어울리는 커피 슬라이드
    
    var slidebox = $('.slide .movebox > div');
    var slideCount = slidebox.length;
    var currentIndex = 0;
    
    slidebox.each(function(o){
        var slidelenght = $(this);
        var slideboxindx= slidelenght.index();
        //console.log(slideboxindx);
        var moveleft = slideboxindx * 100 + "%";
        
        slidelenght.css({ left : moveleft });
    });
    
    $('.slide_prev').click(function(){
            slidebox.animate({ left : '+=100%' }, 300);
            currentIndex -= 1;
            console.log(currentIndex);
            
            if(currentIndex == 0){
            //$('.slide_prev').css("display","none");
            $('.slide_prev').addClass('off');
            }else{
                //$('.slide_prev').css("display","block");
                $('.slide_next').removeClass('off');
            };
        });
        
    $('.slide_next').click(function(){
            slidebox.animate({ left : '-=100%' }, 300);
            currentIndex += 1;
            console.log(currentIndex);
            
            if(currentIndex === slideCount -1){
            $('.slide_next').addClass('off');
            }else{
                $('.slide_prev').removeClass('off');
            };
        });
    
    // 이달의 메뉴 추천 슬라이드
    
    $('.slider').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
    });
    
    // boxslider 슬라이드 코드
    
    var btn_top = $('#footer .top_btn');
    
    btn_top.click(function(s){
        s.preventDefault();
        $('html, body').animate({ scrollTop : 0 },500);
    });
    
    // top 버튼 활성화
    
    var show = $('.coffee_find_left');
    var showOffset = $('.coffee_find_left').offset().top - 500;
    var store = $('.store_list');
    var storeOffset = $('.store_list').offset().top - 1000;
    
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        
        if (wScroll >= showOffset){
            show.addClass('on');
        };
        
        if (wScroll >= storeOffset){
            store.addClass('on');
        };
    });
    
    // 화면이 해당 div에 닿았을 경우 div에 class 추가
    
});

function favorite(){
        $('#favorite').fadeIn();
    };

// 나만의 음료 등록