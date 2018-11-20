import React from 'react';
import SubLocation from '../../components/SubLocation';
import ContentsTitle from '../../components/ContentsTitle';

class SaraminAwards extends React.Component {

    render(){
        const tableCol15per = {width: 15 + '%'}
        const tableCol85per = {width: 85 + '%'}

        return (
            <div>
                <SubLocation />
                <ContentsTitle contentTitle={this.props.menu.name} />

                <div className="saramin_awards">
                    <table id="basic_view" className="basic_view" summary="수상 내역을 보여드립니다.">
                        <caption><span>수상내역</span></caption>
                        <colgroup>
                            <col className="tableCol85per" />
                            <col className="tableCol15per" />
                        </colgroup>
                        <thead>
                        <tr>
                            <th>사람인, 올해의 브랜드 대상 7년 연속 수상!</th>
                            <th>2018.07.25</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="subject_view" colSpan="2">
                                <table width="650" border="0" cellSpacing="0" cellPadding="0">
                                    <tbody>
                                    <tr>
                                        <td><img src="http://www.saraminimage.co.kr/mail/2018brandofyear_award.png" alt="사람인 2018올해의브랜드대상 " useMap="#Map" border="0" /></td>
                                    </tr>
                                    </tbody>
                                </table>

                                <map name="Map">
                                    <area shape="rect" coords="205,1086,445,1140" target="_blank" href="http://www.edaily.co.kr/news/news_detail.asp?newsId=03007766619278128&amp;mediaCodeNo=257&amp;OutLnkChk=Y" />
                                </map>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default SaraminAwards;