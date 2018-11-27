import React from 'react';
import SubLocation from '../../components/SubLocation';
import ContentsTitle from '../../components/ContentsTitle';

class Welfare extends React.Component {

    render(){
        return (
            <div>
                <SubLocation />
                <ContentsTitle contentTitle={this.props.menu.name} />

                <div className="welfare">
                    <div className="welfare_new">
                        <h3><img src="http://www.saraminimage.co.kr/hr/recruit/w1_20170228.png" alt="사람인HR은 직원이 활기차고 즐거운 마음으로 일할 수 있는 환경조성을 위해 복리후생제도를 운영하고 있습니다. "/></h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welfare;