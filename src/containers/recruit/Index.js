import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SubVisual from '../../components/SubVisual';
import SubLocation from '../../components/SubLocation';
import Lnb from '../Lnb';
import ContentsTitle from '../../components/ContentsTitle';

import Talent from './Talent';
import Education from './Education';
import Welfare from './Welfare';
import Process from './Process';
import SaraminStory from './SaraminStory';

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

                            <Route exact path='/recruit/Talent' component={Talent} />
                            <Route exact path='/recruit/Education' component={Education} />
                            <Route exact path='/recruit/Welfare' component={Welfare} />
                            <Route exact path='/recruit/Process' component={Process} />
                            <Route exact path='/recruit/SaraminStory' component={SaraminStory} />

                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Ir;