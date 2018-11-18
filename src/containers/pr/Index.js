import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SubVisual from '../../components/SubVisual';
import SubLocation from '../../components/SubLocation';
import Lnb from '../Lnb';
import ContentsTitle from '../../components/ContentsTitle';

import SaraminNews from './SaraminNews';
import PressRelease from './PressRelease';
import SaraminAwards from './SaraminAwards';
import Webzine from './Webzine';
import Ad from './Ad';

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

                            <Route exact path='/pr/saraminNews' component={SaraminNews} />
                            <Route exact path='/pr/PressRelease' component={PressRelease} />
                            <Route exact path='/pr/SaraminAwards' component={SaraminAwards} />
                            <Route exact path='/pr/Webzine' component={Webzine} />
                            <Route exact path='/pr/Ad' component={Ad} />

                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Ir;