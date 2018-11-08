import React from 'react';
import Tab from '../../components/Tab';

class VisionMission extends React.Component {

    render(){
        const tabList = {
            no: 0,
            type : 'defalt',
            name : ['기업비젼 &amp; 미션', '5대 핵심가치']
        };
        return (
            <div className="hr_visionmission">
                <div className={'area_tab tabArea'+tabList.no}>
                    <Tab {...tabList} />
                    <div className="tab_cont">
                        <p>사람과 일을 잇는 행복 Bridge</p>
                        <p><strong>사람중심, 소통, 신뢰, 도전, 창의 5대 핵심가치</strong>로 더 큰 꿈을 실현합니다.</p>
                    </div>
                    <div className="tab_cont">
                        <h3>5대 핵심가치</h3>
                        <p><strong>사람중심, 소통, 신뢰, 도전, 창의</strong> 5대 핵심가치로 더 큰 꿈을 실현합니다.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default VisionMission;