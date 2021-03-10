'use strict';

// 햄버거 버튼 설정 - 트리거부분 ===> 먼저 html 태그 뒤에 active 설정해주기!!
// 트리거

//trigger라는 클래스를 click을 하게 되면 
//function함수 실행 (+ 자기자신(=this)을 active라는 클래스를 넣을것임)

// $('.trigger').click(function () {
//     $(this).toggleClass('active')
// });


//이렇게 적어줘도 가능 - html태그에 js파일위치가 어디에 놓이냐따라에 적용!!!!
// $(function () {
//     $('.trigger').click(function () {
//         $(this).toggleClass('active')
//     });
// });



//이번엔 gnb 부분 active 설정클래스 토글 적용 == 
$(function () {

    //💭💭💭💭💭💭💭💭💭💭💭💭
    //Trigger
    $('.trigger').click(function () {
        $(this).toggleClass('active');
        $('.gnb').toggleClass('active');
    });


    //메뉴화면이 아닌 다른 바탕화면 부분을 클릭했을 때 토글창 닫아주기위해 설정!!
    //즉 section부분을 클릭하면 이함수를 실행 - gnb 부분(이미나와있는 상태임 현재) - 그래서
    // 이 부분에 removeClass를 설정해주는 것임!!
    //💭💭💭💭💭💭💭💭💭💭💭💭
    $('section, .menu a').click(function() {
        $('.gnb').removeClass('active');

        //trigger도 위의 코드부분에서 이미 들어가 있으므로 이부분에서는 제거해주어야 함!!!
        //이부분은 메뉴선택하고 그대로 남아있는 x 모양을 해제해주기 위해 작성한것임!!
        //즉 x모양과 햄버거 버튼이 섞이는 현상의 오류를 방지하기 위해 작성!
        $('.trigger').removeClass('active');
    });
    //중복을 방지하기 위해 section과 menu a의 속성을 같이 적어준것임!!!


    //다른 메뉴의 a링크 클릭했을 때 창이 자동으로 닫혀지도록 설정하는 부분!!!!!
    //메뉴 밑의 a태그를 클릭했을 때 함수 실행
    // ===> gnb 클래스의 removeClass를 active !!!
    // $('.menu a').click(function () {
    //   $('.gnb').removeClass('active')
    // });


    //(1) 제이쿼리 플러그인으로 사용 - script:src로 설정 해주어야 함!
    // 부드러운 스크롤링 설정 --- menu 밑의 a태그를 클릭하게 되면
    //scrollTo 라는 플러그인이 작동되는 것임! - 근데 0.9초 동안 이동하라는 말임!
    //💭💭💭💭💭💭💭💭💭💭💭💭
    $('.menu a').click(function (e) {
      $.scrollTo(this.hash || 0, 900);
    });

    //위의 방법 대신 responsive.css부분에 html {scroll-behavior: smooth설정해도 비슷하게 작동함!!!}


    //💭💭💭💭💭💭💭💭💭💭💭💭
    //Header 부분 active 설정
    //window에 해당하는것이므로 window 사용!! 
    $(window).scroll(function () {
      //조건 1번 -- scrollTop - 스크롤이 조금이라도 되었을때
      if($(window).scrollTop() > 100){
        $("header, .gototop").addClass("active");
      }

      else {
        $("header, .gototop").removeClass("active");
      }
      //gototop 부분 나타나는 설정도 이부분에 공통으로 ,다음으로 설정해주기!!! - 즉 스크롤이 되었을때
      //gototop버튼 나타나게 설정하는 것임!!!
    });


    //💭💭💭💭💭💭💭💭💭💭💭💭
    //gototop 버튼 부분 설정 --- .menu a 부분 js작성한 곳에 ,다음으로 같이 공통으로 작성해도되는것임
    $('.gototop').click(function (e) {
      $.scrollTo(this.hash || 0, 900);
    });








    //💭💭💭💭💭💭💭💭💭💭💭💭
    // Slick js  - history 부분 설정 
    $(function () {
      $(document).ready(function () {
        
        $('.history-slider').slick( {
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 4,


          //Slick js 반응형 설정 부분 
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              }
            },

            //모바일 사이즈 일 때
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
      });
    });



    //💭💭💭💭💭💭💭💭💭💭💭💭
    // Slick js - Project -photo 부분 설정
    $('.project-photo').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: 'linear'
    });



    //💭💭💭💭💭💭💭💭💭💭💭💭



    //💭💭💭💭💭💭💭💭💭💭💭💭



    //💭💭💭💭💭💭💭💭💭💭💭💭
});