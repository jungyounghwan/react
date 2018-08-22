import React from 'react';

class Footer extends React.Component {
    render(){
        return (
            <div id="footer_wrap">
                <div id="footer">
                    <ul className="footer_navi">
                        <li><a href="http://www.saramin.co.kr/zf_user/help/privacy" target="_blank" title="새 창으로 이동">개인정보처리방침</a></li>
                        <li><a href="http://www.saramin.co.kr/zf_user/help" target="_blank" title="새 창으로 이동">고객센터</a></li>
                        <li><a href="http://www.saraminhr.co.kr/open_content/hr/contact.php">연락처</a></li>
                        <li><a href="http://www.saraminhr.co.kr/open_content/hr/location.php">오시는 길</a></li>
                        <li className="last"><a href="http://dkems.com/main.do" target="_blank" title="새 창으로 이동">윤리경영</a></li>
                    </ul>
                    <address>사업자등록번호:113-86-00917 / 직업정보제공사업:서울관악 제 2010-5호 / 서울시 구로구 구로동 187-10번지 코오롱싸이언스밸리 2차 201호
                    </address>
                    <div className="copyright">&nbsp;</div>
                </div>
            </div>
        );
    }
}

export default Footer;