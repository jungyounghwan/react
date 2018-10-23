import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './containers/Header';
import Footer from './containers/Footer';
import Main from './containers/main/Main';

import CompanyInfo from './containers/hr/CompanyInfo';
import CompanyHistory from './containers/hr/CompanyHistory';
import VisionMission from './containers/hr/VisionMission';
import Ci from './containers/hr/Ci';
import Ceo from './containers/hr/Ceo';
import Aramin from './containers/hr/Aramin';
import Csr from './containers/hr/Csr';
import Nanum from './containers/hr/Nanum';
import Family from './containers/hr/Family';
import Contact from './containers/hr/Contact';
import Location from './containers/hr/Location';

import Jobportal from './containers/service/Jobportal';

import ShareholderComposition from './containers/ir/ShareholderComposition';
import Directorate from './containers/ir/Directorate';
import ArticlesAssociation from './containers/ir/ArticlesAssociation';
import FinancialStatements from './containers/ir/FinancialStatements';
import StockInformation from './containers/ir/StockInformation';
import FinancialStatements2 from './containers/ir/FinancialStatements2';
import EarningsRelease from './containers/ir/EarningsRelease';
import DisclosureManage from './containers/ir/DisclosureManage';

import SaraminNews from './containers/pr/SaraminNews';
import PressRelease from './containers/pr/PressRelease';
import SaraminAwards from './containers/pr/SaraminAwards';
import Webzine from './containers/pr/Webzine';
import Ad from './containers/pr/Ad';

import Talent from './containers/recruit/Talent';
import Education from './containers/recruit/Education';
import Welfare from './containers/recruit/Welfare';
import Process from './containers/recruit/Process';
import SaraminStory from './containers/recruit/SaraminStory';

import Sitemap from './containers/etc/Sitemap';

import ComponentIndex from './components/Index';

import './resources/sass/app.scss';

class App extends React.Component {
    render(){
        return (
            <Router>
                <div id='wrap'>
                    <Header/>

                    <Route exact path="/main" component={Main}  />
                    <Route exact path='/hr' component={CompanyInfo} />
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

                    <Route exact path='/service' component={Jobportal} />
                        <Route exact path='/service/jobportal' component={Jobportal} />

                    <Route exact path='/ir' component={ShareholderComposition} />
                        <Route exact path='/ir/shareholderComposition' component={ShareholderComposition} />
                        <Route exact path='/ir/Directorate' component={Directorate} />
                        <Route exact path='/ir/ArticlesAssociation' component={ArticlesAssociation} />
                        <Route exact path='/ir/FinancialStatements' component={FinancialStatements} />
                        <Route exact path='/ir/StockInformation' component={StockInformation} />
                        <Route exact path='/ir/FinancialStatements2' component={FinancialStatements2} />
                        <Route exact path='/ir/EarningsRelease' component={EarningsRelease} />
                        <Route exact path='/ir/DisclosureManage' component={DisclosureManage} />

                    <Route exact path='/pr' component={SaraminNews} />
                        <Route exact path='/pr/saraminNews' component={SaraminNews} />
                        <Route exact path='/pr/PressRelease' component={PressRelease} />
                        <Route exact path='/pr/SaraminAwards' component={SaraminAwards} />
                        <Route exact path='/pr/Webzine' component={Webzine} />
                        <Route exact path='/pr/Ad' component={Ad} />

                    <Route exact path='/recruit' component={Talent} />
                        <Route exact path='/recruit/Talent' component={Talent} />
                        <Route exact path='/recruit/Education' component={Education} />
                        <Route exact path='/recruit/Welfare' component={Welfare} />
                        <Route exact path='/recruit/Process' component={Process} />
                        <Route exact path='/recruit/SaraminStory' component={SaraminStory} />

                    <Route exact path='/etc/sitemap' component={Sitemap} />

                    {/* test page */}
                    <Route exact path='/components/index' component={ComponentIndex} />

                    <Footer />

                </div>
            </Router>
        )
    }
}

export default App;