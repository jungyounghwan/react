import React from 'react';
import Tab from '../../components/Tab';
import SubLocation from '../../components/SubLocation';
import ContentsTitle from '../../components/ContentsTitle';

class Jobportal extends React.Component {

    render(){
        const tabList = {
            no: 0,
            type : 'defalt',
            name : ['서비스소개', '연혁']
        };
        return (
            <div>
                <SubLocation />
                <ContentsTitle contentTitle={this.props.menu.name} />

                <div className="jobportal">
                    <div className="board_box">
                        <img src="/imgs/service/jobportal_txt.gif" alt="사람인, 당신에서 시작합니다." />
                        <p className="qt"><img src="/imgs/service/jobportal_txt_01.gif" alt="구인도, 구직도 사람 사이의 교류와 소통으로 이루어지는 것을 알기에, '사람 중심'의 마음으로 2002년부터 '사람중심 취업사이트, 사람인' 서비스가 시작되었습니다. 좋은 일터와 좋은 인재를 구하고자 하는 그들과 같은 꿈을 향해 달려온 사람인은 기존의 취업사이트에서는 볼 수 없었던 혁신적인 정보와 새로운 가치를 창출하는 서비스로 성장하고 있습니다." /></p>
                        <a href="http://www.saramin.co.kr" target="_blank" className="ql">www.saramin.co.kr</a>
                    </div>

                    <div className={'area_tab tabArea'+tabList.no}>
                        <Tab {...tabList} />
                        <div className="tab_cont">
                            <div className="service_infobox">
                                <div className="cont1">
                                    <h4><img src="/imgs/service/jobportal_txt01.gif" alt="믿을 수 있는 콘텐츠로 온라인 취업 포털을 선도합니다"/></h4>
                                    <img src="/imgs/service/jobportal_info01.gif" alt="사람인은'사람중심'이라는 기업 철학 하에 철저하게 구직자를 위한서비스로 차별화를 추구해왔습니다. 업계 최초로'공채'라는 특화된 영역에 집중,'1000대 기업 공채속보','공채 요점정리'등의 경쟁력 있는 서비스를 개발했으며, 모든 정보는 직접 확인하여 믿을 수 있는 서비스를 제공하고 있습니다."/>
                                </div>
                                <div className="cont2">
                                    <h4><img src="/imgs/service/jobportal_txt02.gif" alt="개인에게 최적화된 이력서 서비스로 이용자 만족도를 높여가고 있습니다"/></h4>
                                    <img src="/imgs/service/jobportal_info02.gif" alt="사람인의 이력서는'쉽게, 개성있게, 전문적으로, 안전하게'라는 4가지 컨셉을 모토로 설계되었습니다. 기호에 맞는 양식을 선택할 수 있으며,'SWOT 자기분석','내 인생의 책'등 강점을 부각시킬 수 있는 항목을 제공합니다. 앞으로도 지속적으로 VOC에 귀 기울이며 서비스 품질을 높이기 위해 노력하겠습니다. "/>
                                </div>
                                <div className="cont22">
                                    <h4><img src="/imgs/service/jobportal_txt03.gif" alt="구인자와 구직자의 깊이 있는 소통문화, 사람인이 만들어 갑니다"/></h4>
                                    <img src="/imgs/service/jobportal_info03.gif" alt="사람인은 단순한 채용정보 제공이라는 한계에서 벗어나,'양방향 커뮤니케이션'시스템을 도입, 구인자와 구직자간 직접 소통문화를 만들어가고 있습니다. 채용공고만으로 부족했던 정보를 인사담당자와 직접 통화해 알려주는'인사통', 구직자간 댓글로 소통하는 '댓글통'등 정보와 커뮤니케이션이 결합된 신개념 서비스를 제공합니다."/>
                                </div>
                                <div className="cont3">
                                    <h4><img src="/imgs/service/jobportal_txt04.gif" alt="사람인 서비스는 고객으로부터 시작됩니다"/></h4>
                                    <img src="/imgs/service/jobportal_info04.gif" alt="사람인은'사람이 우선'이라는 생각으로 이윤을 위한 복잡한 상품 게시를 지양합니다. 또한, 콘텐츠의 가독성을 높이고 효율적으로 접근할 수 있도록 모든 UI는 심플하고 간결하게 제작하고 있습니다. 앞으로도 사람인은 혁신적인 서비스 제공과 이용자 편의성을 극대화로 원하는 정보를 쉽고 빠르게 접할 수 있도록 최선을 다하겠습니다."/>
                                </div>
                            </div>
                        </div>
                        <div className="tab_cont">
                            <div className="history_wrap">
                                <table className="basic_history" summary="사람인의 연혁을 년도, 월 내용 순으로 보여드립니다.">
                                    <caption><span>사람인 연혁 리스트</span></caption>
                                    <colgroup>
                                        <col className="year" />
                                        <col className="month" />
                                        <col className="subject" />
                                    </colgroup>
                                    <thead>
                                    <tr>
                                        <th scope="col">년도</th>
                                        <th scope="col">월</th>
                                        <th scope="col">내용</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    <tr className=" y_selected 2018">
                                        <td className="no_line" rowSpan="4"><img src="/imgs/hr/hitory_2018.gif" alt="2018년" /></td>
                                        <td className="no_line" id="v_item"><img src="/imgs/hr/hitory_09.gif" alt="09월" /></td>
                                        <td className="no_line" id="v_item">
                                            <ul>
                                                <li>PC 웹사이트 메인 개편</li>
                                                <li>사람인 BI 리뉴얼</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className=" y_selected 2018">
                                        <td className="no_line" id="h_item"><img src="/imgs/hr/hitory_07.gif" alt="07월" /></td>
                                        <td className="no_line" id="h_item">
                                            <ul>
                                                <li>2018 올해의 브랜드 대상 7년 연속 수상</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className=" y_selected 2018">
                                        <td className="no_line" id="h_item"><img src="/imgs/hr/hitory_04.gif" alt="04월" /></td>
                                        <td className="no_line" id="h_item">
                                            <ul>
                                                <li>2018 국가브랜드대상 7년 연속 수상</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className=" y_selected 2018">
                                        <td className="no_line" id="h_item"><img src="/imgs/hr/hitory_04.gif" alt="04월" /></td>
                                        <td className="no_line" id="h_item">
                                            <ul>
                                                <li>2018 국가브랜드대상 7년 연속 수상</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className=" y_selected 2018">
                                        <td rowSpan="4"><img src="/imgs/hr/hitory_2018.gif" alt="2018년" /></td>
                                        <td id="v_item"><img src="/imgs/hr/hitory_09.gif" alt="09월" /></td>
                                        <td id="v_item">
                                            <ul>
                                                <li>PC 웹사이트 메인 개편</li>
                                                <li>사람인 BI 리뉴얼</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className=" y_selected 2018">
                                        <td className="no_line" id="h_item"><img src="/imgs/hr/hitory_07.gif" alt="07월" /></td>
                                        <td className="no_line" id="h_item">
                                            <ul>
                                                <li>2018 올해의 브랜드 대상 7년 연속 수상</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className=" y_selected 2018">
                                        <td className="no_line" id="h_item"><img src="/imgs/hr/hitory_04.gif" alt="04월" /></td>
                                        <td className="no_line" id="h_item">
                                            <ul>
                                                <li>2018 국가브랜드대상 7년 연속 수상</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className=" y_selected 2018">
                                        <td className="no_line" id="h_item"><img src="/imgs/hr/hitory_04.gif" alt="04월" /></td>
                                        <td className="no_line" id="h_item">
                                            <ul>
                                                <li>2018 국가브랜드대상 7년 연속 수상</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className=" y_selected 2018">
                                        <td rowSpan="4"><img src="/imgs/hr/hitory_2018.gif" alt="2018년" /></td>
                                        <td id="v_item"><img src="/imgs/hr/hitory_09.gif" alt="09월" /></td>
                                        <td id="v_item">
                                            <ul>
                                                <li>PC 웹사이트 메인 개편</li>
                                                <li>사람인 BI 리뉴얼</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className=" y_selected 2018">
                                        <td className="no_line" id="h_item"><img src="/imgs/hr/hitory_07.gif" alt="07월" /></td>
                                        <td className="no_line" id="h_item">
                                            <ul>
                                                <li>2018 올해의 브랜드 대상 7년 연속 수상</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className=" y_selected 2018">
                                        <td className="no_line" id="h_item"><img src="/imgs/hr/hitory_04.gif" alt="04월" /></td>
                                        <td className="no_line" id="h_item">
                                            <ul>
                                                <li>2018 국가브랜드대상 7년 연속 수상</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className=" y_selected 2018">
                                        <td className="no_line" id="h_item"><img src="/imgs/hr/hitory_04.gif" alt="04월" /></td>
                                        <td className="no_line" id="h_item">
                                            <ul>
                                                <li>2018 국가브랜드대상 7년 연속 수상</li>
                                            </ul>
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jobportal;