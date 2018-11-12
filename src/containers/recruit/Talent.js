import React from 'react';

class Talent extends React.Component {

    render(){
        return (
            <div className="talent">
                <ul>
                    <li className="ta1">
                        <h4><img src="/imgs/recruit/talent_stit01.gif" alt="01.밝고 겸손하며 정직한 인재"/></h4>
                        <img src="/imgs/recruit/talent_txt01.gif"
                             alt="긍정의 에너지를 나누고, 다른 사람을 존중할 줄 아는 겸손함과 작은 일도 소홀히 하지 않는 정직함을 갖춘 인재를 원합니다. "/>
                    </li>
                    <li className="ta2">
                        <h4><img src="/imgs/recruit/talent_stit02.gif" alt="02.열정적이며 책임감이 있는 인재"/></h4>
                        <img src="/imgs/recruit/talent_txt02.gif" alt="열정과 투지로 맡은 일은 끝까지 책임지고 완수해 내는 인재를 원합니다. "/>
                    </li>
                    <li className="ta3">
                        <h4><img src="/imgs/recruit/talent_stit03.gif" alt="03.소통 능력이 원활하고 실행력이 충분한 인재"/></h4>
                        <img src="/imgs/recruit/talent_txt03.gif" alt="신뢰를 바탕으로 원활히 소통하며, 자신감과 탁월한 실행력을 가진 인재를 원합니다."/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Talent;