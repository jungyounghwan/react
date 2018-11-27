import React from 'react';
import SubLocation from '../../components/SubLocation';
import ContentsTitle from '../../components/ContentsTitle';

class Process extends React.Component {

    render(){
        return (
            <div>
                <SubLocation />
                <ContentsTitle contentTitle={this.props.menu.name} />

                <div className="process">
                    <div className="process_wrap">
                        <h3><img src="/imgs/recruit/process_txt.gif" alt="사람인 채용절차 - 사람인의 미래를 위한 더 큰 사람인이 되기를 바랍니다."/></h3>
                        <ul className="process_num">
                            <li className="num01"><img src="/imgs/recruit/process01.gif" alt="입사지원서 접수"/></li>
                            <li className="num02"><img src="/imgs/recruit/process02.gif" alt="서류전형"/></li>
                            <li className="num03"><img src="/imgs/recruit/process03.gif" alt="인적성검사(On-Line)"/></li>
                            <li className="num04"><img src="/imgs/recruit/process04.gif" alt="1차 면접전형"/></li>
                            <li className="num05"><img src="/imgs/recruit/process05.gif" alt="2차 면접전형"/></li>
                            <li className="num06"><img src="/imgs/recruit/process06.gif" alt="채용내정자 확정"/></li>
                            <li className="num07"><img src="/imgs/recruit/process07.gif" alt="최종합격"/></li>
                        </ul>

                        <h4><img src="/imgs/recruit/process_stit01.gif" alt="01 서류전형"/></h4>
                        <ul className="process_info">
                            <li><img src="/imgs/recruit/process_txt01.gif" alt="신입사원의 경우 학교생활 등을 통해 경험한 다양한 활동과 주요 관심사 등을 중점적으로 평가합니다."/></li>
                            <li><img src="/imgs/recruit/process_txt02.gif" alt="경력사원의 경우 전 직장 경력을 중심으로 담당 업무와 관련된 직무스킬 등을 중점적으로 평가합니다."/></li>
                        </ul>
                        <h4><img src="/imgs/recruit/process_stit02.gif" alt="02 인적성검사"/></h4>
                        <ul className="process_info">
                            <li><img src="/imgs/recruit/process_txt03.gif" alt="인적성검사는 서류전형 통과자를 대상으로 1시간~1시간 30분 가량 on-line으로 진행됩니다."/></li>
                            <li><img src="/imgs/recruit/process_txt04.gif" alt="인적성검사의 결과는 면접전형 시 적극 활용되며, 결과를 별도로 발표하지는 않습니다."/></li>
                        </ul>
                        <h4><img src="/imgs/recruit/process_stit03.gif" alt="03 면접전형"/></h4>
                        <ul className="process_info">
                            <li><img src="/imgs/recruit/process_txt05.gif" alt="1차 면접은 실무진면접으로 주로 직무 수행과 관련된 실무적인 부분을 중심으로 평가합니다."/></li>
                            <li className="pa8"><img src="/imgs/recruit/process_txt06.gif" alt="2차 면접은 임원진면접으로 주로 인성과 태도 및 당사 인재상과 부합 여부를 중심으로 평가합니다."/></li>
                            <li><img src="/imgs/recruit/process_txt07.gif" alt="각 전형은 통상 40분~1시간 가량 진행됩니다."/></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Process;