import React from 'react';

class Directorate extends React.Component {

    render(){
        return (
            <div className="directorate">
                <div className="dire">
                    {/*내용 및 게시판 들억가는 곳*/}
                    <h3><img src="/imgs/ir/dire_stit01.gif" alt="이사회"/></h3>
                    <table className="content_list" summary="이사회소개를 직책명, 성명, 약력, 담당업무 순으로 보여드립니다.">
                        <caption><span>이사회소개 리스트</span></caption>
                        <colgroup>
                            <col className="cate"/>
                            <col className="name"/>
                            <col className="his"/>
                            <col className="work"/>
                        </colgroup>
                        <thead>
                        <tr>
                            <th scope="col">직책명</th>
                            <th scope="col">성명(생년월일)</th>
                            <th scope="col">약력</th>
                            <th scope="col">담당업무</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="first">대표이사<br/>(상근)<br/>(등기)</td>
                            <td className="center">김용환<br/>(57.8.25)</td>
                            <td className="his">
                                <ul>
                                    <li>- 서울대학교 수학교육학과</li>
                                    <li>- ㈜나이스디앤비 대표이사</li>
                                    <li>- NICE신용평가㈜ 대표이사</li>
                                    <li>- 現 사람인HR 대표</li>
                                </ul>
                            </td>
                            <td className="last">총괄</td>
                        </tr>
                        <tr>
                            <td className="first">사내이사<br/>(상근)<br/>(등기)</td>
                            <td className="center">박종필<br/>(67.02.01)</td>
                            <td className="his">
                                <ul>
                                    <li>- 연세대학교 경영학과</li>
                                    <li>- 삼일회계법인</li>
                                    <li>- 재능교육 CFO</li>
                                    <li>- 現 사람인HR 경영지원실장</li>
                                </ul>
                            </td>
                            <td className="last">경영지원</td>
                        </tr>
                        <tr>
                            <td className="first">기타비상무 이사<br/>(비상근)<br/>(등기)</td>
                            <td className="center">김익래<br/>(50.12.16)</td>
                            <td className="his">
                                <ul>
                                    <li>- 한국외국어대학교 영어과</li>
                                    <li>- 다우기술 대표이사</li>
                                    <li>- 국민은행 사외이사</li>
                                    <li>- 국세청 세정자문위원회 위원</li>
                                    <li>- 現 다우데이타 대표이사</li>
                                    <li>- 現 키움증권 이사회 의장</li>

                                </ul>
                            </td>
                            <td className="last">총괄</td>
                        </tr>
                        <tr>
                            <td className="first">사외이사<br/>(비상근)<br/>(등기)</td>
                            <td className="center">김수경<br/>(69.02.15)</td>
                            <td className="his">
                                <ul>
                                    <li>- 국립한밭대학교 컴퓨터공학과 박사</li>
                                    <li>- 한국과학기술원 연구교수</li>
                                    <li>- 위로보과학교육원 교육원장</li>
                                    <li>- 한국전자통신연구원 초빙연구원</li>
                                    <li>- 現 국립한밭대학교 교수</li>
                                </ul>
                            </td>
                            <td className="last">사외이사</td>
                        </tr>
                        <tr>
                            <td className="first">감사<br/>(비상근)<br/>(등기)</td>
                            <td className="center">최정일<br/>(51.01.28)</td>
                            <td className="his">
                                <ul>
                                    <li>- 서울대학교 외교학과</li>
                                    <li>- 駐인도 대사</li>
                                    <li>- 駐독일 대사</li>
                                    <li>- 한국관광공사 특임대사</li>
                                    <li>- 現 사람인HR 감사</li>
                                </ul>
                            </td>
                            <td className="last">감사</td>
                        </tr>
                        </tbody>
                    </table>
                    {/*//내용 및 게시판 들억가는 곳*/}
                </div>

            </div>
        )
    }
}

export default Directorate;