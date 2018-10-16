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
        }, 5000);
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div id="container" className="main">
                <div className="area_slide">
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
                <div className="area_info">
                    <ul className="box_link">
                        <li className="bg_link01">
                            <a href="#">
                                <strong>사람인이야기</strong>
                                <p>사람인이 들려주는 다양하고<br />재미난 이야기를 만나실 수<br /> 있습니다.</p>
                                <span>GO</span>
                            </a>
                        </li>
                        <li className="bg_link02">
                            <a href="#">
                                <strong>나눔이야기</strong>
                                <p>사람인은 아람인 캠페인을<br />통해 이웃사랑을 실천해<br />나가고 있습니다.</p>
                                <span>GO</span>
                            </a>
                        </li>
                        <li className="bg_link03">
                            <a href="#">
                                <strong>인재채용</strong>
                                <p>사람을 중시하는 따뜻한<br />기업 사람인의 일원이<br />되세요.</p>
                                <span>GO</span>
                            </a>
                        </li>
                    </ul>
                    <div className="box_board">
                        <div className="tab_title">
                            <button type="button" className="on">보도기사</button>
                            <button type="button">사람인 News</button>
                            <button type="button">수상내역</button>
                        </div>
                        <ul className="tab_cont">
                            <li><a href="#">사람인 2년 연속 정보보호 안전을 위해 더욱 노력하정보보호 안전을 위해 더욱 노력하정보보호 안전을 위해 더욱 노력하정보보호 안전을 위해 더욱 노력하다</a> <span className="board_date">2011.08.31</span> </li>
                            <li><a href="#">사람인 2년 연속 정보보호 안전을 위해 더욱 노력하다</a> <span className="board_date">2011.08.31</span></li>
                            <li><a href="#">사람인 2년 연속 정보보호 안전을 위해 더욱 노력하다</a> <span className="board_date">2011.08.31</span></li>
                            <li><a href="#">사람인 2년 연속 정보보호 안전을 위해 더욱 노력하다</a> <span className="board_date">2011.08.31</span></li>
                        </ul>
                        <a href="#" className="allView">&lt; 전체보기</a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Main;