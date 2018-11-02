import React from 'react';
import SubVisual from './SubVisual';
import SubLocation from './SubLocation';
import ContentsTitle from './ContentsTitle';
import Tab from './Tab';
import Lnb from '../containers/Lnb'

class Index extends React.Component {
    render() {
        const tabList = {
            no: 0,
            type : 'defalt',
            name : ['연혁', '수상내역', '3', '4']
        };
        const tabList2 = {
            no: 1,
            type : 'defalt',
            name : ['기업비전 & 미션', '5대 핵심가치']
        };
        const tabList3 = {
            no: 2,
            type : 's',
            name : ['smallTab1', 'smallTab22', 'smallTab333', 'smallTab444']
        };


        return (
            <div id="container">
                <SubVisual />

                <div id="wrap_contents">
                    <SubLocation />

                    <Lnb />

                    <div id="contents">
                        <ContentsTitle />

                        <div className={'area_tab tabArea'+tabList.no}>
                            <Tab {...tabList} />
                            <div className="tab_cont">
                                <p>1_0번째 tab</p>
                            </div>
                            <div className="tab_cont">
                                <p>1_1번째 tab</p>
                            </div>
                            <div className="tab_cont">
                                <p>1_2번째 tab</p>
                            </div>
                            <div className="tab_cont">
                                <p>1_3번째 tab</p>
                            </div>
                        </div>

                        <div className={'area_tab tabArea'+tabList2.no}>
                            <Tab {...tabList2} />
                            <div className="tab_cont">
                                <p>2_0번째 tab</p>
                            </div>
                            <div className="tab_cont">
                                <p>2_1번째 tab</p>
                            </div>
                        </div>

                        <div className={'area_tab tabArea'+tabList3.no}>
                            <Tab {...tabList3} />
                            <div className="tab_cont">
                                <p>3_0번째 tab</p>
                            </div>
                            <div className="tab_cont">
                                <p>3_1번째 tab</p>
                            </div>
                            <div className="tab_cont">
                                <p>3_2번째 tab</p>
                            </div>
                            <div className="tab_cont">
                                <p>3_3번째 tab</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Index;