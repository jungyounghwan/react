import React from 'react';
import Tab from '../../components/Tab';

class FinancialStatements2 extends React.Component {

    render(){
        const tableCol15per = {width: 15 + '%'}
        const tableCol25per = {width: 25 + '%'}

        const tabList = {
            no: 0,
            type : 's',
            name : ['2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011']
        };
        return (
            <div className="financial_statements2">
                <div className={'area_tab tabArea'+tabList.no}>
                    <Tab {...tabList} />
                    <div className="tab_cont mt30">
                        <div className="sh_co">
                            <h3 className="stit"><img src="/imgs/ir/fi_st2_stit01_20171031.gif" alt="요약연결재무상태표" /> <span>단위 : 백만원</span></h3>
                            <table className="content_list">
                                <caption><span>공시정보 리스트</span></caption>
                                <colgroup>
                                    <col style={tableCol25per}/>
                                    <col style={tableCol15per}/>
                                    <col style={tableCol15per}/>
                                    <col style={tableCol15per}/>
                                    <col style={tableCol15per}/>
                                    <col style={tableCol15per}/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th rowSpan="2" scope="col">항목</th>
                                    <th colSpan="4" scope="col">2018년</th>
                                    <th rowSpan="3" scope="col">비고</th>
                                </tr>
                                <tr>
                                    <th scope="col">1분기</th>
                                    <th scope="col">2분기</th>
                                    <th scope="col">3분기</th>
                                    <th scope="col">4분기</th>
                                </tr>
                                <tr>
                                    <th>회계기준</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="first1"><strong>자산총계</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">유동자산</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first bottom">비유동자산</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>부채총계</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">유동부채</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first bottom">비유동부채</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>자본총계</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">자본금</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">자본잉여금</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">기타자본</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first bottom">이익잉여금</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                </tbody>
                            </table>

                            <h3 className="stit mt50"><img src="/imgs/ir/fi_st2_stit02_20171031.gif" alt="요약연결포괄손익계산서"/><span>단위 : 백만원</span></h3>
                            <table className="content_list">
                                <caption><span>요약연결포괄손익계산서</span></caption>
                                <colgroup>
                                    <col style={tableCol25per}/>
                                    <col style={tableCol15per}/>
                                    <col style={tableCol15per}/>
                                    <col style={tableCol15per}/>
                                    <col style={tableCol15per}/>
                                    <col style={tableCol15per}/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th rowSpan="2" scope="col">항목</th>
                                    <th colSpan="4" scope="col">2018년</th>
                                    <th rowSpan="3" scope="col">비고</th>
                                </tr>
                                <tr>
                                    <th scope="col">1분기</th>
                                    <th scope="col">2분기 누적</th>
                                    <th scope="col">3분기 누적</th>
                                    <th scope="col">4분기 누적</th>
                                </tr>
                                <tr>
                                    <th>회계기준</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="first1"><strong>매출액</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td class="last"></td>
                                </tr>
                                <tr>
                                    <td class="first">매출원가</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td class="last"></td>
                                </tr>
                                <tr>
                                    <td class="first1"><strong>매출총이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td class="last"></td>
                                </tr>
                                <tr>
                                    <td class="first">판매비와일반관리비</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td class="last"></td>
                                </tr>
                                <tr>
                                    <td class="first1"><strong>영업이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td class="last"></td>
                                </tr>
                                <tr>
                                    <td class="first">기타이익</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td class="last"></td>
                                </tr>
                                <tr>
                                    <td class="first">기타손실</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td class="last"></td>
                                </tr>
                                <tr>
                                    <td class="first">금융수익</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td class="last"></td>
                                </tr>
                                <tr>
                                    <td class="first">금융원가</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td class="last"></td>
                                </tr>
                                <tr>
                                    <td class="first">관계기업투자손익</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td class="last"></td>
                                </tr>
                                <tr>
                                    <td class="first1"><strong>법인세차감전순이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td class="last"></td>
                                </tr>
                                <tr>
                                    <td class="first">법인세비용</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td class="last"></td>
                                </tr>
                                <tr>
                                    <td class="first1 bottom"><strong>당기순이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td class="last bottom"></td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="tab_cont mt30">
                        <div className="sh_co">
                            <h3 className="stit"><img src="/imgs/ir/fi_st2_stit01_20171031.gif" alt="요약연결재무상태표"/> <span>단위 : 백만원</span>
                            </h3>
                            <table className="content_list">
                                <caption><span>요약연결재무상태 리스트</span></caption>
                                <colgroup>
                                    <col style={ tableCol25per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th rowSpan="2" scope="col">항목</th>
                                    <th colSpan="4" scope="col">2017년</th>
                                    <th rowSpan="3" scope="col">비고</th>
                                </tr>
                                <tr>
                                    <th scope="col">1분기</th>
                                    <th scope="col">2분기</th>
                                    <th scope="col">3분기</th>
                                    <th scope="col">4분기</th>
                                </tr>
                                <tr>
                                    <th>회계기준</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="first1"><strong>자산총계</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">유동자산</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first bottom">비유동자산</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>부채총계</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">유동부채</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first bottom">비유동부채</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>자본총계</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">자본금</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">자본잉여금</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">기타자본</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first bottom">이익잉여금</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                </tbody>
                            </table>

                            <h3 className="stit mt50"><img src="/imgs/ir/fi_st2_stit02_20171031.gif" alt="요약연결포괄손익계산서"/><span>단위 : 백만원</span>
                            </h3>
                            <table className="content_list">
                                <caption><span>요약연결포괄손익계산 리스트</span></caption>
                                <colgroup>
                                    <col style={ tableCol25per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th rowSpan="2" scope="col">항목</th>
                                    <th colSpan="4" scope="col">2017년</th>
                                    <th rowSpan="3" scope="col">비고</th>
                                </tr>
                                <tr>
                                    <th scope="col">1분기</th>
                                    <th scope="col">2분기 누적</th>
                                    <th scope="col">3분기 누적</th>
                                    <th scope="col">4분기 누적</th>
                                </tr>
                                <tr>
                                    <th>회계기준</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="first1"><strong>매출액</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">매출원가</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>매출총이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">판매비와일반관리비</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>영업이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">기타이익</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">기타손실</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">금융수익</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">금융원가</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">관계기업투자손익</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>법인세차감전순이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">법인세비용</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first1 bottom"><strong>당기순이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="tab_cont mt30">
                        <div className="sh_co">
                            <h3 className="stit"><img src="/imgs/ir/fi_st2_stit01.gif" alt="요약재무상태표"/><span>단위 : 백만원</span></h3>
                            <table className="content_list">
                                <caption><span>요약재무상태 리스트</span></caption>
                                <colgroup>
                                    <col style={ tableCol25per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th rowSpan="2" scope="col">항목</th>
                                    <th colSpan="4" scope="col">2016년</th>
                                    <th rowSpan="3" scope="col">비고</th>
                                </tr>
                                <tr>
                                    <th scope="col">1분기</th>
                                    <th scope="col">2분기</th>
                                    <th scope="col">3분기</th>
                                    <th scope="col">4분기</th>
                                </tr>
                                <tr>
                                    <th>회계기준</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="first1"><strong>자산총계</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">유동자산</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first bottom">비유동자산</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>부채총계</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">유동부채</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first bottom">비유동부채</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>자본총계</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">자본금</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">자본잉여금</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">기타자본</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first bottom">이익잉여금</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                </tbody>
                            </table>

                            <h3 className="stit"><img src="http://www.saraminimage.co.kr/hr/fi_st2_20130409_stit02.gif" alt="요약손익계산서"/><span>단위 : 백만원</span></h3>
                            <table className="content_list">
                                <caption><span>요약손익계산 리스트</span></caption>
                                <colgroup>
                                    <col style={ tableCol25per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th rowSpan="2" scope="col">항목</th>
                                    <th colSpan="4" scope="col">2016년</th>
                                    <th rowSpan="3" scope="col">비고</th>
                                </tr>
                                <tr>
                                    <th scope="col">1분기</th>
                                    <th scope="col">2분기 누적</th>
                                    <th scope="col">3분기 누적</th>
                                    <th scope="col">4분기 누적</th>
                                </tr>
                                <tr>
                                    <th>회계기준</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="first1"><strong>매출액</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">매출원가</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>매출총이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">판매비와일반관리비</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>영업이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">기타이익</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">기타손실</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">금융수익</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">금융원가</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">관계기업투자손익</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>법인세차감전순이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">법인세비용</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first1 bottom"><strong>당기순이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="tab_cont mt30">
                        <div className="sh_co">
                            <h3 className="stit"><img src="/imgs/ir/fi_st2_stit01.gif" alt="요약재무상태표"/><span>단위 : 백만원</span></h3>
                            <table className="content_list">
                                <caption><span>요약재무상태 리스트</span></caption>
                                <colgroup>
                                    <col style={ tableCol25per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th rowSpan="2" scope="col">항목</th>
                                    <th colSpan="4" scope="col">2015년</th>
                                    <th rowSpan="3" scope="col">비고</th>
                                </tr>
                                <tr>
                                    <th scope="col">1분기</th>
                                    <th scope="col">2분기</th>
                                    <th scope="col">3분기</th>
                                    <th scope="col">4분기</th>
                                </tr>
                                <tr>
                                    <th>회계기준</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="first1"><strong>자산총계</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">유동자산</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first bottom">비유동자산</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>부채총계</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">유동부채</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first bottom">비유동부채</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>자본총계</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">자본금</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">자본잉여금</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">기타자본</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first bottom">이익잉여금</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                </tbody>
                            </table>

                            <h3 className="stit"><img src="http://www.saraminimage.co.kr/hr/fi_st2_20130409_stit02.gif" alt="요약손익계산서"/><span>단위 : 백만원</span></h3>
                            <table className="content_list">
                                <caption><span>요약손익계산 리스트</span></caption>
                                <colgroup>
                                    <col style={ tableCol25per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th rowSpan="2" scope="col">항목</th>
                                    <th colSpan="4" scope="col">2015년</th>
                                    <th rowSpan="3" scope="col">비고</th>
                                </tr>
                                <tr>
                                    <th scope="col">1분기</th>
                                    <th scope="col">2분기 누적</th>
                                    <th scope="col">3분기 누적</th>
                                    <th scope="col">4분기 누적</th>
                                </tr>
                                <tr>
                                    <th>회계기준</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="first1"><strong>매출액</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">매출원가</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>매출총이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">판매비와일반관리비</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>영업이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">기타이익</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">기타손실</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">금융수익</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">금융원가</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">관계기업투자손익</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>법인세차감전순이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">법인세비용</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first1 bottom"><strong>당기순이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="tab_cont mt30">
                        <div className="sh_co">
                            <h3 className="stit"><img src="/imgs/ir/fi_st2_stit01.gif" alt="요약재무상태표"/><span>단위 : 백만원</span></h3>
                            <table className="content_list">
                                <caption><span>요약재무상태 리스트</span></caption>
                                <colgroup>
                                    <col style={ tableCol25per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th rowSpan="2" scope="col">항목</th>
                                    <th colSpan="4" scope="col">2014년</th>
                                    <th rowSpan="3" scope="col">비고</th>
                                </tr>
                                <tr>
                                    <th scope="col">1분기</th>
                                    <th scope="col">2분기</th>
                                    <th scope="col">3분기</th>
                                    <th scope="col">4분기</th>
                                </tr>
                                <tr>
                                    <th>회계기준</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="first1"><strong>자산총계</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">유동자산</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first bottom">비유동자산</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>부채총계</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">유동부채</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first bottom">비유동부채</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>자본총계</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">자본금</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">자본잉여금</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">기타자본</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first bottom">이익잉여금</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                </tbody>
                            </table>

                            <h3 className="stit"><img src="http://www.saraminimage.co.kr/hr/fi_st2_20130409_stit02.gif" alt="요약손익계산서"/><span>단위 : 백만원</span></h3>
                            <table className="content_list">
                                <caption><span>요약손익계산 리스트</span></caption>
                                <colgroup>
                                    <col style={ tableCol25per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                    <col style={ tableCol15per }/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th rowSpan="2" scope="col">항목</th>
                                    <th colSpan="4" scope="col">2014년</th>
                                    <th rowSpan="3" scope="col">비고</th>
                                </tr>
                                <tr>
                                    <th scope="col">1분기</th>
                                    <th scope="col">2분기 누적</th>
                                    <th scope="col">3분기 누적</th>
                                    <th scope="col">4분기 누적</th>
                                </tr>
                                <tr>
                                    <th>회계기준</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                    <th>데이터</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="first1"><strong>매출액</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">매출원가</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>매출총이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">판매비와일반관리비</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>영업이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">기타이익</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">기타손실</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">금융수익</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">금융원가</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">관계기업투자손익</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first1"><strong>법인세차감전순이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first">법인세비용</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last"></td>
                                </tr>
                                <tr>
                                    <td className="first1 bottom"><strong>당기순이익</strong></td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td>데이터</td>
                                    <td className="last bottom"></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="tab_cont mt30">
                        2013년 그래프
                    </div>
                    <div className="tab_cont mt30">
                        2012년 그래프
                    </div>
                    <div className="tab_cont mt30">
                        2011년 그래프
                    </div>
                </div>
            </div>
        )
    }
}

export default FinancialStatements2;