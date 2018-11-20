import React from 'react';
import SubLocation from '../../components/SubLocation';
import ContentsTitle from '../../components/ContentsTitle';

class Education extends React.Component {

    render(){
        return (
            <div>
                <SubLocation />
                <ContentsTitle contentTitle={this.props.menu.name} />

                <div className="education">
                    <ul>
                        <li className="edu1">
                            <h4><img src="/imgs/recruit/edu_stit01.gif" alt="01.조직의 비전 및 가치 공유"/></h4>
                            <img src="/imgs/recruit/edu_txt01.gif" alt="사람인HR은 기업이 발전하기 위해 구성원들이 공통된 비전을 공유하고, 이를 함께 지향해나가는 것이 필요하다고 생각합니다. 이에 직원들과 회사의 비전, 미션, 가치를 공유하며, 회사와 직원이 함께 성장할 수 있는 기틀을 마련하고 있습니다. "/>
                        </li>
                        <li className="edu2">
                            <h4><img src="/imgs/recruit/edu_stit02.gif" alt="02.핵심 인재 육성체계 구축"/></h4>
                            <img src="/imgs/recruit/edu_txt02.gif" alt="사람인HR은 체계적이고 차별화된 교육과정을 통해 핵심 인재를 육성해 나갑니다. 또, 개인의 역량 및 성과평가를 실시, 그 결과를 바탕으로 충분한 보상을 제공하여 직원들에게 성과 동기를 부여하고 있습니다. "/>
                        </li>
                        <li className="edu3">
                            <h4><img src="/imgs/recruit/edu_stit03.gif" alt="03.신입사원 역량개발 지원"/></h4>
                            <img src="/imgs/recruit/edu_txt03.gif" alt="사람인HR은 인력 운영의 효율성을 높이기 위해 신입사원 조기 전력화를추구하고 있습니다. 신입사원의 입문교육 및 직무 OJT (On the Job Training), 멘토링 제도 운영 등은 신입사원의 조직 내 적응을 돕는 동시에 회사에 대한 호감도와 조직 로열티를 높여줍니다."/>
                        </li>
                        <li className="edu4">
                            <h4><img src="/imgs/recruit/edu_stit04.gif" alt="04.실용성 있는 전문 직무교육 제공"/></h4>
                            <img src="/imgs/recruit/edu_txt04.gif" alt="사람인HR은 직원들이 업무 수행 시 실질적으로 필요로 하는 교육을 제공하는 것을 목표로 합니다. 이를 위해 직원들의 교육 니즈를 체계적으로 분석하여, 맞춤형 직무.계층 교육 체계를 수립, 운영하고 있습니다."/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Education;