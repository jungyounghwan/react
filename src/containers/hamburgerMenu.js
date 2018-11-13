import React from 'react';

class HamburgerMenu extends React.Component {
    state = {toggle: false}

    handleClick = () => {
        const winH = window.innerHeight || parent.innerHeight,
               docH = document.documentElement.scrollHeight,
               targetRoot = document.querySelectorAll('#root'),
               targetHamburger = document.querySelectorAll('.hamburger_menu'),
               targetMenu = document.querySelectorAll('.menu_inner');
        this.setState({toggle: !this.state.toggle});
        console.log(this.state);
        console.log(winH);
        console.log(docH);
        if (!this.state.toggle) {
            targetRoot[0].style.height = winH + 'px';
            targetRoot[0].style.overflow = 'hidden';
            targetHamburger[0].style.height = winH + 'px';
            targetHamburger[0].style.width = '100%';
            targetMenu[0].style.height = (winH - 66) + 'px';
        }else {
            targetRoot[0].style.height = 'inherit';
            targetRoot[0].style.overflow = 'inherit';
            targetHamburger[0].style.height = 'inherit';
            targetHamburger[0].style.width = 'inherit';
        }
    }
    render(){

        return (
            <div className="hamburger_menu">
                <input className="menu_btn" type="checkbox" id="menu_btn" onClick={this.handleClick.bind(this)} />
                <label className="menu_icon" htmlFor="menu_btn"><span className="navicon"></span></label>
                <div className="wrap_menu">
                    <div className="menu_inner">
                        <div className="menu01">
                            <h4><a href="/hr/companyInfo">사람인HR</a></h4>
                            <ul>
                                <li><a href="/hr/companyInfo">회사소개</a>
                                    <ul>
                                        <li><a href="/hr/companyInfo">회사개요</a></li>
                                        <li><a href="/hr/companyHistory">회사연혁</a></li>
                                        <li><a href="/hr/visionMission">기업비젼&amp;미션</a></li>
                                        <li><a href="/hr/ci">CI소개</a></li>
                                    </ul>
                                </li>
                                <li><a href="/hr/ceo">CEO소개</a></li>
                                <li><a href="/hr/aramin">사회공헌</a>
                                    <ul>
                                        <li><a href="/hr/aramin">아람인</a></li>
                                        <li><a href="/hr/csr">사회공헌활동</a></li>
                                        <li><a href="/hr/nanum">나눔이야기</a></li>
                                    </ul>
                                </li>
                                <li><a href="/hr/family">계열사</a></li>
                                <li><a href="/hr/contact">Contact</a>
                                    <ul>
                                        <li><a href="/hr/contact">연락처</a></li>
                                        <li><a href="/hr/location">오시는길</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/*서비스*/}
                        <div className="menu02">
                            <h4><a href="/service/jobportal">서비스</a></h4>
                            <ul>
                                <li><a href="/service/jobportal">취업포탈사업</a></li>
                            </ul>
                        </div>
                        {/*IR*/}
                        <div className="menu03">
                            <h4><a href="/ir/shareholderComposition">IR</a></h4>
                            <ul>
                                <li><a href="/ir/shareholderComposition">기업지배구조</a>
                                    <ul>
                                        <li><a href="/ir/shareholderComposition">주주구성</a></li>
                                        <li><a href="/ir/directorate">이사회&amp;운영규정</a></li>
                                        <li><a href="/ir/articlesAssociation">정관</a></li>
                                    </ul>
                                </li>
                                <li><a href="/ir/financialStatements">공시정보</a></li>
                                <li><a href="/ir/stockInformation">주가정보</a></li>
                                <li><a href="/ir/financialStatements2">재무재표</a></li>
                                <li><a href="/ir/earningsRelease">공고사항</a></li>
                                <li><a href="/ir/disclosureManage">내부정보관리규정</a></li>
                            </ul>
                        </div>
                        {/*홍보센터*/}
                        <div className="menu04">
                            <h4><a href="/pr/saraminNews">홍보센터</a></h4>
                            <ul>
                                <li><a href="/pr/saraminNews">사람인 News</a></li>
                                <li><a href="/pr/pressRelease">보도자료</a></li>
                                <li><a href="/pr/saraminAwards">수상내역</a></li>
                                <li><a href="/pr/webzine">웹진</a></li>
                                <li><a href="/pr/ad">광고</a></li>
                            </ul>
                        </div>
                        {/*채용*/}
                        <div className="menu05">
                            <h4><a href="/recruit/talent">채용</a></h4>
                            <ul>
                                <li><a href="/recruit/talent">인재상</a></li>
                                <li><a href="/recruit/education">인사교육제도</a></li>
                                <li><a href="/recruit/welfare">복리후생</a></li>
                                <li><a href="/recruit/process">채용절차</a></li>
                                <li><a href="/recruit/saraminStory">사람인 이야기</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default HamburgerMenu;