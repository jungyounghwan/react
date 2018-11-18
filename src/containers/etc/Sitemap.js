import React from 'react';

class Sitemap extends React.Component {

    render(){
        return (
            <div className="sitemap">
                <div className="sitemap_wrap">
                    {/*사람인HR*/}
                    <div className="menu01">
                        <h4><a href="/hr/companyInfo"><img src="/imgs/etc/menu01.gif" alt="사람인HR"/></a></h4>
                        <ul>
                            <li><a href="/hr/companyInfo"><img src="/imgs/etc/menu01_01.gif" alt="회사소개"/></a>
                                <ul>
                                    <li><a href="/hr/companyInfo"><img src="/imgs/etc/menu01_01_1.gif" alt="회사개요"/></a></li>
                                    <li><a href="/hr/companyHistory"><img src="/imgs/etc/menu01_01_2.gif" alt="회사연혁"/></a></li>
                                    <li><a href="/hr/visionMission"><img src="/imgs/etc/menu01_01_3.gif" alt="기업비젼&amp;미션"/></a></li>
                                    <li><a href="/hr/ci"><img src="/imgs/etc/menu01_01_4.gif" alt="CI소개"/></a></li>
                                </ul>
                            </li>
                            <li><a href="/hr/ceo"><img src="/imgs/etc/menu01_02.gif" alt="CEO소개"/></a></li>
                            <li><a href="/hr/aramin"><img src="/imgs/etc/menu01_03.gif" alt="사회공헌"/></a>
                                <ul>
                                    <li><a href="/hr/aramin"><img src="/imgs/etc/menu01_03_1.gif" alt="아람인"/></a></li>
                                    <li><a href="/hr/csr"><img src="/imgs/etc/menu01_03_2.gif" alt="사회공헌활동"/></a></li>
                                    <li><a href="/hr/nanum"><img src="/imgs/etc/menu01_03_3.gif" alt="나눔이야기"/></a></li>
                                </ul>
                            </li>
                            <li><a href="/hr/family"><img src="/imgs/etc/menu01_04.gif" alt="계열사"/></a></li>
                            <li><a href="/hr/contact"><img src="/imgs/etc/menu01_05.gif"alt="Contact"/></a>
                                <ul>
                                    <li><a href="/hr/contact"><img src="/imgs/etc/menu01_05_1.gif" alt="연락처"/></a></li>
                                    <li><a href="/hr/location"><img src="/imgs/etc/menu01_05_2.gif" alt="오시는길"/></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/*서비스*/}
                    <div className="menu02">
                        <h4><a href="/service/jobportal"><img src="/imgs/etc/menu02.gif" alt="서비스"/></a></h4>
                        <ul>
                            <li><a href="/service/jobportal"><img src="/imgs/etc/menu02_01.gif" alt="취업포탈사업"/></a></li>
                        </ul>
                    </div>
                    {/*IR*/}
                    <div className="menu03">
                        <h4><a href="/ir/shareholderComposition"><img src="/imgs/etc/menu03.gif" alt="IR"/></a></h4>
                        <ul>
                            <li><a href="/ir/shareholderComposition"><img src="/imgs/etc/menu03_01.gif" alt="기업지배구조"/></a>
                                <ul>
                                    <li><a href="/ir/shareholderComposition"><img src="/imgs/etc/menu03_01_1.gif" alt="주주구성"/></a></li>
                                    <li><a href="/ir/directorate"><img src="/imgs/etc/menu03_01_2.gif" alt="이사회 &amp; 운영규정"/></a></li>
                                    <li><a href="/ir/articlesAssociation"><img src="/imgs/etc/menu03_01_3.gif" alt="정관"/></a></li>
                                </ul>
                            </li>
                            <li><a href="/ir/financialStatements"><img src="/imgs/etc/menu03_02.gif" alt="공시정보"/></a></li>
                            <li><a href="/ir/stockInformation"><img src="/imgs/etc/menu03_03.gif" alt="주가정보"/></a></li>
                            <li><a href="/ir/financialStatements2"><img src="/imgs/etc/menu03_04.gif" alt="재무재표"/></a></li>
                            <li><a href="/ir/earningsRelease"><img src="/imgs/etc/menu03_03_2.png" alt="공고사항"/></a></li>
                            <li><a href="/ir/disclosureManage"><img src="/imgs/etc/menu03_05_1.png" alt="내부정보관리규정"/></a></li>
                        </ul>
                    </div>
                    {/*홍보센터*/}
                    <div className="menu04">
                        <h4><a href="/pr/saraminNews"><img src="/imgs/etc/menu04.gif" alt="홍보센터"/></a></h4>
                        <ul>
                            <li><a href="/pr/saraminNews"><img src="/imgs/etc/menu04_01.gif" alt="사람인 News"/></a></li>
                            <li><a href="/pr/pressRelease"><img src="/imgs/etc/menu04_02.gif" alt="보도자료"/></a></li>
                            <li><a href="/pr/saraminAwards"><img src="/imgs/etc/menu04_03.gif" alt="수상내역"/></a></li>
                            <li><a href="/pr/webzine"><img src="/imgs/etc/menu04_04.gif" alt="웹진"/></a></li>
                            <li><a href="/pr/ad"><img src="/imgs/etc/menu04_05.gif" alt="광고"/></a></li>
                        </ul>
                    </div>
                    {/*채용*/}
                    <div className="menu05">
                        <h4><a href="/recruit/talent"><img src="/imgs/etc/menu05.gif" alt="채용"/></a></h4>
                        <ul>
                            <li><a href="/recruit/talent"><img src="/imgs/etc/menu05_01.gif" alt="인재상"/></a></li>
                            <li><a href="/recruit/education"><img src="/imgs/etc/menu05_02.gif" alt="인사교육제도"/></a></li>
                            <li><a href="/recruit/welfare"><img src="/imgs/etc/menu05_03.gif" alt="복리후생"/></a></li>
                            <li><a href="/recruit/process"><img src="/imgs/etc/menu05_04.gif" alt="채용절차"/></a></li>
                            <li><a href="/recruit/saraminStory"><img src="/imgs/etc/menu05_06.gif" alt="사람인 이야기"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sitemap;