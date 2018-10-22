import React from 'react';
import SubVisual from './SubVisual';
import Location from './Location';
import ContentsTitle from './ContentsTitle';
import Tab from './Tab';
import Lnb from '../containers/Lnb'

class Index extends React.Component {
    render() {
        const tabList = {
            type : 'defalt',
            name : ['연혁', '수상내역']
        };
        const tabList2 = {
            type : 'defalt',
            name : ['기업비전 & 미션', '5대 핵심가치']
        };


        return (
            <div id="container">
                <SubVisual />

                <div id="wrap_contents">
                    <Location />

                    <Lnb />

                    <div id="contents">
                        <ContentsTitle />

                        <Tab {...tabList} /><br />
                        <Tab {...tabList2} />
                    </div>
                </div>
            </div>

        );
    }
}

export default Index;