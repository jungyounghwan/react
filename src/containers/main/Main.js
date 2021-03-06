import React from 'react';

class Main extends React.Component {
    state = {count: 1};

    currentDiv = (e) => {
        const index = e.target.dataset.count;
        this.slideShow(index);
    };

    slideShow = (n) => {
        if(n !== undefined){
            this.state.count = n;
        }
        const target = document.querySelectorAll(".slide");
        const textTarget = document.querySelectorAll(".slide_name");
        const dots = document.querySelectorAll(".dot_slide li button");

        for(let i = 0; i < target.length; i++) {
            target[i].style.display = "none";
            textTarget[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("on", "");
        }
        this.state.count++;
        if(this.state.count > target.length) {
            this.state.count = 1;
        }
        target[this.state.count-1].style.display = "block";
        textTarget[this.state.count-1].style.display = "block";
        dots[this.state.count-1].className += "on";
    };

    mainTab = (e) => {
        const targetEl = e.target.dataset;
        const btnEl = document.querySelectorAll('.tab_title button')
        const closeTarget = document.querySelectorAll('.tab_cont');
        const openTarget = document.getElementById(targetEl.tabCont);

        for (let i = 0; i < closeTarget.length; i++){
            closeTarget[i].style.display = 'none';
            btnEl[i].classList.remove('on');
        }
        openTarget.style.display = 'block';
        e.target.classList.add('on');
    }

    componentDidMount () {
        this.interval = setInterval(() => {
            this.slideShow();
        }, 5000);
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    render() {
        console.log(this.props.mainData);

        const mainContent = this.props.mainData.contents;

        return (
            <div id="container" className="main">
                <div className="area_slide">
                    <ul className="slide_list">
                        <li className="slide bg_slide01">
                            <span className="slide_name" style={{display:'block'}}>{mainContent.slide_title_001}</span>
                            <dl>
                                <dt>
                                    <span>01</span>
                                    <strong>Dream</strong>
                                </dt>
                                <dd>
                                    <p className="kor_text">{mainContent.slide_content_001}</p>
                                    <p className="eng_text">We will be with you until your dream twinkles like a star.</p>
                                </dd>
                            </dl>
                        </li>
                        <li className="slide bg_slide02">
                            <span className="slide_name">{mainContent.slide_title_002}</span>
                            <dl>
                                <dt>
                                    <span>02</span>
                                    <strong>Challenge</strong>
                                </dt>
                                <dd>
                                    <p className="kor_text">{mainContent.slide_content_002}</p>
                                    <p className="eng_text">Youth means relentless challenge.</p>
                                </dd>
                            </dl>
                        </li>
                        <li className="slide bg_slide03">
                            <span className="slide_name">{mainContent.slide_title_003}</span>
                            <dl>
                                <dt>
                                    <span>03</span>
                                    <strong>Smile</strong>
                                </dt>
                                <dd>
                                    <p className="kor_text">{mainContent.slide_content_003}</p>
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
                                <strong>{mainContent.box_title_001}</strong>
                                <p>{mainContent.box_content_001}</p>
                                <span>GO</span>
                            </a>
                        </li>
                        <li className="bg_link02">
                            <a href="#">
                                <strong>{mainContent.box_title_002}</strong>
                                <p>{mainContent.box_content_002}</p>
                                <span>GO</span>
                            </a>
                        </li>
                        <li className="bg_link03">
                            <a href="#">
                                <strong>{mainContent.box_title_003}</strong>
                                <p>{mainContent.box_content_003}</p>
                                <span>GO</span>
                            </a>
                        </li>
                    </ul>
                    <div className="box_board">
                        <div className="tab_title">
                            <button type="button" data-tab-cont="press_release" onClick={this.mainTab} className="on">보도기사</button>
                            <button type="button" data-tab-cont="saramin_news" onClick={this.mainTab}>사람인 News</button>
                            <button type="button" data-tab-cont="saramin_awards" onClick={this.mainTab}>수상내역</button>
                        </div>
                        <div className="tab_cont" id="press_release">
                            <ul>
                                <li><a href="#">사람인 2년 연속 정보보호 안전을 위해 더욱 노력하정보보호 안전을 위해 더욱 노력하정보보호 안전을 위해 더욱 노력하정보보호 안전을 위해 더욱 노력하다</a> <span className="board_date">2011.08.31</span> </li>
                                <li><a href="#">사람인 2년 연속 정보보호 안전을 위해 더욱 노력하다1</a> <span className="board_date">2011.08.31</span></li>
                                <li><a href="#">사람인 2년 연속 정보보호 안전을 위해 더욱 노력하다</a> <span className="board_date">2011.08.31</span></li>
                                <li><a href="#">사람인 2년 연속 정보보호 안전을 위해 더욱 노력하다</a> <span className="board_date">2011.08.31</span></li>
                            </ul>
                            <a href="#" className="allView">&lt; 전체보기</a>
                        </div>
                        <div className="tab_cont" id="saramin_news">
                            <ul>
                                <li><a href="#">사람인 2년 연속 정보보호 안전을 위해 더욱 노력하정보보호 안전을 위해 더욱 노력하정보보호 안전을 위해 더욱 노력하정보보호 안전을 위해 더욱 노력하다</a> <span className="board_date">2011.08.31</span> </li>
                                <li><a href="#">사람인 2년 연속 정보보호 안전을 위해 더욱 노력하다2</a> <span className="board_date">2011.08.31</span></li>
                                <li><a href="#">사람인 2년 연속 정보보호 안전을 위해 더욱 노력하다</a> <span className="board_date">2011.08.31</span></li>
                                <li><a href="#">사람인 2년 연속 정보보호 안전을 위해 더욱 노력하다</a> <span className="board_date">2011.08.31</span></li>
                            </ul>
                            <a href="#" className="allView">&lt; 전체보기</a>
                        </div>
                        <div className="tab_cont" id="saramin_awards">
                            <ul>
                                <li><a href="#">사람인 2년 연속 정보보호 안전을 위해 더욱 노력하정보보호 안전을 위해 더욱 노력하정보보호 안전을 위해 더욱 노력하정보보호 안전을 위해 더욱 노력하다</a> <span className="board_date">2011.08.31</span> </li>
                                <li><a href="#">사람인 2년 연속 정보보호 안전을 위해 더욱 노력하다3</a> <span className="board_date">2011.08.31</span></li>
                                <li><a href="#">사람인 2년 연속 정보보호 안전을 위해 더욱 노력하다</a> <span className="board_date">2011.08.31</span></li>
                                <li><a href="#">사람인 2년 연속 정보보호 안전을 위해 더욱 노력하다</a> <span className="board_date">2011.08.31</span></li>
                            </ul>
                            <a href="#" className="allView">&lt; 전체보기</a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Main;