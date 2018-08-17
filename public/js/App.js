import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../../src/components/Header';
import Main from '../../src/containers/main/Main';
import Hr from '../../src/containers/hr/CompanyInfo';
import Service from '../../src/containers/service/Jobportal';
import Ir from '../../src/containers/ir/ShareholderComposition';
import Pr from '../../src/containers/pr/SaraminNews';
import Recruit from '../../src/containers/recruit/Talent';
import Sitemap from '../../src/containers/etc/Sitemap';


class App extends React.Component {
    render(){
        return (
            <Router>
                <div id='wrap'>
                    <Header/>
                    <div id="container">
                        <Route exact path="/" component={Main}  />
                        <Route path='/hr' component={Hr} />
                        <Route path='/service' component={Service} />
                        <Route path='/ir' component={Ir} />
                        <Route path='/pr' component={Pr} />
                        <Route path='/recruit' component={Recruit} />
                        <Route path='/sitemap' component={Sitemap} />
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;