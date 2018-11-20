import React from 'react';
import SubLocation from '../../components/SubLocation';
import ContentsTitle from '../../components/ContentsTitle';

class Location extends React.Component {

    render(){
        return (
            <div>
                <SubLocation />
                <ContentsTitle contentTitle={this.props.menu.name} />

                <div className="location">
                    {/*내용 및 게시판 들억가는 곳*/}
                    <div className="location_wrap">
                        <div className="map"><img src="/imgs/hr/loca_img1_20180817.jpg" alt="네이버지도 이미지"/></div>
                        <p className="na"><a href="http://me2.do/xV4fA7r" target="_blank"><img src="/imgs/hr/loca_img_go.gif" alt="네이버지도가기"/></a></p>
                        <div className="lacation_list">
                            <div className="con_l">
                                <h3><img src="/imgs/hr/loca_stlt01.gif" alt="지하철"/></h3>
                                <ul>
                                    <li className="l1"><strong>지하철 2호선 구로디지털단지역 3번 출구</strong><span>-> 출구 앞 내리막길로 직진</span></li>
                                    <li className="l2">골목을 따라 오다가 붉은 벽돌 계단 위 오른쪽 건물</li>
                                    <li className="l3">코오롱 싸이언스밸리 1차 2층 201호(도보 5분거리)</li>
                                </ul>
                            </div>
                            <div className="con_r">
                                <h3><img src="/imgs/hr/loca_stlt02.gif" alt="버스"/></h3>
                                <ul>
                                    <li className="r1">수원방면: 900</li>
                                    <li className="r2">안양방면: 5, 51, 5531, 5623, 5624, 5625, 5713</li>
                                    <li className="r3">광명방면: 5536, 5628, 6612, 6635</li>
                                    <li className="r4">난곡방면: 5616, 6512</li>
                                    <li className="r5">여의도방면: 5625, 5627</li>
                                    <li className="r6">노량진방면: 5531, 5536</li>
                                    <li className="r7">시내방면: 150, 500, 505, 507</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Location;