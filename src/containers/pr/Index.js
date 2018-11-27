import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SubVisual from '../../components/SubVisual';
import Lnb from '../Lnb';

import SaraminNews from './SaraminNews';
import PressRelease from './PressRelease';
import SaraminAwards from './SaraminAwards';
import Webzine from './Webzine';
import Ad from './Ad';

class Ir extends React.Component {
    components = {
        "pr_saraminNews" : SaraminNews,
        "pr_pressRelease" : PressRelease,
        "pr_saraminAwards" : SaraminAwards,
        "pr_webzine" : Webzine,
        "pr_ad" : Ad
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