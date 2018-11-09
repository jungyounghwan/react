import React from 'react';
import Tab from '../../components/Tab';

class VisionMission extends React.Component {

    render(){
        const tabList = {
            no: 0,
            type : 'defalt',
            name : ['기업비젼 & 미션', '5대 핵심가치']
        };
        return (
            <div className="hr_visionmission">
                <div className={'area_tab tabArea'+tabList.no}>
                    <Tab {...tabList} />
                    <div className="tab_cont">
                        <h3><img src="/imgs/hr/co_vs_txt.gif" alt="사람과 일을 잇는 행복 Bridge 사람중심, 소통, 신뢰, 도전, 창의 5대 핵심가치로 더 큰 꿈을 실현합니다." /></h3>
                        <div id="vs_wrap">
                            <h4 className="t01"><img src="/imgs/hr/co_vs_txt_04.gif" alt="사람을 먼저 생각하며 기업과 인재의 매칭을 통해 삶을 가치있게 만들어 갑니다." /></h4>
                            <ul>
                                <li className="c01"><img src="/imgs/hr/co_vs_txt_01.gif" alt="VISION : 국민에게 사랑받고 신망받는 착한기업 " /></li>
                                <li className="c02"><img src="/imgs/hr/co_vs_txt_02.gif" alt="MISSION : 사람과 일을 잇는 행복 Bridge" /></li>
                                <li className="c03"><img src="/imgs/hr/co_vs_txt_03.gif" alt="VALUE : 사람중심, 소통, 신뢰, 도전, 창의 " /></li>
                            </ul>
                        </div>
                        <div id="vs_cot3">
                            <h3><img src="/imgs/hr/co_vs_stlt_03.gif" alt="인재상" /></h3>
                            <ul>
                                <li className="c02"><img src="/imgs/hr/co_vs_stxt_18.gif" alt="밝고 겸손하며 정직한 인재" /></li>
                                <li className="c03"><img src="/imgs/hr/co_vs_stxt_19.gif" alt="열정적이며 책임감이 있는 인재" /></li>
                                <li className="c04"><img src="/imgs/hr/co_vs_stxt_20.gif" alt="소통 능력이 원활하고 실행력이 충분한 인재" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab_cont">
                        <h3><img src="/imgs/hr/co_vs02_txt.gif" alt="5대 핵심가치 - 사람중심, 소통, 신뢰, 도전, 창의  5대 핵심가치로 더 큰 꿈을 실현합니다." /></h3>
                        <div className="vs02_wrap">
                            <dl className="desc num01">
                                <dt className="tit"><img src="/imgs/hr/co_vs02_tit01.gif" alt="사람중심" /></dt>
                                <dd className="txt">
                                    <img src="/imgs/hr/co_vs02_txt01_180406_2.gif" alt="" />
                                    <ul className="hd_txt">
                                        <li>① <strong>구직자 중심 관점</strong>: 우리는 사회적 약자인 구직자의 입장에서 서비스를 만든다. 일자리를
                                            찾지 못한 구직자의 마음을 헤아리고 그들이 자신에게 맞는 일자리를 찾도록 도와주는 것이 우리의 사명이다.
                                        </li>
                                        <li>② <strong>Traffic 중심 관점</strong>: 우리는 당장의 매출보다는 구직자의 Traffic을 높이기 위해
                                            더 노력한다. 구직자의 Traffic은 장기적으로 채용공고의 효과와 플랫폼의 파워를 강화해 사회와 회사에 더 큰 가치를
                                            만들어 낸다.
                                        </li>
                                        <li>③ <strong>사용자 중심 관점</strong>: 우리는 서비스 공급자의 관점이 아니라 사용자의 관점에서 서비스를
                                            만든다. 우리는 당장의 비용을 줄여서 이익을 늘리는 것보다 사용자에게 더 큰 가치를 제공하는 것이 더 큰 이익을 창출할
                                            것이라 믿고, 최상의 UI/UX를 만들기 위해 노력한다.
                                        </li>
                                        <li>④ <strong>인재 중심 관점</strong>: 우리는 기업의 가치는 인재로부터 나온다는 것을 믿는다. 우리는 인재의
                                            소중함에 대해 항상 생각한다.
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl className="desc num02">
                                <dt className="tit"><img src="/imgs/hr/co_vs02_tit02.gif" alt="소통" /></dt>
                                <dd className="txt">
                                    <img src="/imgs/hr/co_vs02_txt02.gif" alt="" />
                                    <ul className="hd_txt">
                                        <li>① 정확한 소통을 위해서는 적극적으로 소통해야 한다. 메시지를 전달했다고 해서 소통을 한 것이 아니라, 상대방이 제대로
                                            메시지를 이해했는지 확인까지 해야 제대로 소통을 한 것이다.
                                        </li>
                                        <li>② 듣는 사람 또한 적극적인 경청이 필요하다. 상대방이 전달하고자 하는 말의 내용은 물론, 그 이면에 깔려있는 동기나
                                            정서까지 들으려고 노력하고, 이해된 바를 상대방에게 feedback해서 자신이 제대로 이해했는지 확인해야 한다.
                                        </li>
                                        <li>③ 타 부서 업무에 대한 의견 개진과 잘못에 대한 지적은 건설적 비판이라는 전제하에 거리낌없이 할 수 있어야 하고, 해당
                                            부서 및 당사자도 마음 상하지 않고 받아들일 수 있어야 한다.
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl className="desc num03">
                                <dt className="tit"><img src="/imgs/hr/co_vs02_tit03.gif" alt="신뢰" /></dt>
                                <dd className="txt">
                                    <img src="/imgs/hr/co_vs02_txt03.gif" alt="" />
                                    <ul className="hd_txt">
                                        <li>① 신뢰는 주는 것이 아니라 받는 것이다. 상대가 먼저 신뢰해주기를 바라는 것이 아니라 신뢰를 얻기 위해 최선의 노력을
                                            다해야 한다. 업무적인 신뢰는 맡은 임무를 완수함으로써 완성된다.
                                        </li>
                                        <li>② 신뢰는 일하는 과정과 성과의 수준에 대한 기대치가 합의되고, 그 기대치에 부합하는 상황이 반복될 때 비로소 얻을 수
                                            있다.
                                        </li>
                                        <li>③ 신뢰는 일관성으로부터 나온다. 일관성이란 항상 똑같은 판단과 행동을 반복하는 것을 말하는 것이 아니다. 상황이 바뀌면
                                            전략전술과 실행이 수정될 수 있다. 우리의 일관성은 일관된 철학과 원칙, 방향을 말한다
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl className="desc num04">
                                <dt className="tit"><img src="/imgs/hr/co_vs02_tit04.gif" alt="도전" /></dt>
                                <dd className="txt">
                                    <img src="/imgs/hr/co_vs02_txt04.gif" alt="" />
                                    <ul className="hd_txt">
                                        <li>① 멈추면 죽는다. 우리는 끊임없는 성장을 위해 항상 도전한다.</li>
                                        <li>② 남들이 비웃지 않는 목표는 도전적 목표가 아니다.</li>
                                        <li>③ 우리는 마켓리더로서 끊임없이 새로운 시도를 하고 세상에 존재하지 않았고 상상할 수 없었던 새로운 서비스를
                                            만들어낸다.
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl className="desc num05">
                                <dt className="tit"><img src="/imgs/hr/co_vs02_tit05.gif" alt="창의" /></dt>
                                <dd className="txt">
                                    <img src="/imgs/hr/co_vs02_txt05.gif" alt="" />
                                    <ul className="hd_txt">
                                        <li>① 창의는 한가한 자유로움보다는 절실함과 절박함에서 나온다. 제한된 조건 속에서 한가지 문제에 집중해 깊이 파고들어 생각할
                                            때 비로소 창의적인 사고가 가능해지고, 해결책이 만들어진다
                                        </li>
                                        <li>② 항상 똑같이 일하면서 새로운 결과를 기대해서는 안 된다. 창의적 사고는 책상 앞에서 생각만 한다고 되는 것이 아니라,
                                            다양한 학습, 지적 욕구의 충족, 변화에 대한 긍정적 마인드 그리고 새로운 시도 속에서 만들어진다.
                                        </li>
                                        <li>③ 창의는 소통이며 프로세스이다. 한 명의 창조적 인간이 창의를 만들어 내는 것이 아니라 학습과 토론 그리고 집단지성을
                                            통해 끊임없이 진화하면서 만들어진다. 이러한 실천 프로세스가 정착되어야 창의적인 조직이 된다.
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VisionMission;