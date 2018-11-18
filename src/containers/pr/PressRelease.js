import React from 'react';

class PressRelease extends React.Component {

    render(){
        const tableCol15per = {width: 15 + '%'}
        const tableCol70per = {width: 70 + '%'}

        return (
            <div className="press_release">
                <table className="basic_list">
                    <caption><span>사람인 NEWS</span></caption>
                    <colgroup>
                        <col style={tableCol15per}/>
                        <col style={tableCol70per}/>
                        <col style={tableCol15per}/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th className="first" scope="col">번호</th>
                        <th scope="col">제목</th>
                        <th className="last"  scope="col">날짜</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>123</td>
                        <td className="subject">
                            <a href="##" className="a">"기업 53%, 아직 채용공고 정보 '비공개 관행' 남아있다"</a>
                            <img src="/imgs/board/new.gif" border="0" align="absmiddle" />
                        </td>
                        <td>2011.08.29</td>
                    </tr>
                    </tbody>
                </table>

                <div className="list_paging">
                    <span><a href="##"><img src="/imgs/board/btn2_first.gif" alt="처음"/></a></span>
                    <span><a href="##"><img src="/imgs/board/btn2_prev.gif" alt="이전블럭"/></a></span>
                    <span className="select">1</span>
                    <span><a href="#">2</a></span>
                    <span><a href="#">3</a></span>
                    <span><a href="#">4</a></span>
                    <span><a href="#">5</a></span>
                    <span><a href="#">6</a></span>
                    <span><a href="#">7</a></span>
                    <span><a href="#">8</a></span>
                    <span><a href="#">9</a></span>
                    <span><a href="#">10</a></span>
                    <span><a href="##"><img src="/imgs/board/btn2_next.gif" alt="다음블럭"/></a></span>
                    <span><a href="##"><img src="/imgs/board/btn2_last.gif" alt="마지막"/></a></span>
                </div>

                <div className="board_search">
                    <form name="searchfrm" method="" action="">
                        <fieldset>
                            <legend>검색</legend>
                            <label htmlFor="search_cate1">게시물 검색</label>
                            <select id="search_cate1" name="">
                                <option>전체</option>
                            </select>
                            <label htmlFor="input_search">검색어입력</label>
                            <input type="text" id="input_search" value=""/>
                            <input type="image" className="img_btn" src="/imgs/board/btn_search.gif" alt="검색"/>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}

export default PressRelease;