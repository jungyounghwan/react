import React from 'react';
import SubLocation from '../../components/SubLocation';
import ContentsTitle from '../../components/ContentsTitle';

class FinancialStatements extends React.Component {

    render(){
        const tableCol15 = {width: 15 + 'px'}
        const tableCol20 = {width: 20 + 'px'}
        const tableCol45 = {width: 45 + 'px'}

        return (
            <div>
                <SubLocation />
                <ContentsTitle contentTitle={this.props.menu.name} />

                <div className="financial_statements">
                    <div className="sh_co">
                        <h3 className="stit"><img src="/imgs/ir/sh_co_stit02.gif" alt="공시정보"/> <span>Y년 m월 d일 현재</span></h3>
                        <table className="content_list">
                            <caption><span>공시정보 리스트</span></caption>
                            <colgroup>
                                <col style={tableCol20}/>
                                <col style={tableCol15}/>
                                <col style={tableCol45}/>
                                <col style={tableCol20}/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th scope="col">번호</th>
                                <th scope="col">일자</th>
                                <th scope="col">공시제목</th>
                                <th scope="col">제출의무자</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>데이터%</td>
                                <td>데이터%</td>
                                <td className="first">데이터%</td>
                                <td>데이터%</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default FinancialStatements;