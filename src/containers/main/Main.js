import React from 'react';

class Main extends React.Component {
    state = {count: 1};

    currentDiv = (e) => {
        const index = e.target.dataset.count;
        //console.log(e);
        this.slideShow(index);
    };

    slideShow = (n) => {
        if(n !== undefined){
            this.state.count = n;
        }
        const target = document.querySelectorAll(".slide");  //slide1에 대한 dom 참조
        const textTarget = document.querySelectorAll(".slide_name");
        const dots = document.querySelectorAll(".dot_slide li button");
        for(let i = 0; i < target.length; i++) {
            target[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
            textTarget[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("on", "");
        }
        this.state.count++;
        if(this.state.count > target.length) {
            this.state.count = 1;  //인덱스가 초과되면 1로 변경
        }
        target[this.state.count-1].style.display = "block";  //해당 인덱스는 block으로
        textTarget[this.state.count-1].style.display = "block";
        dots[this.state.count-1].className += "on";
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
                            <span className="slide_name" style={{display:'block'}}>꿈</span>
                            <dl>
                                <dt>
                                    <span>01</span>
                                    <strong>Dream</strong>
                                </dt>
                                <dd>
                                    <p className="kor_text">당신의 꿈이 별처럼 빛날 때까지 함께하겠습니다.</p>
                                    <p className="eng_text">We will be with tou until wour dream twinkles like a star.</p>
                                </dd>
                            </dl>
                        </li>
                        <li className="slide bg_slide02">
                            <span className={"slide_name"}>도전</span>
                            <dl>
                                <dt>
                                    <span>02</span>
                                    <strong>Challenge</strong>
                                </dt>
                                <dd>
                                    <p className="kor_text">젊음은 끝까지 도전하는 것입니다.</p>
                                    <p className="eng_text">Youth means relentless challenge.</p>
                                </dd>
                            </dl>
                        </li>
                        <li className="slide bg_slide03">
                            <span className={"slide_name"}>웃음</span>
                            <dl>
                                <dt>
                                    <span>03</span>
                                    <strong>Smile</strong>
                                </dt>
                                <dd>
                                    <p className="kor_text">당신에게 행복한 미소를 전하겠습니다.</p>
                                    <p className="eng_text">We will give you a happy smile.</p>
                                </dd>
                            </dl>
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