import React from 'react';
import SubLocation from '../../components/SubLocation';
import ContentsTitle from '../../components/ContentsTitle';

class Aramin extends React.Component {

    render(){
        return (
            <div>
                <SubLocation  subLocation={this.props.menu} />
                <ContentsTitle contentTitle={this.props.menu.name} />

                <div className="aramin">
                    <div id="aram_con">
                        <h3><img src="/imgs/hr/aramin_txt01_2.gif" alt="사람인HR은 '나눔으로 더불어 살아가는 아름다운 세상'을 만들고자 전 임직원이 참여하는 봉사단 <아람인>을 통해 사회공헌 활동에 앞장서고 있습니다." /></h3>
                        <p className="contxt1"><img src="/imgs/hr/aramin_txt02_2.gif" alt="온라인 취업포털 서비스를 시작했을 때부터 무료 서비스 제공 원칙을 고수하고 있으며, 2008년 사내 봉사단인‘아람인’을 발족, 보다 적극적이고 다양한 사회공헌활동을 펼치고 있습니다." /></p>
                        <p className="contxt2"><img src="/imgs/hr/aramin_txt03_2.gif" alt="앞으로도 사람인HR은 기업의 사회적 책임을 다하고, 일회성의 후원, 봉사가 아니라 거창하지 않더라도 지속적으로 도움을 줄 수 있는 자발적인 나눔 문화를 정착시키기 위해 최선을 다하겠습니다. " /></p>
                    </div>
                    {/*<span><img src="/src/resources/images/hr/aramin_bg3.jpg" alt="아름다운 사람인의 나눔이 세상을 바꿉니다." /></span>
                    <p className="text_type1"><em>사람인HR은 <strong>"나눔으로 더불어 살아가는 아름다운 세상"</strong>을 만들고자</em><br />전 임직원이 참여하는 봉사단 &lt;아람인&gt;을 통해 사회공헌 활동에 앞장서고 있습니다.</p>
                    <p className="text_type2">온라인 취업포털 서비스를 시작했을 때부터 무료 서비스 제공 원칙을 고수하고 있으며,<br />2008년 사내 봉사단인 '아람인'을 발족, 보다 적극적이고 다양한 사회공헌활동을 펼치고 있습니다.</p>
                    <p className="text_type2">앞으로도 사람인HR은 기업의 사회적 책임을 다하고, 일회성의 후원, 봉사가 아니라 거창하지 않더라도<br />지속적으로 도움을 줄 수 있는 자발적인 나눔 문화를 정착시키기 위해 최선을 다하겠습니다.</p>*/}
                </div>
            </div>
        )
    }
}

export default Aramin;