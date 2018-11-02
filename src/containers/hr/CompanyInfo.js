import React from 'react';

class CompanyInfo extends React.Component {

    render(){
        return (
            <div className={"hr_companyinfo"}>
                <img src={"../src/resources/images/hr/img_companyinfo01.png"} alt={"사람과 일을 잇는 행복 Bridge"} />
                <dl className={"pos1"}>
                    <dt>행복 Bridge, 사람인</dt>
                    <dd>사람인HR은 뜨거운 열정과 사명감, 이용자 중심의 혁신적인<br />
                        마인드와 도전적인 기술력으로 ‘사람’과‘일’을 잇는<br />
                        기업입니다.</dd>
                </dl>
                <dl className={"pos2"}>
                    <dt>새로운 변화를 선도하는 종합HR기업</dt>
                    <dd>국내 최대량의 공채정보를 가장 빠르게 제공하는 온라인<br />
                        취업포털 사람인, 고품격 헤드헌팅, 스카우트코리아,<br />
                        기업 맞춤형 인재파견, 사람인스탭을 통해 대한민국 대표<br />
                        리크루팅 전문기업으로 자리매김 했습니다.</dd>
                </dl>
                <dl className={"pos3"}>
                    <dt>사람을 먼저 생각하는 서비스</dt>
                    <dd>사람인HR의 모든 서비스는 언제나 여러분에서 시작됩니다.<br />
                        구직자에게는 사회적 성취 실현, 행복한 삶의 터전이 되는<br />
                        일자리를, 기업에는 성장을 이끌 핵심 인재를 연결합니다.<br />
                        또, 단순 정보전달형에서 양방향성을 강화한 소통형<br />
                        서비스를 업계 최초로 시작해 올바른 채용문화 정착에도<br />
                        기여하고 있습니다.</dd>
                </dl>
                <dl className={"pos4"}>
                    <dt>사회적 책임을 다하는 사람인</dt>
                    <dd>앞으로도 일자리 창출 등 전문적인 사회공헌활동을<br />
                        전개하여 HR전문기업으로서 사회적 책임을 다하기 위한<br />
                        노력도 배가해 나가겠습니다.<br />
                        또한 끊임없는 연구와 투자로 모든 이들에게 도움이 되는<br />
                        서비스를 제공하며,‘국민에게 사랑 받고 신망 받는 착한<br />
                        기업’으로 고객과 함께 성장하겠습니다.</dd>
                </dl>

            </div>
        )
    }
}

export default CompanyInfo;