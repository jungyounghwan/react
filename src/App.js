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

                    <Route exact path="/main" component={Main}  />
                    <Route exact path='/hr/companyInfo' component={Hr} />
                    <Route exact path='/service/jobportal' component={Service} />
                    <Route exact path='/ir/shareholderComposition' component={Ir} />
                    <Route exact path='/pr/saraminNews' component={Pr} />
                    <Route exact path='/recruit/talent' component={Recruit} />
                    <Route exact path='/etc/sitemap' component={Sitemap} />

                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;