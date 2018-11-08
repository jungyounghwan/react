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

    render(){

        return (
            <Router>
                <div id="container">
                    <SubVisual />

                    <div id="wrap_contents">
                        <SubLocation />

                        <Lnb hrData={this.props.hrMenu} />

                        <div id="contents">
                            <ContentsTitle hrData={this.props.hrMenu} />


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