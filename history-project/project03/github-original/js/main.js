(function (window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle'); //이부분은 클래스라서 점을 입력
    const $toggleBtn = document.getElementById('toggle-btn'); //이부분은 아이디부분인데 이미 찾는메소드이름이 id가붙어있으므로 #을넣어줄 필요없음!! 

    $toggleBtn.addEventListener('click', function() {
        toggleElements();
    }); //클릭이벤트 감지




//window는 브라우저를 의미함!!!!

    //2차 js 수정 시작 --- Resize 설정 부분!!!
    window.addEventListener('resize', function () {
        // console.log('Resized');
        if (window.innerWidth > 1024) {
            //off toggle element ===> 이때 토글을 끄라는 말임!
            offElements(); //끄라는 표현
        } 
    });

    //토글 켜는 부분 - 이때는 toggle
    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }

    //토글 끄는 부분 - 이때는 remove
    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }

})(window, document);





// //즉시실행 함수 작성
// (function (window, document) {
//   'use strict';

//   //작성 시작
//   const $toggles = document.querySelectorAll('.toggle');

//   const $toggleBtn = document.getElementById('toggle-btn');
//   //이미 찾는 메소드의 id가 들어있으므로 #버튼 사용하지 않기!!

//   //toggle버튼을 클릭시 이벤트 감지!
//   $toggleBtn.addEventListener('click', function (){
//     toggleElements();
//   }); 

//   function toggleElements() {
//     [].forEach.call($toggles, function () {
//       toggle.classList.toggle('on');
//     });
//   }

// }) (window, document)