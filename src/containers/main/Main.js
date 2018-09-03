import React from 'react';

const Main = () => {
        var index = 0;   //이미지에 접근하는 인덱스
        window.onload = function(){
            slideShow();
        }

        function slideShow() {
            var i;
            var target = document.getElementsByClassName("slide");  //slide1에 대한 dom 참조
            for(i = 0; i < target.length; i++) {
                target[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
            }
            index++;
            if(index > target.length) {
                index = 1;  //인덱스가 초과되면 1로 변경
            }
            target[index - 1].style.display = "block";  //해당 인덱스는 block으로
            setTimeout(slideShow, 4000);   //함수를 4초마다 호출
        }

        return (
        <div id="container" class="main">
            <div class="box_slide">
                <ul class="img_slide">
                    <li class="slide"><img src="" alt="이미지1" /></li>
                    <li class="slide"><img src="" alt="이미지1" /></li>
                    <li class="slide"><img src="" alt="이미지1" /></li>
                </ul>
            </div>
            <h2>공지</h2>
        </div>
    )
}

export default Main;