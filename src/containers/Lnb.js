import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Lnb extends React.Component {

    render(){
        return (
            <div id="lnb">
                <ul className="nav">
                    <li><NavLink activeClassName="active" exact to={"/hr/companyInfo"}>사람인HR</NavLink>
                        <div className="box_depth2">
                            <ul>
                                <li><NavLink activeClassName="active" to={"/hr/companyInfo"}>회사소개</NavLink>
                                    <div className="box_depth3">
                                        <ul>
                                            <li><NavLink activeClassName="active" to={"/hr/companyInfo"}>회사개요</NavLink></li>
                                            <li><NavLink activeClassName="active" to={"/hr/companyHistory"}>회사연혁</NavLink></li>
                                            <li><NavLink activeClassName="active" exact to={"/hr/visionMission"}>기업비전 &amp; 미션</NavLink></li>
                                            <li><NavLink activeClassName="active" exact to={"/hr/ci"}>CI소개</NavLink></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><NavLink activeClassName="active" exact to={"/hr/ceo"}>CEO인사말</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/hr/aramin"}>사회공헌</NavLink>
                                    <div className="box_depth3">
                                        <ul>
                                            <li><NavLink activeClassName="active" exact to={"/hr/aramin"}>아람인</NavLink></li>
                                            <li><NavLink activeClassName="active" exact to={"/hr/csr"}>사회공헌활동</NavLink></li>
                                            <li><NavLink activeClassName="active" exact to={"/hr/nanum"}>나눔이야기</NavLink></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><NavLink activeClassName="active" exact to={"/hr/family"}>계열사</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/hr/contact"}>Contact</NavLink>
                                    <div className="box_depth3">
                                        <ul>
                                            <li><NavLink activeClassName="active" exact to={"/hr/contact"}>연락처</NavLink></li>
                                            <li><NavLink activeClassName="active" exact to={"/hr/location"}>오시는길</NavLink></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li><NavLink activeClassName="active" exact to={"/service/jobportal"}>서비스</NavLink>
                        <div className="box_depth2">
                            <ul>
                                <li><NavLink activeClassName="active" exact to={"/service/jobportal"}>취업포털사업</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li><NavLink activeClassName="active" exact to={"/ir/shareholderComposition"}>IR</NavLink>
                        <div className="box_depth2">
                            <ul>
                                <li><NavLink activeClassName="active" exact to={"/ir/shareholderComposition"}>기업지배구조</NavLink>
                                    <div className="box_depth3">
                                        <ul>
                                            <li><NavLink activeClassName="active" exact to={"/ir/shareholderComposition"}>주주구성</NavLink></li>
                                            <li><NavLink activeClassName="active" exact to={"/ir/directorate"}>이사회 &amp; 운영규정</NavLink></li>
                                            <li><NavLink activeClassName="active" exact to={"/ir/articlesAssociation"}>정관</NavLink></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><NavLink activeClassName="active" exact to={"/ir/financialStatements"}>공시정보</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/ir/stockInformation"}>주가정보</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/ir/financialStatements2"}>재무제표</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/ir/earningsRelease"}>공고사항</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/ir/disclosureManage"}>내부정보관리규정</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li><NavLink activeClassName="active" exact to={"/pr/saraminNews"}>홍보센터</NavLink>
                        <div className="box_depth2">
                            <ul>
                                <li><NavLink activeClassName="active" exact to={"/pr/saraminNews"}>사람인 NEWS</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/pr/pressRelease"}>보도자료</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/pr/saraminAwards"}>수상내역</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/pr/webzine"}>웹진</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/pr/ad"}>광고</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li><NavLink activeClassName="active" exact to={"/recruit/talent"}>채용</NavLink>
                        <div className="box_depth2">
                            <ul>
                                <li><NavLink activeClassName="active" exact to={"/recruit/talent"}>인재상</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/recruit/education"}>교육제도</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/recruit/welfare"}>복리후생</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/recruit/process"}>채용절차</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/recruit/saraminStory"}>사람인이야기</NavLink></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className="lnb_banner">
                    <p>배너여역</p>
                </div>
            </div>
        );
    }
}

export default Lnb;