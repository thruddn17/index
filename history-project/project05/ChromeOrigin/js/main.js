//제이쿼리 - 부드럽게 슬라이드 기능작성
$('.navi a, .gototop').click(function(e) {
    $.scrollTo(this.hash || 0, 900);
    e.preventDefault();
});


// 트리거 버튼 설정 부분
$(function() {
    //기능추가(1) ==> 햄버거 버튼 클릭시 메뉴바 나타나도록 설정!!
    // toggle
    $('.trigger').click(function() {
        $('.navi').toggleClass('active');
    });

    //기능추가(2) ==> a태그 클릭하면 접히도록 설정!!
    //- navi 밑의 a태그를 클릭하였을 때
    // remove
    $('.navi a, section').click(function() {
        $('.navi').removeClass('active');
    });

    //기능추가(3) ===> a태그 부분 말고 다른 화면이나 부분들을 클릭시
    //메뉴바부분이 접혀지도록 설정 ---- section은 그냥태그이므로 .으로 시작하지 않음!!
    //그런데 이렇게 똑같은 성질을 여러번 작성하지말고 ---> 같이 연달아 작성!!
    //위에 줄에 같이 작성!! =------- .navi a, section 이렇게!!
    // $('section').click(function() {
    //     $('.navi').removeClass('active');
    // });
});


