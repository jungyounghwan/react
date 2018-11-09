import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SubVisual from '../../components/SubVisual';
import SubLocation from '../../components/SubLocation';
import Lnb from '../Lnb';
import ContentsTitle from '../../components/ContentsTitle';

import ShareholderComposition from './ShareholderComposition';
import Directorate from './Directorate';
import ArticlesAssociation from './ArticlesAssociation';
import FinancialStatements from './FinancialStatements';
import StockInformation from './StockInformation';
import FinancialStatements2 from './FinancialStatements2';
import EarningsRelease from './EarningsRelease';
import DisclosureManage from './DisclosureManage';

class Ir extends React.Component {

    render(){
        return (
            <Router>
                <div id="container">
                    <SubVisual />

                    <div id="wrap_contents">
                        <SubLocation />

                        <Lnb />

                        <div id="contents">
                            <ContentsTitle />

                            <Route exact path='/ir/shareholderComposition' component={ShareholderComposition} />
                            <Route exact path='/ir/Directorate' component={Directorate} />
                            <Route exact path='/ir/ArticlesAssociation' component={ArticlesAssociation} />
                            <Route exact path='/ir/FinancialStatements' component={FinancialStatements} />
                            <Route exact path='/ir/StockInformation' component={StockInformation} />
                            <Route exact path='/ir/FinancialStatements2' component={FinancialStatements2} />
                            <Route exact path='/ir/EarningsRelease' component={EarningsRelease} />
                            <Route exact path='/ir/DisclosureManage' component={DisclosureManage} />

                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Ir;