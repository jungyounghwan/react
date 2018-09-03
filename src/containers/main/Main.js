import React from 'react';

const Main = () => {
        var index = 0;   //이미지에 접근하는 인덱스
        window.onload = function(){
            slideShow();
        }

        function currentDiv(n) {
            console.log(n);
            slideShow(n);
        }

        function slideShow(n) {
            var target = document.getElementsByClassName("slide");  //slide1에 대한 dom 참조
            var dots = document.getElementsByClassName("demo");
            if (n > target.length) {index = 1}
            if (n < 1) {index = target.length}
            for(var i = 0; i < target.length; i++) {
                target[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
            }
            for (var i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" on", "");
            }
            index++;
            if(index > target.length) {
                index = 1;  //인덱스가 초과되면 1로 변경
            }
            target[index - 1].style.display = "block";  //해당 인덱스는 block으로
            dots[index - 1].className += " on";
            setTimeout(slideShow, 3000);   //함수를 4초마다 호출
        }

        return (
        <div id="container" className="main">
            <div className="box_slide">
                <ul className="img_slide">
                    <li className="slide"><img src="/src/resources/images/main/img_test01.jpg" alt="이미지1" /></li>
                    <li className="slide"><img src="/src/resources/images/main/img_test02.jpg" alt="이미지2" /></li>
                    <li className="slide"><img src="/src/resources/images/main/img_test03.jpg" alt="이미지3" /></li>
                </ul>
                <ul className="dot_slide">
                    <li><button className="demo" onclick="currentDiv(1)">1</button></li>
                    <li><button className="demo" onclick="currentDiv(2)">2</button></li>
                    <li><button className="demo" onclick="currentDiv(3)">3</button></li>
                </ul>
            </div>
            <h2>공지</h2>
        </div>
    )
}

export default Main;