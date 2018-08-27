import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './containers/Header';
import Footer from './containers/Footer';
import Main from './containers/main/Main';
import Hr from './containers/hr/CompanyInfo';
import Service from './containers/service/Jobportal';
import Ir from './containers/ir/ShareholderComposition';
import Pr from './containers/pr/SaraminNews';
import Recruit from './containers/recruit/Talent';
import Sitemap from './containers/etc/Sitemap';

import './resources/sass/app.scss';

class App extends React.Component {
    render(){
        return (
            <Router>
                <div id='wrap'>
                    <Header/>

                    <Route exact path="/" component={Main}  />
                    <Route path='/hr' component={Hr} />
                    <Route path='/service' component={Service} />
                    <Route path='/ir' component={Ir} />
                    <Route path='/pr' component={Pr} />
                    <Route path='/recruit' component={Recruit} />
                    <Route path='/sitemap' component={Sitemap} />

                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;