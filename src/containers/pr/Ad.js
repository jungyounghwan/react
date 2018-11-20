import React from 'react';
import Tab from '../../components/Tab';
import SubLocation from '../../components/SubLocation';
import ContentsTitle from '../../components/ContentsTitle';

class Ad extends React.Component {

    render(){
        const tabList = {
            no: 0,
            type : 'defalt',
            name : ['인쇄광고', '미디어광고']
        };
        return (
            <div>
                <SubLocation />
                <ContentsTitle contentTitle={this.props.menu.name} />

                <div className="ad">
                    <div className={'area_tab tabArea'+tabList.no}>
                        <Tab {...tabList} />
                        <div className="tab_cont">
                        </div>
                        <div className="tab_cont">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ad;