import React from 'react';

class ShareholderComposition extends React.Component {

    render(){
        return (
            <div className="shareholder_composition">
                <div className="sh_co">
                    <div className="board_box">
                        <h3><img src="/imgs/ir/sh_co_tit.gif" alt="(주)사람인HR은 다우기술 외 국내 여러 기관의 다양한 주주들로 구성되어 있습니다."/></h3>
                    </div>

                    {/*주식소유현황*/}
                    <h3 className="stit"><img src="/imgs/ir/sh_co_stit02.gif" alt="주식소유현황" /> <span>Y년 m월 d일 현재</span></h3>
                    <table className="content_list">
                        <caption><span>주식소유현황 리스트</span></caption>
                        <colgroup>
                            <col className="name" />
                            <col className="ju_num"/>
                            <col className="ji_num"/>
                            <col className="ju_num"/>
                            <col className="ji_num"/>
                            <col className="ju_num"/>
                            <col className="ji_num"/>
                        </colgroup>
                        <thead>
                        <tr>
                            <th rowSpan="2" scope="col">성명(법인명)</th>
                            <th colSpan="2" >보통주</th>
                            <th colSpan="2" >우선주</th>
                            <th colSpan="2" scope="col">Total</th>
                        </tr>
                        <tr>
                            <td scope="col">주식주</td>
                            <td scope="col">지분율</td>
                            <td scope="col">주식주</td>
                            <td scope="col">지분율</td>
                            <td scope="col">주식주</td>
                            <td scope="col">지분율</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="total">Total</td>
                            <td className="t_ju">데이터</td>
                            <td>데이터.00%</td>
                            <td className="t_ju">데이터</td>
                            <td>데이터%</td>
                            <td className="t_ju">데이터</td>
                            <td className="last">데이터.00%</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ShareholderComposition;