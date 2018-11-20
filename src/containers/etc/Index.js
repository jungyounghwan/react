import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SubVisual from '../../components/SubVisual';
import Lnb from '../Lnb';

import Sitemap from './Sitemap';

class Etc extends React.Component {

    render(){
        return (
            <Router>
                <div id="container">
                    <SubVisual subMenu={this.props.menu.name} />

                    <div id="wrap_contents">

                        <Lnb lnbData={this.props.menu} />

                        <div id="contents">
                            <Route exact path='/etc/sitemap' component={Sitemap} />

                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Etc;