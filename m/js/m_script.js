$(document).ready(function(){
    
    var popupPortClose = $('.portfolio_popup .portfolio_popup_close a');
    var popupPort = $('.portfolio_popup');
    
    popupPortClose.click(function(e){
        e.preventDefault();
        
        popupPort.hide(800);
    });
    
    // 포트폴리오 홈페이지 명시 팝업창 닫기 스크립트
    
    var nav = $('.nav ul > li');
    
    nav.click(function(e){
        e.preventDefault();
        
        var navBtn = $(this);
        
        navBtn.addClass('on').siblings().removeClass('on');
    });
    
    // 메뉴 탭 여닫기 스크립트
    
    var navClose = $('.nav .nav_close');
    var navOpen = $('.nav .nav_close > a');
    var navi = $('.nav');
    
    navClose.click(function(e){
        e.preventDefault();
        
        if(navi.hasClass('on')){
            navi.removeClass('on');
            navi.animate({left: -300 + "px"},500);
            navOpen.text('>>');
        } else {
            navi.addClass('on');
            navi.animate({left: 0 },500);
            navOpen.text('<<');
        };
    });
    
    // 메뉴 닫기 클릭시 옆으로 이동하는 스크립트
    
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
    
    // swiper 슬라이드 스크립트
    
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
    
    // 스타벅스 공지사항 페이지 열기
    
    $('#favorite .favorite_close a').click(function(e){
        e.preventDefault();
        
        $('#favorite').fadeOut();
    });
    
    // 나만의 음료로 등록 되었습니다 창 닫기
    
    var questionBox = $('.coffee_find_left');
    
    questionBox.click(function(){
        questionBox.hide();
    });
    
    var question = $('.coffee_find_right .question');
    var questionAnswer = $('.coffee_find_right .question > div ul li a');
    
    questionAnswer.click(function(e){
        e.preventDefault();
        //console.log(question.offset().top);
        
        if (question.offset().top >=  500) {
             question.animate({ top : '-=100%' }, 2000);
        }else {
            question.stop().animate({ top : '0' }, 2000);
        };
    });
    
    // 나와 어울리는 커피 찾기 스크립트
    
    var slideBox = $('.movebox > div');
    var slideCount = slideBox.length;
    var currentIndex = 0;
    
    slideBox.each(function(){
        var slideLenght = $(this);
        var slideBoxIndx= slideLenght.index();
        //console.log(slideBoxIndx);
        var moveLeft = slideBoxIndx * 100 + "%";
        
        slideLenght.css({ left : moveLeft });
    });
    
    $('.slide_prev').click(function(){
            slideBox.animate({ left : '+=100%' }, 300);
            currentIndex -= 1;
            //console.log(currentIndex);
            
            if(currentIndex == 0){
            $('.slide_prev').addClass('off');
            }else{
                $('.slide_next').removeClass('off');
            };
        });
        
    $('.slide_next').click(function(){
            slideBox.animate({ left : '-=100%' }, 300);
            currentIndex += 1;
            //console.log(currentIndex);
            
            if(currentIndex === slideCount -1){
            $('.slide_next').addClass('off');
            }else{
                $('.slide_prev').removeClass('off');
            };
        });
    
    // 이달의 메뉴 추천 스크립트
    
    $('.slider').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
    });
    
    // bxSlider 슬라이드 스크립트
    
    var btnTop = $('#footer .top_btn');
    
    btnTop.click(function(e){
        e.preventDefault();
        
        $('html, body').animate({ scrollTop : 0 },500);
    });
    
    // 하단의 top 버튼 클릭시 맨 위로 이동되는 애니메이트
    
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
    
    // 매장 리스트 화면에 닿으면 이벤트 추가 스크립트
});

function favorite(){
        $('#favorite').fadeIn();
    };
// 나만의 음료 등록시 팝업 스크립트