import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.currentDiv = this.currentDiv.bind(this);
        this.slideShow = this.slideShow.bind(this);
        this.state = {count: 1};
    };

    currentDiv(e) {
        var index = e.target.dataset.count;
        this.slideShow(index);
    }

    slideShow(n) {
        if(n !== undefined){
            this.state.count = n;
        }
        var target = document.getElementsByClassName("slide");  //slide1에 대한 dom 참조
        var dots = document.getElementsByClassName("demo");
        for(var i = 0; i < target.length; i++) {
            target[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
        }
        for (var i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" on", "");
        }
        this.state.count++;
        if(this.state.count > target.length) {
            this.state.count = 1;  //인덱스가 초과되면 1로 변경
        }
        target[this.state.count-1].style.display = "block";  //해당 인덱스는 block으로
        dots[this.state.count-1].className += " on";
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.slideShow();
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
        <div id="container" className="main">
            <div className="box_slide">
                <ul className="img_slide">
                    <li className="slide"><img src="/src/resources/images/main/img_test01.jpg" alt="이미지1" /></li>
                    <li className="slide"><img src="/src/resources/images/main/img_test02.jpg" alt="이미지2" /></li>
                    <li className="slide"><img src="/src/resources/images/main/img_test03.jpg" alt="이미지3" /></li>
                </ul>
                <ul className="dot_slide">
                    <li><button className="demo on" data-count="0" onClick={this.currentDiv}>1</button></li>
                    <li><button className="demo" data-count="1" onClick={this.currentDiv}>2</button></li>
                    <li><button className="demo" data-count="2" onClick={this.currentDiv}>3</button></li>
                </ul>
            </div>
            <h2>공지</h2>
        </div>
        );
    }
}

export default Main;