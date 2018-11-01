import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component {

    render(){

        const pathname = location.pathname.split('/');
        const mainPath = location.pathname;

        return (
            <header id="header" className={mainPath == '/' ? 'main' : pathname[1]}>
                <h1 className="bi"><NavLink activeClassName="active" exact to={"/"}><img src={"/src/resources/images/common/header_logo"+(mainPath==='/'?'_main':'')+".png"} alt="saramin" /></NavLink></h1>
                <ul className="nav">
                    <li><NavLink activeClassName="active" exact to={"/hr/companyInfo"}>사람인HR</NavLink>
                        <div className="box_depth2">
                            <ul>
                                <li><NavLink activeClassName="active" exact to={"/hr/companyInfo"}>회사소개</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/hr/ceo"}>CEO인사말</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/hr/socialContribution"}>사회공헌</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/hr/family"}>계열사</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/hr/contact"}>Contact</NavLink></li>
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
                                <li><NavLink activeClassName="active" exact to={"/ir/shareholderComposition"}>기업지배구조</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/ir/financialStatements"}>공시정보</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/ir/stockInformation"}>주가정보</NavLink></li>
                                <li><NavLink activeClassName="active" exact to={"/ir/financialStatements"}>재무제표</NavLink></li>
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
                                <li><NavLink activeClassName="active" exact to={"/pr/pressAd"}>광고</NavLink></li>
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
                <div>
                    <ul className="util_option">
                        <li><NavLink activeClassName="active" exact to={"/etc/sitemap"}>SITEMAP</NavLink></li>
                        <li><NavLink className="bg_round" activeClassName="active" exact to={"/en/"}>ENGLISH</NavLink></li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;