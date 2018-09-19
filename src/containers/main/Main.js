import React from 'react';

class Main extends React.Component {
    state = {count: 1};

    currentDiv = function (e) {
        const index = e.target.dataset.count;
        this.slideShow(index);
    };

    slideShow = function (n) {
        if(n !== undefined){
            this.state.count = n;
        }
        const target = document.querySelectorAll(".slide");  //slide1에 대한 dom 참조
        const dots = document.querySelectorAll(".dot_slide li");
        for(let i = 0; i < target.length; i++) {
            target[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" on", "");
        }
        this.state.count++;
        if(this.state.count > target.length) {
            this.state.count = 1;  //인덱스가 초과되면 1로 변경
        }
        target[this.state.count-1].style.display = "block";  //해당 인덱스는 block으로
        dots[this.state.count-1].className += " on";
    };

    componentDidMount () {
        this.interval = setInterval(() => {
            this.slideShow();
        }, 4000);
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    render() {
        return (
        <div id="container" className="main">
            <div className="box_slide">
                <ul className="slide_list">
                    <li className="slide bg_slide01">
                    </li>
                    <li className="slide bg_slide02">
                    </li>
                    <li className="slide bg_slide03">
                    </li>
                </ul>
                <ul className="dot_slide">
                    <li><button className="on" data-count="0" onClick={this.currentDiv}>1</button></li>
                    <li><button className="" data-count="1" onClick={this.currentDiv}>2</button></li>
                    <li><button className="" data-count="2" onClick={this.currentDiv}>3</button></li>
                </ul>
            </div>
            <h2>공지</h2>
        </div>
        );
    }
}

export default Main;