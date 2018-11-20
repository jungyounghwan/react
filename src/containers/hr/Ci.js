import React from 'react';
import SubLocation from '../../components/SubLocation';
import ContentsTitle from '../../components/ContentsTitle';

class Ci extends React.Component {

    render(){
        return (
            <div>
                <SubLocation />
                <ContentsTitle contentTitle={this.props.menu.name} />

                <div className="ci">
                    <div className="ci_info">
                        <ul>
                            <li><img alt="사람인 영문 CI" src="/imgs/hr/ci_en_20180817.png" />
                                <div className="ci_download">
                                    <a href="dn.php?fn=Saramin_CI_ai.zip" target="_blank"><img src="http://www.saraminimage.co.kr/hr/ci/btn_down_ai.png" alt="영문CI ai파일 다운로드" /></a>&nbsp;
                                    <a href="dn.php?fn=Saramin_CI_jpg.zip" target="_blank"><img src="http://www.saraminimage.co.kr/hr/ci/btn_down_jpg.png" alt="영문CI jpg파일 다운로드" /></a>
                                </div>
                            </li>
                            <li><img alt="사람인 국문 CI" src="/imgs/hr/ci_kr_20180817.png" />
                                <div className="ci_download">
                                    <a href="dn.php?fn=saraminCI_ko_ai.zip" target="_blank"><img src="http://www.saraminimage.co.kr/hr/ci/btn_down_ai.png" alt="국문CI ai파일 다운로드" /></a>&nbsp;
                                    <a href="dn.php?fn=saraminCI_ko_jpg.zip" target="_blank"><img src="http://www.saraminimage.co.kr/hr/ci/btn_down_jpg.png" alt="국문CI jpg파일 다운로드" /></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ci;