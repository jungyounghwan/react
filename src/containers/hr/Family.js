import React from 'react';
import SubLocation from '../../components/SubLocation';
import ContentsTitle from '../../components/ContentsTitle';

class Family extends React.Component {

    render(){
        return (
            <div>
                <SubLocation />
                <ContentsTitle contentTitle={this.props.menu.name} />

                <div className="family">
                    <h3 className="stit"><img src="/imgs/hr/family_stit01.gif" alt="Finance"/></h3>
                    <ul className="family_list">
                        <li><a href="https://www.kiwoom.com" target="_blank"><img src="/imgs/hr/family_finance_01.gif" alt="키움증권(주)"/><span>키움증권(주)</span></a></li>
                        <li><a href="http://www.kiwoominvest.com" target="_blank"><img src="/imgs/hr/family_finance_02.gif" alt="키움인베스트먼트(주)"/><span>키움인베스트먼트(주)</span></a></li>
                        <li><a href="http://www.kiwoomam.com" target="_blank"><img src="/imgs/hr/family_finance_03.gif" alt="키움투자자산운용(주)"/><span>키움투자자산운용(주)</span></a></li>
                        <li><a href="https://www.kiwoombank.com" target="_blank"><img src="/imgs/hr/family_finance_04.gif" alt="(주)키움저축은행"/><span>(주)키움저축은행</span></a></li>
                        <li><a href="http://kiwoomap.com/main/index.html" target="_blank"><img src="/imgs/hr/family_finance_05.gif" alt="키움에셋플래너(주)"/><span>키움에셋플래너(주)</span></a></li>
                        <li><a href="https://www.kiwoomyesbank.com/html/main.html" target="_blank"><img src="/imgs/hr/family_finance_06.gif" alt="(주)키움예스저축은행"/><span>(주)키움예스저축은행</span></a></li>
                        <li><a><img src="/imgs/hr/family_finance_07.gif" alt="키움프라이빗에쿼티(주)"/><span>키움프라이빗에쿼티(주)</span></a></li>
                    </ul>
                    <h3 className="stit"><img src="/imgs/hr/family_stit02_180514.gif" alt="Contents & Services"/></h3>
                    <ul>
                        <li><a href="http://www.saraminhr.co.kr"><img src="/imgs/hr/family_contents_01_20180817.gif" alt="(주)사람인HR"/><span>(주)사람인HR</span></a></li>
                        <li><a href="http://www.saraminhs.co.kr/" target="_blank"><img src="/imgs/hr/family_contents_02_201809.gif" alt="(주)사람인HS"/><span>(주)사람인HS</span></a></li>
                        <li><a href="http://www.x1.co.kr/main.x1" target="_blank"><img src="/imgs/hr/family_contents_03.gif" alt="(주)이머니"/><span>(주)이머니</span></a></li>
                        <li><a href="http://www.wisebirds.co/" target="_blank"><img src="/imgs/hr/family_contents_04.gif" alt="(주)와이즈버즈"/><span>(주)와이즈버즈</span></a></li>
                        <li><a href="http://www.kidaristudio.com/" target="_blank"><img src="/imgs/hr/family_contents_05.gif" alt="(주)키다리스튜디오"/><span>(주)키다리스튜디오</span></a></li>
                        <li><a href="http://www.kidarient.com/" target="_blank"><img src="/imgs/hr/family_contents_06.gif" alt="(주)키다리이엔티"/><span>(주)키다리이엔티</span></a></li>
                        <li><a href="http://www.imazins.com/" target="_blank"><img src="/imgs/hr/family_contents_07.gif" alt="(주)이매진스"/><span>(주)이매진스</span></a></li>
                        <li><a><img src="/imgs/hr/family_itsolution_05.gif" alt="(주)키움이앤에스"/><span>(주)키움이앤에스</span></a></li>
                    </ul>
                    <h3 className="stit"><img src="/imgs/hr/family_stit03_180514.gif" alt="IT"/></h3>
                    <ul>
                        <li><a href="http://www.daou.com/" target="_blank"><img src="/imgs/hr/family_itsolution_01.gif" alt="(주)다우기술"/><span>(주)다우기술</span></a></li>
                        <li><a href="http://www.daoudata.co.kr/" target="_blank"><img src="/imgs/hr/family_itsolution_02.gif" alt="(주)다우데이타"/><span>(주)다우데이타</span></a></li>
                        <li><a href="https://www.signgate.com/main.sg" target="_blank"><img src="/imgs/hr/family_itsolution_03.gif" alt="(주)한국정보인증"/><span>(주)한국정보인증</span></a></li>
                        <li><a href="http://www.mirae-tech.co.kr/miraetech/index/index.jsp" target="_blank"><img src="/imgs/hr/family_itsolution_06.gif" alt="(주)미래테크놀로지"/><span>(주)미래테크놀로지</span></a></li>
                    </ul>
                    <h3 className="stit"><img src="/imgs/hr/family_stit05.gif" alt="Oversea"/></h3>
                    <ul>
                        <li><a href="http://www.daou.co.jp/" target="_blank"><img src="/imgs/hr/family_overseas_01.gif" alt="다우재팬"/><span>다우재팬</span></a></li>
                        <li><a href="http://daouchina.cn/" target="_blank"><img src="/imgs/hr/family_overseas_02.gif" alt="다우(대련)과기개발유한공사"/><span>다우(대련)과기개발유한공사</span></a></li>
                        <li><a href="http://www.kiwoom.co.id/main.html" target="_blank"><img src="/imgs/hr/family_overseas_03.gif" alt="키움증권 인도네시아"/><span>키움증권 인도네시아</span></a></li>
                        <li><a href="http://www.kiwoom-invest.co.id/id/halaman-depan#fokus" target="_blank"><img src="/imgs/hr/family_overseas_04.gif" alt="키움자산운용 인도네시아"/><span>키움자산운용 인도네시아</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Family;