import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component {
    render(){
        return (
            <header id="header">
                <p className="ci"><NavLink activeClassName="active" exact to={"/"}>saramin</NavLink></p>
                <ul className="nav">
                    <li><NavLink activeClassName="active" to={"/hr/companyInfo"}>사람인HR</NavLink>
                        <ul>
                            <li><NavLink activeClassName="active" to={"/hr/companyInfo"}>회사소개</NavLink></li>
                            <li><NavLink activeClassName="active" to={"/hr/ceo"}>CEO인사말</NavLink></li>
                            <li><NavLink activeClassName="active" to={"/hr/socialContribution"}>사회공헌</NavLink></li>
                            <li><NavLink activeClassName="active" to={"/hr/family"}>계열사</NavLink></li>
                            <li><NavLink activeClassName="active" to={"/hr/contact"}>Contact</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink activeClassName="active" to={"/service/jobportal"}>서비스</NavLink>
                        <ul>
                            <li><NavLink activeClassName="active" to={"/service/jobportal"}>취업포털사업</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink activeClassName="active" to={"/ir/shareholderComposition"}>IR</NavLink>
                        <ul>
                            <li><NavLink activeClassName="active" to={"/ir/shareholderComposition"}>기업지배구조</NavLink></li>
                            <li><NavLink activeClassName="active" to={"/ir/financialStatements"}>공시정보</NavLink></li>
                            <li><NavLink activeClassName="active" to={"/ir/stockInformation"}>주가정보</NavLink></li>
                            <li><NavLink activeClassName="active" to={"/ir/financialStatements"}>재무제표</NavLink></li>
                            <li><NavLink activeClassName="active" to={"/ir/earningsRelease"}>공고사항</NavLink></li>
                            <li><NavLink activeClassName="active" to={"/ir/disclosureManage"}>내부정보관리규정</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink activeClassName="active" to={"/pr/saraminNews"}>홍보센터</NavLink>
                        <ul>
                            <li><NavLink activeClassName="active" to={"/pr/saraminNews"}>사람인 NEWS</NavLink></li>
                            <li><NavLink activeClassName="active" to={"/pr/pressRelease"}>보도자료</NavLink></li>
                            <li><NavLink activeClassName="active" to={"/pr/saraminAwards"}>수상내역</NavLink></li>
                            <li><NavLink activeClassName="active" to={"/pr/webzine"}>웹진</NavLink></li>
                            <li><NavLink activeClassName="active" to={"/pr/pressAd"}>광고</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink activeClassName="active" to={"/recruit/talent"}>채용</NavLink>
                        <ul>
                            <li><NavLink activeClassName="active" to={"/recruit/talent"}>인재상</NavLink></li>
                            <li><NavLink activeClassName="active" to={"/recruit/education"}>교육제도</NavLink></li>
                            <li><NavLink activeClassName="active" to={"/recruit/welfare"}>복리후생</NavLink></li>
                            <li><NavLink activeClassName="active" to={"/recruit/process"}>채용절차</NavLink></li>
                            <li><NavLink activeClassName="active" to={"/recruit/saraminStory"}>사람인이야기</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;