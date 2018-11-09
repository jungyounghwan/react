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
                    <SubVisual />

                    <div id="wrap_contents">
                        <SubLocation />

                        <Lnb />

                        <div id="contents">
                            <ContentsTitle />

                            <Route exact path='/service/jobportal' component={Jobportal} />

                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Ir;