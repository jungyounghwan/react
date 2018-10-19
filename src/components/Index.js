import React from 'react';
import Tab from './Tab';

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
            <div>
                <Tab {...tabList} /><br />
                <Tab {...tabList2} />

            </div>

        );
    }
}

export default Index;