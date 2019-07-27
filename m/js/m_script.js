$(document).ready(function(){
    
    var nav = $('.nav ul > li');
    
    nav.click(function(q){
        q.preventDefault();
        var navbtn = $(this);
        
        navbtn.addClass('on').siblings().removeClass('on');
    });
    
    var navclose = $('.nav .nav_close');
    var navopen = $('.nav .nav_close > a');
    var navi = $('.nav');
    
    navclose.click(function(p){
        p.preventDefault();
        
        if(navi.hasClass('on')){
            navi.removeClass('on');
            navi.animate({left: -300 + "px"},500);
            navopen.text('OPEN');
        } else {
            navi.addClass('on');
            navi.animate({left: 0 },500);
            navopen.text('CLOSE');
        };
    });
    
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
    
    $('#favorite .favorite_close a').click(function(a){
        a.preventDefault();
        
        $('#favorite').fadeOut();
    });
    
    var questionbox = $('.coffee_find_left');
    
    questionbox.click(function(){
        questionbox.hide();
    });
    
    var question = $('.coffee_find_right .question');
    var question_answer = $('.coffee_find_right .question > div ul li a');
    
    question_answer.click(function(e){
        e.preventDefault();
        //console.log(question.offset().top);
        
        if (question.offset().top >=  500) {
             question.animate({ top : '-=100%' }, 2000);
        }else {
            question.stop().animate({ top : '0' }, 2000);
        };
    });
    
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
    
    $('.slider').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
    });
    
    var btn_top = $('#footer .top_btn');
    
    btn_top.click(function(s){
        s.preventDefault();
        $('html, body').animate({ scrollTop : 0 },500);
    });
    
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
});

function favorite(){
        $('#favorite').fadeIn();
    };