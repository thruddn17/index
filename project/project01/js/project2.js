'use strict';
//(1번) -  openNav(); 부분에 대한 스크립트 작성

function openNav() {
    document.getElementById("open").style.display = "none";
    //open이라는 id를 가진 요소를 찾아서 가져온 후 
    //그것에 대한 style에 display none이라고 작성하라는 말임!!!

    document.getElementById("nav").style.width = "100%";
    //html중에서 nav라는 id를 가진 요소를 찾아서 데려온 후 
    //그것에 대한 style에 width값을 100%로 설정하라는 말임!
}



//(2)번 - closeNav(); 부분에 대한 스크립트 작성
function closeNav() {
    document.getElementById("nav").style.width = "0%";   
    //html 내에서 closeNav라는 function을 onclick을 하게 되면
    //nav라는 id를 가진 요소를 찾아서 width값을 0%로만들라는 말임
    //즉 x버튼을 클릭하면 width값이 0%가 되면서 사라지는 효과!!
    //여기까지만 작성하면 원래있었던 햄버거 메뉴가 사라짐
    //이버튼을 다시나오게 하는 코드를 작성해 주어야 함!

    document.getElementById("open").style.display = "block";
    //다시 햄버거 버튼이 나타나도록 섫정 누르면 나오도록 효과 지정한것임!!!
}



