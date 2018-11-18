import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SubVisual from '../../components/SubVisual';
import SubLocation from '../../components/SubLocation';
import Lnb from '../Lnb';
import ContentsTitle from '../../components/ContentsTitle';

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

    subMenu = (data, depth) => {

        return data.map((menuData, idx) => {
            if (data.sub == undefined) {
                /*return (
                        <Route key={idx} path={menuData.uri} 
                                render={(...props) => React.createElement(components[ menuData.id ], {menu: menuData}, null)} />
                    )*/
            } else {
               data.sub.map((subMenuData, idx) => {
                                return (
                                    <Route key={idx} path={subMenuData.uri} 
                                            render={(...props) => React.createElement(components[ menuData.id ], {menu: lo_kr.menu[ idx ]}, null)} />
                                    );
                            }) 
            }
        })
    }


    render(){

        return (
            <Router>
                <div id="container">
                    <SubVisual subMenu={this.props.menu.name} />

                    <div id="wrap_contents">
                        <Lnb lnbData={this.props.menu} />

                        <div id="contents">
                            <SubLocation />
                            <ContentsTitle titleData={this.props.menu} />

                            <Route exact path='/hr/companyInfo' component={CompanyInfo} />
                            <Route exact path='/hr/companyHistory' component={CompanyHistory} />
                            <Route exact path='/hr/visionMission' component={VisionMission} />
                            <Route exact path='/hr/ci' component={Ci} />
                            <Route exact path='/hr/ceo' component={Ceo} />
                            <Route exact path='/hr/aramin' component={Aramin} />
                            <Route exact path='/hr/csr' component={Csr} />
                            <Route exact path='/hr/nanum' component={Nanum} />
                            <Route exact path='/hr/family' component={Family} />
                            <Route exact path='/hr/contact' component={Contact} />
                            <Route exact path='/hr/location' component={Location} />

                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Hr;