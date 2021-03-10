// 스와이퍼 설정 1번 맨위 큰이미지 슬라이드부분 설정

//원래 내가 작성하던 기본 설정 형태
// $(function () {
//   $(document).ready(function () {

//   });
// });


//최근 작성형태 - 변형
$(function () {
  //설정3번 스와이퍼 js 설정 --- 메인 큰화면 3개 부분 페이지 적용
  var mySwiper = new Swiper ('.section_set', {
    loop: true,
   
    autoplay: {
      delay: 5000,
    },
  
    pagination: {
      el:'.swiper-pagination',
      clickable: true,
    },
  });
})


// 2번 Swiper 설정  --- main_news 부분!!

//(1) - 페이지 넘기는 부분 totalSlide 관련 부분임 --- 이 부분은 기능 찾기!!!!
var slideCnt = $(".news_box .swiper-slide").length;
$("#totalSlide").text(slideCnt);


//(2) - 본체 부분 작성!!!
$(function () {
  var twoSwiper = new Swiper ('.news_box', {
    navigation: {
      nextEl: '.slide_btn .swiper-button-next',
      prevEl: '.slide_btn .swiper-button-prev',
    },

    //이 부분도 기능 찾기 밑에부분부터 스스로 작성 못했으므로 
    //페이지 넘길시 숫자도 같이 변하는 설정 찾아놓기!!!!
    on: {
      slideChangeTransitionStart: function(){
        var slideCnt = $(".news_box .swiper-slide").length;
  
        $("#currentSlide").text(this.activeIndex+1);
        $("#totalSlide").text(slideCnt);
      }
    }
  });
});






// (3) nav 메뉴 클릭시 짝대기 3개에서 x버튼으로 바뀌는 부분 설정
// ul태그에 comnpay/work/contact - 평소에는 이부분이 ul style=display:none; 으로 고정
$(function () {
  $(document).ready(function () {
    $('.nav_box a.nav_btn').click(function () {
      //active 대신 on 으로 사용가능 or toggle~~ 이런거 다찾아보고 적어놓기!!!
      if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          // $(".nav_box ul").css("display", "none");
          $(".nav_box ul").hide();

      } else {
        $(this).addClass("active");
        $(".nav_box ul").css("display", "block");
        // $(".nav_box ul").css("display", "block");

      }
    });
  });
});





// (4) PLAY VIDEO 버튼 클릭시 레이어 팝업창 띄우기 설정
$(function () {
  $(document).ready(function () {
    //PLAY 1번 부분
    $(".play.play1").click(function () {
      $(".layer_wrap").hide();
      $(".main_vid1.vid, .main_vid1 .video_pop").css("display", "block");
      // $(".main_vid1, .main_vid1 .video_pop").show();
      $("html, body").css("overflow", "hidden");
    });

    //PLAY 2번 부분
    $(".play.play2").click(function () {
      $(".layer_wrap").hide();
      $(".main_vid2.vid").css("display", "block");
      $("html, body").css("overflow", "hidden");
    });

    //PLAY 3번 부분
    $(".play.play3").click(function () {
      $(".layer_wrap").hide();
      $(".main_vid3.vid").css("display", "block");
      $("html, body").css("overflow", "hidden");
    });

    //(4)-2번 설정 - X버튼 누르면 창 닫기 설정
    // $(document).ready(function () {
      $(".video_title a.popClose").click(function () {
        $(".layer_wrap").hide();
        $("html, body").css("overflow-y", "auto");
      });
    // })
  });
});

//원본 내용
// $(function(){
//   $(document).on("click",".play1",function(){
//     $(".layer_wrap").hide();
//     $(".main_vid1, .main_vid1 .video_pop").show();
//     $("html, body").css("overflow","hidden");
//   });
//   $(document).on("click",".play2",function(){
//     $(".layer_wrap").hide();
//     $(".main_vid2, .main_vid2 .video_pop").show();
//     $("html, body").css("overflow","hidden");
//   });
//   $(document).on("click",".play3",function(){
//     $(".layer_wrap").hide();
//     $(".main_vid3, .main_vid3 .video_pop").show();
//     $("html, body").css("overflow","hidden");
//   });

//   $(document).on("click",".vid .popClose",function(){
//     $(".layer_wrap").hide();
//     $("html, body").css("overflow-y","auto");

//   });


// });





// (5) 3번페이지 이미지리스트 6개 각각 클릭시 레이어 팝업창 띄우고 닫기
// work_thumb 이부분임!!! ---- 이부분 정보 찾기!!
// 각각 id값을 다른값으로 설정해놓은 상태에서 this 활용하고 ~~~
$(function () {
  $(document).ready(function() {
    $(".work_thumbs .openPop").click(function () {
      $(".popup, .video_pop").hide();
      $("html, body").css("overflow", "hidden");

      $(this).each(function () {
        var popNum = $(this).attr("id");
        $(".popup").show();
        $(".video_" + popNum).show();
      });  
    });
  });

  //창닫기 부분 설정 --- 이부분도 어떻게 적용되고 하는지 정보찾아서 
  //설명 적어놓기!!!!
  $(document).ready(function () {
    $(".popClose").click(function () {
      $(this).parents(".popup").hide();
      $("html, body").css("overflow", "auto");
    });
  });
});




// (6) main_news 부분 각각 뉴스 클릭시 레이어 팝업창 설정 
$(function () {
  $(document).ready(function () {
    //.news_box .swiper-slide li a이부분이 선택 클릭할 부분임!!!
    $(".news_box .swiper-slide li a").click(function () {
      $(this).each(function () {
        var news_boxNum = $(this).attr("id");
        //즉 id=news1~4 까지 받아와야 함

        $(".layer_wrap.board." + news_boxNum).show();
      });

      $("html, body").css("overflow", "hidden");
    });


    //팝업창 닫는 부분 설정
    $(".pop_close").click(function () {

      //layer_wrap 이부분이 전체부분이므로 이부분을 닫아주어야 함!
      $(".layer_wrap").css("display", "none");
      $("html,body").css("overflow", "auto");
    })


  });
});




// (7) 푸터 부분 CONTACT 부분 클릭시 Contact 레이어 팝업창 띄우기 + 닫기 설정
$(function () {
  $(document).ready(function () {
    
    // 클릭시 띄우기 부분
    $(".contact_open").click(function () {
      $(".contact").css("display", "block");
      $("html, body").css("overflow", "hidden");
    });

    //닫기 버튼 클릭시 팝업창 닫기
    $(".pop_close").click(function () {
      $("contact").css("display", "none");
      $("html, body").css("overflow", "auto");
    });

  });
});


//08번 설정 부분 - 내용 찾기 !!!!!!! 

// (8) 푸터 부분 CONTATC 레이어 팝업창에서 개인정보 동의 체크후 
//문의 하기 버튼 클릭시 나타나는 설정 
$(function () {
  $(document).ready(function () {
    var form = document.bbs_form2;
    
    //조건(1)
    if (form.title.value.lenght == 0) {
      alert("제목을 입력하세요.");
      form.title.focus();
      return false;
    }

    //조건(2)


    //조건(3)


  });
});




// (9) 푸터 부분 화살표 동그라미 이미지 클릭시 오시는길 팝업창 설정 
$(function () {
  $(document).ready(function () {
    //먼저 , 창 띄우기 설정!! - address 1번 설정
    $(".address1 a").click(function () {
      //.may_layer는 전체 부분임!
      $(".map_layer1").css("display", "block");
      $("html, body").css("overflow", "hidden");
    });

    // 창 닫기 부분 설정 - 1번
    $(".map_layer1 .popClose").click(function () {
      $(".map_layer1").css("display", "none");
      $("html, body").css("overflow-y", "auto");
    });
  });

  //address 2 번 부분 설정
  $(document).ready(function () {
    //먼저 , 창 띄우기 설정!! - address 1번 설정
    $(".address2 a").click(function () {
      //.may_layer는 전체 부분임!
      $(".map_layer2").css("display", "block");
      $("html, body").css("overflow", "hidden");
    });

    // 창 닫기 부분 설정 - 2번
    $(".map_layer2 .popClose").click(function () {
      $(".map_layer2").css("display", "none");
      $("html, body").css("overflow-y", "auto");
    });
  });
});



// (10) - 푸터 부분 화살표 동그라미 이미지 마우스 오버시 색 변하는 
//img src 설정 부분
$(function () {
  $(document).ready(function () {

    //Address 01 번
    //마우스 hover 시 색변경 이미지로 교체 (src 속성)
    $(".f_wrap span.address1 a img.ico").on("mouseover", function () {
      $(this).attr("src", "./img/map_on.png");
    });

    //마우스 out 시 색변경 전 원래 이미지로 다시 교체 (src 속성)
    $(".f_wrap span.address1 a img.ico").on("mouseout", function () {
      $(this).attr("src", "./img/map_ico.png");
    });


    //Address 02 번
    //마우스 hover 시 색변경 이미지로 교체 (src 속성)
    $(".f_wrap span.address2 a img.ico").on("mouseover", function () {
      $(this).attr("src", "./img/map_on.png");
    });

    //마우스 out 시 색변경 전 원래 이미지로 다시 교체 (src 속성)
    $(".f_wrap span.address2 a img.ico").on("mouseout", function () {
      $(this).attr("src", "./img/map_ico.png");
    });
  });
});



//(11) toTop 버튼 부분 설정
$(function () {
  $(document).ready(function () {
    $(".toTop").hide();

    $(window).scroll(function () {
      var sct = $(window).scrollTop();

      if(sct <= 100) {
        $(".toTop").hide();
      } else {
        $(".toTop").show();
      }
    })
  });
});





//(12) Window Resize 설정 부분 - 이부분 관련 내용찾아서 적어놓기!!!!!

//outerHeight / var로 변수 설정 / resize / 
var winH = $(window).outerHeight();
$(".main_set").css("height", winH);	


$(window).resize(function(){
  var winH = $(window).outerHeight();
  $(".main_set").css("height", winH);	
});