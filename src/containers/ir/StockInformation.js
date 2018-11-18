import React from 'react';
import Tab from '../../components/Tab';

import '../../../src/resources/sass/old/stockinfo.scss';

class StockInformation extends React.Component {

    render(){
        const tabList = {
            no: 0,
            type : 's',
            name : ['호가', '시간대별체결가', '회원사별거래', '일자별시세']
        };
        return (
            <div className="stock_information">
                <div className="data-lists">
                    <dl>
                        <dt></dt>
                        <dd>
                            <div className="main_stock_box1">
                                <ul>
                                    <li>
                                        <div className="main_stock_box1_title">
                                            <ul>
                                                <li className="main_stock_box1_title1">A데이터<span>데이터</span>
                                                </li>
                                                <li className="main_stock_box1_title2">
                                                    <span className="CurJuka">현재가</span>
                                                    <span className="CurJukaPrice">데이터</span>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li className="main_stock_box1_contn">
                                                    <span className="title">전일대비</span>
                                                    <span>
                                                        <span className="up">데이터</span>
                                                        {/*<span className="bohab">데이터</span>
                                                        <span className="down">데이터</span>*/}
                                                    </span>
                                                </li>
                                                <li className="main_stock_box1_contn"><span className="title">거래량</span>
                                                    <span>데이터</span>
                                                </li>
                                                <li className="main_stock_box1_contn">
                                                    <span className="title">거래대금</span>
                                                    <span>데이터</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="main_stock_box2">
                                <table id="stockInfo">
                                    <tr>
                                        <th>시가</th>
                                        <td>데이터</td>
                                        <th colSpan="2">상한가</th>
                                        <td>데이터</td>
                                    </tr>
                                    <tr>
                                        <th>고가</th>
                                        <td>데이터</td>
                                        <th colSpan="2">하한가</th>
                                        <td>데이터</td>
                                    </tr>
                                    <tr>
                                        <th>저가</th>
                                        <td>데이터</td>
                                        <th colSpan="2">액면가</th>
                                        <td>데이터</td>
                                    </tr>
                                    <tr>

                                        <th>PER</th>
                                        <td>데이터</td>
                                        <th rowSpan="2">52주<br />(종가기준)</th>
                                        <th>최고</th>
                                        <td>데이터</td>
                                    </tr>
                                    <tr>
                                        <th>상장주식수</th>
                                        <td>데이터</td>
                                        <th>최저</th>
                                        <td>데이터</td>
                                    </tr>
                                </table>
                            </div>
                        </dd>
                    </dl>

                    <div className="articles_association">
                        <div className={'area_tab tabArea'+tabList.no}>
                            <Tab {...tabList} />
                            <div className="tab_cont">
                                <table id="Hoga">
                                    <tr>
                                        <th>매도잔량</th>
                                        <th>호가</th>
                                        <th>매수잔량</th>
                                    </tr>
                                    <tr>
                                        <td>데이터</td>
                                        <td>데이터</td>
                                        <td>데이터</td>
                                    </tr>
                                    <tr>
                                        <td>데이터</td>
                                        <td>잔량합계</td>
                                        <td>데이터</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">데이터가 없습니다.</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="tab_cont">
                                <table id="tradedPrice_time">
                                    <tr>
                                        <th>시간</th>
                                        <th>체결가</th>
                                        <th>전일대비</th>
                                        <th>매도호가</th>
                                        <th>매수호가</th>
                                        <th>매수잔량</th>
                                    </tr>
                                    <tr>
                                        <td>데이터</td>
                                        <td>데이터</td>
                                        <td>데이터</td>
                                        <td>데이터</td>
                                        <td>데이터</td>
                                        <td>데이터</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="6">데이터가 없습니다.</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="tab_cont">
                                <table id="member_trade">
                                    <tr>
                                        <th colSpan="2">매도상위</th>
                                        <th colSpan="2">매수상위</th>
                                    </tr>
                                    <tr>
                                        <th>증권사</th>
                                        <th>거래량</th>
                                        <th>증권사</th>
                                        <th>거래량</th>
                                    </tr>
                                    <tr>
                                        <td>데이터</td>
                                        <td>데이터</td>
                                        <td>데이터</td>
                                        <td>데이터</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="4">데이터가 없습니다.</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="tab_cont">
                                <table id="tradedPrice_day">
                                    <tr>
                                        <th>일자</th>
                                        <th>종가</th>
                                        <th>전일대비</th>
                                        <th>시가</th>
                                        <th>고가</th>
                                        <th>저가</th>
                                        <th>거래량</th>
                                        <th>거래대금</th>
                                    </tr>
                                    <tr>
                                        <td>데이터</td>
                                        <td>데이터</td>
                                        <td>데이터</td>
                                        <td>데이터</td>
                                        <td>데이터</td>
                                        <td>데이터</td>
                                        <td>데이터</td>
                                        <td>데이터</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="8">데이터가 없습니다.</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StockInformation;