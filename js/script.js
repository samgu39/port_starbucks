    var uAgent = navigator.userAgent.toLowerCase();
    var mobilePhones = new Array('iphone','ipod','android','blackberry','windows ce','nokia','webos','opera mini','sonyericsson','opera mobi','iemobile');
    for(var i=0;i<mobilePhones.length;i++)
    if(uAgent.indexOf(mobilePhones[i]) != -1){
    document.location="./m/index.html";
    }
    // 모바일 체크 후 페이지 이동 스크립트

$(document).ready(function(){
    var skip = $('#skip');
    
    skip.focusin(function(){
        $(this).addClass('on');
    });
    
    // tab 버튼 클릭 시 skip 메뉴 활성화
    
    var popupPortClose = $('.portfolio_popup .portfolio_popup_close a');
    var popupPort = $('.portfolio_popup');
    
    popupPortClose.click(function(e){
        e.preventDefault();
        
        popupPort.hide(800);
    });
    
    // 포트폴리오 홈페이지 명시 팝업창 닫기 스크립트
    
    var topMenuLabel = $('#header .top_menu ul li label');
    var tmInput = $('#header .top_menu ul li .search');
    
    topMenuLabel.click(function(){
        if(tmInput.hasClass('on')){ 
            tmInput.animate({top : - 100 + "px" , opacity : 0 }, 0);
            tmInput.removeClass('on');
        }else{
            tmInput.css({
                "display":"inline-block",
                "position":"absolute",
                "top": "0"
            });
            tmInput.animate({ top : 0 , opacity : 1 }, 0);
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
    
    var popup = $('#popup');
    var popClose = $('#popup .close');
    
    popClose.click(function(){
        popup.hide();
    });
    
    // 메인 페이지 팝업창 활성화
    
    var swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true, // 무한 반복
        
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      }, // 좌우 이동
    });
    
    // swiper 슬라이드 코드
    
    $('#favorite .favorite_close a').click(function(e){
        e.preventDefault();
        
        $('#favorite').fadeOut();
    });
    
    // 나만의 음료 등록 창닫기
    
    var question = $('.favorite .question');
    var questionAnswer = $('.favorite .question > div ul li a');
    
    questionAnswer.click(function(e){
        e.preventDefault();
        
        //console.log(question.offset().top);
        
        if (question.offset().top > 1200 ) {
             question.animate({ top : '-=100%' }, 2000);
        }else {
            question.stop().animate({ top : '0' }, 2000);
        };
    });
    
    // 나와 어울리는 커피 슬라이드
    
    var questionBox = $('#main .main_middle .favorite_coffee .coffee a');
    var questionBtn = $('.close a');
    
    questionBox.click(function(e){
        e.preventDefault();
        
        $('.favorite').fadeIn();
    });
    
    questionBtn.click(function(e){
        e.preventDefault();
        
        $('.favorite').fadeOut();
        question.stop().animate({ top : '0' }, 800);
    });
    
    // 나와 어울리는 커피 창 닫기
    
    var slideBox01 = $('.event_left_slide > div');
    var slideCount01 = slideBox01.length;
    var currentIndex01 = 0;
    
    slideBox01.each(function(){
        var slideLenght01 = $(this);
        var slideBoxIndx01= slideLenght01.index();
        //console.log(slideboxindx);
        var moveLeft01 = slideBoxIndx01 * 100 + "%";
        
        slideLenght01.css({ left : moveLeft01 });
    });
    
    $('.event_left .slide_prev').click(function(){
            slideBox01.animate({ left : '+=100%' }, 300);
            currentIndex01 -= 1;
            //console.log(currentIndex01);
            
            if(currentIndex01 == 0){
            //$('.slide_prev').css("display","none");
            $('.event_left .slide_prev').addClass('off');
            }else{
                //$('.slide_prev').css("display","block");
                $('.event_left .slide_next').removeClass('off');
            };
        });
        
    $('.event_left .slide_next').click(function(){
            slideBox01.animate({ left : '-=100%' }, 300);
            currentIndex01 += 1;
            //console.log(currentIndex01);
            
            if(currentIndex01 === slideCount01 -1){
            $('.event_left .slide_next').addClass('off');
            }else{
                $('.event_left .slide_prev').removeClass('off');
            };
        });
    
    // 이벤트 01 슬라이드
    
    var slideBox02 = $('.event_right_slide > div');
    var slideCount02 = slideBox02.length;
    var currentIndex02 = 0;
    
    slideBox02.each(function(){
        var slideLenght02 = $(this);
        var slideBoxindx02= slideLenght02.index();
        //console.log(slideboxindx);
        var moveLeft02 = slideBoxindx02 * 100 + "%";
        
        slideLenght02.css({ left : moveLeft02 });
    });
    
    $('.event_right .slide_prev').click(function(){
            slideBox02.animate({ left : '+=100%' }, 300);
            currentIndex02 -= 1;
            //console.log(currentIndex);
            
            if(currentIndex02 == 0){
            //$('.slide_prev').css("display","none");
            $('.event_right .slide_prev').addClass('off');
            $('.event_right .slide_next').removeClass('off');
            $('#main .main_middle .notice_box .event_right h4').html('#02 이벤트 :: ' + '<i class="event01">자몽 셔벗 블렌디드 출시!</i>')
            }else{
                //$('.slide_prev').css("display","block");
                $('.event_right .slide_next').removeClass('off');
            };
        });
        
    $('.event_right .slide_next').click(function(){
            slideBox02.animate({ left : '-=100%' }, 300);
            currentIndex02 += 1;
            //console.log(currentIndex);
            
            if(slideCount02 = 1){
            $('.event_right .slide_next').addClass('off');
            $('.event_right .slide_prev').removeClass('off');
            $('#main .main_middle .notice_box .event_right h4').html('#03 이벤트 :: ' + '<i class="event02">아보카도가 통째로 들어갔다면?</i>')
            }else{
                $('.event_right .slide_prev').removeClass('off');
            };
        });
    
    // 이벤트 02 슬라이드
    
    /* $('.slider').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
    }); */
    
    // boxslider 슬라이드 코드
    
    var btnTop = $('#footer .top_btn');
    
    btnTop.click(function(e){
        e.preventDefault();
        $('html, body').animate({ scrollTop : 0 },500);
    });
    
    // top 버튼 활성화
    
    var store = $('#main .main_bottom .store_box');
    var storeOffset = $('#main .main_bottom .store_box').offset().top - 300;
    
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        
        if (wScroll >= storeOffset){
            store.addClass('on');
        };
    });
    
    // 화면이 해당 div에 닿았을 경우 div에 class 추가 */
    
});

function favorite(){
        $('#favorite').fadeIn();
    };

// 나만의 음료 등록