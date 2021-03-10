//설정 01번

$(function () {
  // Slick slider 설정 - 01 Welcome 부분
  $('.slideshow').slick({
    infinite: true, // 무한반복
    dots: false, // 동그라미 네비게이션 사용안함
    autoplay: true, // 자동 재생
    autoplaySpeed: 2000, // 자동 재생 시 머무는 시간
    fade: true, // 크로스 페이드 트랜지션
    speed: 1000, // 자동 재생 트랜지션 시간
    pauseOnHover: false // 마우스 오버될 때 멈춤 사용안함
  });



  //Slick slider 설정 - 02 Review 부분
  $('.review-slider').slick({
    infinite: true, // 무한반복
    dots: true, // 동그라미 네비게이션 사용안함
    autoplay: true, // 자동 재생
    autoplaySpeed: 2000, // 자동 재생 시 머무는 시간
  });


  //Slick slider 설정 - 03 Mockup-slider 부분
  //이부분 설정해주면 이미지 사이즈 자동으로 맞춰짐
  $('.mockup-slider').slick({
    infinite: true, // 무한반복
    dots: true, // 동그라미 네비게이션 사용안함
    autoplay: true, // 자동 재생
    autoplaySpeed: 2000, // 자동 재생 시 머무는 시간
  });
});


  


//설정 02번
// Typeit 플러그인 설정 - Welcom section 부분
$(function () {
  //em태그의 id는 typing으로 설정
  $('#typing').typeIt({
    strings: [
      "1111.", 
      "2222.", 
      "3333."
    ], // 타이핑 텍스트 입력
    speed: 150, // 알파벳 타이핑 속도
    autoStart: true, // 자동 재생 사용
    breakLines: false, // 줄 바꿈 사용안함
  });
});



//설정 03번 faq 부분 이벤트 부분 설정 - Accordion
//각각 구조 파악하기!!!!!!!!!!!!!!
$(function () { 
  //맨처음부분 초기설정 부분
  //eq는 css에서의 nth-child와 같음
  //처음 index는 0부터 시작!!
  $('.faq-desc').eq(0).show();

  $('.faq-title').click(function () {
    //01번 설정
    //title이 총5개이고 무엇을 누를지 모르는 상태이므로 this로 설정
    //.next로 설정하는 이유는 faq-title의 다음부분에 faq-desc가 있어서!
    //slideDown이런거 넣을때는 앞에 .stop()을 꼭 넣어주기!!
    $(this).next().stop().slideDown();

    //02번 설정 -- 이부분 설정은 하나를 누르면 원래펼쳐져있던거는
    //슬라이드가 닫아지고 새로누를부분의 슬라이드가 펼쳐지도록!!
    //자기자신을 기준으로 위의요소로 올라가야하므로 parent로 설정
    //이 parent는 faq-item과 동일! 그리고 siblings는 형제요소를 
    //뜻하고 이부분의괄호안에는 형제요소가 다른 요소가 더 있다면 
    //.faq-item을 적어주고 다른요소가 이외에 없다면 괄호만 적어주기!

    //$(this).parent().siblings('.faq-item')의 자식요소(children)중에서~ faq-desc를 선택하여 slideUp을 시켜줄것임
    $(this).parent().siblings('.faq-item').children('.faq-desc').stop().slideUp();



    //설정03번 - acitve클래스가 설정되었을 때 after인 가상컨텐츠 부분
    //바뀌는 설정 관련 전체
    //이부분도 무슨 부분을 누를지 모르므로 this로설정!
    //this를 기준으로 위로올라가야 하므로 parent(=faq-item 부분임! ====?faq-item 부분에 active가 설정되어야 함!)
    $(this).parent().addClass('active');

    //설정04번 - 03번 설정부분과 반대로 이번에는 removeClass로 설정
    //대신 이때에는 parent의 부모요소인 siblings설정!!
    $(this).parent().siblings('.faq-item').removeClass('active');
  });
});




//설정 04번 - modal창 설정 - close-modal / open-modal 
$(function () {
  //01 - open-modal 클릭시
  $('.open-modal').click(function () {
    $('.video-modal').fadeIn();

    // 이때에는 overflow:hidden을 설정
    $('body').addClass('active');
    // $('html, body').css("overflow", "hidden");
  });

  //02 - close-modal 클릭시
  $('.close-modal').click(function () {
    $('.video-modal').fadeOut();

    // 이때에는 overflow:hidden을 해제
    $('body').removeClass('active');
  });
});



//설정05번 - 마우스 스크롤시 header 부분 색상 변화 및 + totop 버튼 설정
$(function () {
  $(window).scroll(function () {
    //조건문 설정
    if ($(window).scrollTop() > 50) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
  });


  //추가 설정 - totop 버튼 부분
  $(window).scroll(function () {
    if($(window).scrollTop() > 50) {
      $('.btn-top').addClass('active');
    } else {
      $('.btn-top').removeClass('active');
    }
  })
});


//설정 06번 - css 애니메이션 설정 --> 스크롤시에 애니메이션이 실행되도록
//지연시키는 설정
//Wow scroll animation ===> html태그에 wow라고 추가해주기
$(function () {
  wow = new WOW({
    boxClass: 'wow',
    offset: 150,
    // mobile: true
  });
  wow.init()
});




//설정 07번 - gnb 메뉴 active 클래스 부분 설정
$(function () {
  $('.trigger').click(function () {
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
  });

  //메뉴열린 창에서 각 컨텐츠 부분을 클릭하면 스크롤되어
  //선택한 부분으로 스크롤 이동하고 열린 메뉴창은 닫히도록 설정!!!
  $('.gnb a, section').click(function () {
    $('.gnb').removeClass('active');
    $('.trigger').removeClass('active');
  });
  //위에 section을 추가해준 이유는 메뉴가 열리게되었을때 메뉴버튼을 다시 눌러서 해제하지않고
  //다른 아무 부분이나 클릭하면 메뉴창이 닫히도록 설정하기위해 설정함!!!
  

});