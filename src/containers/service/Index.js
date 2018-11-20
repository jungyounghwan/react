import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SubVisual from '../../components/SubVisual';
import Lnb from '../Lnb';

import Jobportal from './Jobportal';

class Ir extends React.Component {

    components = {
        "sub_service_jobportal" : Jobportal
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