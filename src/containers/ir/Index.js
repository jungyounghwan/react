import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SubVisual from '../../components/SubVisual';
import Lnb from '../Lnb';

import ShareholderComposition from './ShareholderComposition';
import Directorate from './Directorate';
import ArticlesAssociation from './ArticlesAssociation';
import FinancialStatements from './FinancialStatements';
import StockInformation from './StockInformation';
import FinancialStatements2 from './FinancialStatements2';
import EarningsRelease from './EarningsRelease';
import DisclosureManage from './DisclosureManage';

class Ir extends React.Component {

    components = {
        "sub_ir_shareholderComposition" : ShareholderComposition,
        "sub_ir_directorate" : Directorate,
        "sub_ir_articlesAssociation" : ArticlesAssociation,
        "ir_financialStatements" : FinancialStatements,
        "ir_stockInformation" : StockInformation,
        "ir_financialStatements2" : FinancialStatements2,
        "ir_earningsRelease" : EarningsRelease,
        "ir_disclosureManage" : DisclosureManage
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