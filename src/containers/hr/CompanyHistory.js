import React from 'react';
import Tab from '../../components/Tab';

class CompanyHistory extends React.Component {

    render(){
        const tabList = {
            no: 0,
            type : 'defalt',
            name : ['연혁', '수상내역']
        };
        return (
            <div className="company_history">
                <div className={'area_tab tabArea'+tabList.no}>
                    <Tab {...tabList} />
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
                        {/*<ul className="history_list">
                            <li>
                                <p className="date_y">2018</p>
                                <dl>
                                    <dt>09</dt>
                                    <dd>
                                        <ul>
                                            <li>PC 웹사이트 메인 개편</li>
                                            <li>사람인 BI 리뉴얼</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>07</dt>
                                    <dd>
                                        <ul>
                                            <li>2018 올해의 브랜드 대상 7년 연속 수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>04</dt>
                                    <dd>
                                        <ul>
                                            <li>2018 국가브랜드대상 7년 연속 수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>03</dt>
                                    <dd>
                                        <ul>
                                            <li>김용환 대표이사 선임</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                        </ul>*/}
                    </div>
                    <div className="tab_cont">
                        <div className="history2_wrap">
                            <table className="basic_history2" summary="사람인의 수상내역을 년도, 월 내용 순으로 보여드립니다.">
                                <caption><span>사람인 수상내역 리스트</span></caption>
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

                                <tr>
                                    <td><img src="/imgs/hr/hitory_2018.gif" alt="2018년" /></td>
                                    <td><img src="/imgs/hr/hitory_04.gif" alt="04월" /></td>
                                    <td>
                                        <ul>
                                            <li>2018 국가브랜드대상 7년 연속 수상</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowSpan="7"><img src="/imgs/hr/hitory_2017.gif" alt="2017년" /></td>
                                    <td className="no_line"><img src="/imgs/hr/hitory_12.gif" alt="12월" /></td>
                                    <td className="no_line">
                                        <ul>
                                            <li>2017 웹어워드·스마트앱어워드 3개 부문 수상</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>

                                    <td className="no_line"><img src="/imgs/hr/hitory_11.gif" alt="11월" /></td>
                                    <td className="no_line">
                                        <ul>
                                            <li>한국소비자원 '취업정보 사이트 서비스 만족도' 부분 1위</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>

                                    <td className="no_line"><img src="/imgs/hr/hitory_10.gif" alt="10월" /></td>
                                    <td className="no_line">
                                        <ul>
                                            <li>한국대학신문대상 취업사이트부문 5년 연속 1위</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>

                                    <td className="no_line"><img src="/imgs/hr/hitory_09.gif" alt="09월" /></td>
                                    <td className="no_line">
                                        <ul>
                                            <li>2017 올해의 브랜드 대상 6년 연속 수상</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>

                                    <td className="no_line"><img src="/imgs/hr/hitory_07.gif" alt="07월" /></td>
                                    <td className="no_line">
                                        <ul>
                                            <li>2017 한국서비스품질지수(KS-SQI)1위</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>

                                    <td className="no_line"><img src="/imgs/hr/hitory_04.gif" alt="04월" /></td>
                                    <td className="no_line">
                                        <ul>
                                            <li>모바일 어워드 코리아 2017 대상 수상</li>
                                            <li>2017 국가브랜드대상 6년 연속 수상</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>

                                    <td><img src="/imgs/hr/hitory_01.gif" alt="01월" /></td>
                                    <td>
                                        <ul>
                                            <li>2017 대한민국 퍼스트브랜드 대상 6년 연속 수상</li>
                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default CompanyHistory;