import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SubVisual from '../../components/SubVisual';
import Lnb from '../Lnb';

import Talent from './Talent';
import Education from './Education';
import Welfare from './Welfare';
import Process from './Process';
import SaraminStory from './SaraminStory';

import SaraminNews from '../pr/SaraminNews';
import PressRelease from '../pr/PressRelease';
import SaraminAwards from '../pr/SaraminAwards';
import Webzine from '../pr/Webzine';
import Ad from '../pr/Ad';

class Ir extends React.Component {

    components = {
        "recruit_talent" : Talent,
        "recruit_education" : Education,
        "recruit_welfare" : Welfare,
        "recruit_process" : Process,
        "recruit_saraminStory" : SaraminStory
    };

    subMenu = (data) => {
        return data.map((subMenuData, idx) => {
            if (subMenuData.sub == undefined){
                return (
                    <Route key={idx} path={subMenuData.uri}
                           render={(...props) => React.createElement(this.components[ subMenuData.id ], {menu: subMenuData}, null)} />
                )
            } else {
                return this.subMenu(subMenuData.sub)
            }
        })
    };

    render(){
        return (
            <Router>
                <div id="container">
                    <SubVisual subMenu={this.props.menu.name} />

                    <div id="wrap_contents">

                        <Lnb lnbData={this.props.menu} />

                        <div id="contents">

                            {
                                this.subMenu(this.props.menu.sub, 2)
                            }

                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Ir;