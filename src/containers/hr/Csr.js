import React from 'react';
import SubLocation from '../../components/SubLocation';
import ContentsTitle from '../../components/ContentsTitle';

class Csr extends React.Component {

    render(){
        return (
            <div>
                <SubLocation />
                <ContentsTitle contentTitle={this.props.menu.name} />

                <div className="csr">
                    <div id="csr_wrap">
                        <h3><img src="/imgs/hr/csr_txt01.gif" alt="사람인HR은 다양한 사회공헌 활동을 통해 사회적 책임을 다하고 따뜻한 세상을 만들어갑니다." /></h3>
                        <div className="txt_info01">
                            <h4><img src="/imgs/hr/csr_stit_01.gif" alt="임직원 나눔봉사" /></h4>
                            <p><img src="/imgs/hr/csr_txt_01.gif" alt="사람인HR의 임직원들은 모두 사내봉사단인‘아람인’에 소속되어, 자발적인 나눔 봉사를 펼치고 있습니다. 연탄 배달, 헌혈 봉사, 지체장애인 돌보기 봉사활동 등 도움이 필요한 곳에 직접 찾아가 도움의 손길을 전달하며 따뜻한 사회를 만드는 데 앞장서고 있습니다" />
                            </p>
                        </div>
                        <div className="txt_info02">
                            <h4><img src="/imgs/hr/csr_stit_02.gif" alt="사랑나눔 기부" /></h4>
                            <p><img src="/imgs/hr/csr_txt_02.gif" alt="사람인HR은 2005년 설립부터 배너 후원을 시작으로, 연탄기부, 100일간의 아이티 돕기 모금 행사를 통한 구호 성금 전달 등 나눔 기부를 지속적으로 진행하고 있습니다. 이를 통해 국내외 어려운 이웃들에게 희망과 사랑을 전하고 있습니다." />
                            </p>
                        </div>
                        <div className="txt_info03">
                            <h4><img src="/imgs/hr/csr_stit_03.gif" alt="취약계층 일자리 나눔" /></h4>
                            <p><img src="/imgs/hr/csr_txt_03.gif" alt="사람인HR은 전문HR 기업으로서 사회 실업 문제 해결을 위해 노력하고 있습니다. 청년인턴제 실시를 통해 청년층의 고용 증대에 앞장서고 있으며, 소외계층의 일자리 창출을 위해 의무 고용비율보다 5배 이상 높은 장애인 채용을 실천하고 있습니다. 앞으로도 업종의 전문성을 살려‘취약계층 취업 컨설팅’,‘중,고등학생 직업교육’등 개인의 사회적 성취를 실현시키는 나눔을 이어갈 것입니다." /></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Csr;