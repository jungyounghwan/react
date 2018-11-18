import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SubVisual from '../../components/SubVisual';
import SubLocation from '../../components/SubLocation';
import Lnb from '../Lnb';
import ContentsTitle from '../../components/ContentsTitle';

import Jobportal from './Jobportal';

class Ir extends React.Component {

    render(){
        return (
            <Router>
                <div id="container">
                    <SubVisual subMenu={this.props.menu.name} />

                    <div id="wrap_contents">
                        <SubLocation />

                        <Lnb lnbData={this.props.menu} />

                        <div id="contents">
                            <ContentsTitle titleData={this.props.menu} />

                            <p>{location.pathname}</p>

                            <Route exact path='/service/jobportal' component={Jobportal} />

                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Ir;