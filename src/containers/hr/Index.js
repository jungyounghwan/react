import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SubVisual from '../../components/SubVisual';

import Lnb from '../Lnb';

import CompanyInfo from './CompanyInfo';
import CompanyHistory from './CompanyHistory';
import VisionMission from './VisionMission';
import Ci from './Ci';
import Ceo from './Ceo';
import Aramin from './Aramin';
import Csr from './Csr';
import Nanum from './Nanum';
import Family from './Family';
import Contact from './Contact';
import Location from './Location';

class Hr extends React.Component {

    components = {
        "sub_hr_companyInfo" : CompanyInfo,
        "sub_hr_companyHistory" : CompanyHistory,
        "sub_hr_visionMission" : VisionMission,
        "sub_hr_ci" : Ci,
        "hr_ceo" : Ceo,
        "sub_hr_aramin" : Aramin,
        "sub_hr_csr" : Csr,
        "sub_hr_nanum" : Nanum,
        "hr_family" : Family,
        "sub_hr_contact" : Contact,
        "sub_hr_location" : Location
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

export default Hr;