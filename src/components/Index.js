import React from 'react';
import Tab from './Tab';

class Index extends React.Component {
    render() {
        const tabList = {
            name : ['1', '2']
        };
        const tabList2 = {
            name : ['3', '4']
        };


        return (
            <div>
                <Tab {...tabList} />
                <Tab {...tabList2} />
            </div>

        );
    }
}

export default Index;