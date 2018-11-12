import React from 'react';

class Sitemap extends React.Component {

    render(){
        return (
            <div className="sitemap">
                <div className="sitemap_wrap">
                    {/*�����HR*/}
                    <div className="menu01">
                        <h4><a href="/hr/companyInfo"><img src="/imgs/etc/menu01.gif" alt="�����HR"/></a></h4>
                        <ul>
                            <li><a href="/hr/companyInfo"><img src="/imgs/etc/menu01_01.gif" alt="ȸ��Ұ�"/></a>
                                <ul>
                                    <li><a href="/hr/companyInfo"><img src="/imgs/etc/menu01_01_1.gif" alt="ȸ�簳��"/></a></li>
                                    <li><a href="/hr/companyHistory"><img src="/imgs/etc/menu01_01_2.gif" alt="ȸ�翬��"/></a></li>
                                    <li><a href="/hr/visionMission"><img src="/imgs/etc/menu01_01_3.gif" alt="�������&amp;�̼�"/></a></li>
                                    <li><a href="/hr/ci"><img src="/imgs/etc/menu01_01_4.gif" alt="CI�Ұ�"/></a></li>
                                </ul>
                            </li>
                            <li><a href="/hr/ceo"><img src="/imgs/etc/menu01_02.gif" alt="CEO�Ұ�"/></a></li>
                            <li><a href="/hr/aramin"><img src="/imgs/etc/menu01_03.gif" alt="��ȸ����"/></a>
                                <ul>
                                    <li><a href="/hr/aramin"><img src="/imgs/etc/menu01_03_1.gif" alt="�ƶ���"/></a></li>
                                    <li><a href="/hr/csr"><img src="/imgs/etc/menu01_03_2.gif" alt="��ȸ����Ȱ��"/></a></li>
                                    <li><a href="/hr/nanum"><img src="/imgs/etc/menu01_03_3.gif" alt="�����̾߱�"/></a></li>
                                </ul>
                            </li>
                            <li><a href="/hr/family"><img src="/imgs/etc/menu01_04.gif" alt="�迭��"/></a></li>
                            <li><a href="/hr/contact"><img src="/imgs/etc/menu01_05.gif"alt="Contact"/></a>
                                <ul>
                                    <li><a href="/hr/contact"><img src="/imgs/etc/menu01_05_1.gif" alt="����ó"/></a></li>
                                    <li><a href="/hr/location"><img src="/imgs/etc/menu01_05_2.gif" alt="���ô±�"/></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/*����*/}
                    <div className="menu02">
                        <h4><a href="/service/jobportal"><img src="/imgs/etc/menu02.gif" alt="����"/></a></h4>
                        <ul>
                            <li><a href="/service/jobportal"><img src="/imgs/etc/menu02_01.gif" alt="�����Ż���"/></a></li>
                        </ul>
                    </div>
                    {/*IR*/}
                    <div className="menu03">
                        <h4><a href="/ir/shareholderComposition"><img src="/imgs/etc/menu03.gif" alt="IR"/></a></h4>
                        <ul>
                            <li><a href="/ir/shareholderComposition"><img src="/imgs/etc/menu03_01.gif" alt="������豸��"/></a>
                                <ul>
                                    <li><a href="/ir/shareholderComposition"><img src="/imgs/etc/menu03_01_1.gif" alt="���ֱ���"/></a></li>
                                    <li><a href="/ir/directorate"><img src="/imgs/etc/menu03_01_2.gif" alt="�̻�ȸ &amp; �����"/></a></li>
                                    <li><a href="/ir/articlesAssociation"><img src="/imgs/etc/menu03_01_3.gif" alt="����"/></a></li>
                                </ul>
                            </li>
                            <li><a href="/ir/financialStatements"><img src="/imgs/etc/menu03_02.gif" alt="��������"/></a></li>
                            <li><a href="/ir/stockInformation"><img src="/imgs/etc/menu03_03.gif" alt="�ְ�����"/></a></li>
                            <li><a href="/ir/financialStatements2"><img src="/imgs/etc/menu03_04.gif" alt="�繫��ǥ"/></a></li>
                            <li><a href="/ir/earningsRelease"><img src="/imgs/etc/menu03_03_2.png" alt="�������"/></a></li>
                            <li><a href="/ir/disclosureManage"><img src="/imgs/etc/menu03_05_1.png" alt="����������������"/></a></li>
                        </ul>
                    </div>
                    {/*ȫ������*/}
                    <div className="menu04">
                        <h4><a href="/pr/saraminNews"><img src="/imgs/etc/menu04.gif" alt="ȫ������"/></a></h4>
                        <ul>
                            <li><a href="/pr/saraminNews"><img src="/imgs/etc/menu04_01.gif" alt="����� News"/></a></li>
                            <li><a href="/pr/pressRelease"><img src="/imgs/etc/menu04_02.gif" alt="�����ڷ�"/></a></li>
                            <li><a href="/pr/saraminAwards"><img src="/imgs/etc/menu04_03.gif" alt="���󳻿�"/></a></li>
                            <li><a href="/pr/webzine"><img src="/imgs/etc/menu04_04.gif" alt="����"/></a></li>
                            <li><a href="/pr/ad"><img src="/imgs/etc/menu04_05.gif" alt="����"/></a></li>
                        </ul>
                    </div>
                    {/*ä��*/}
                    <div className="menu05">
                        <h4><a href="/recruit/talent"><img src="/imgs/etc/menu05.gif" alt="ä��"/></a></h4>
                        <ul>
                            <li><a href="/recruit/talent"><img src="/imgs/etc/menu05_01.gif" alt="�����"/></a></li>
                            <li><a href="/recruit/education"><img src="/imgs/etc/menu05_02.gif" alt="�λ米������"/></a></li>
                            <li><a href="/recruit/welfare"><img src="/imgs/etc/menu05_03.gif" alt="�����Ļ�"/></a></li>
                            <li><a href="/recruit/process"><img src="/imgs/etc/menu05_04.gif" alt="ä������"/></a></li>
                            <li><a href="/recruit/saraminStory"><img src="/imgs/etc/menu05_06.gif" alt="����� �̾߱�"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sitemap;