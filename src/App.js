import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './containers/Header';
import Footer from './containers/Footer';
import Main from './containers/main/Main';

import Hr from './containers/hr/index';
import Service from './containers/service/Index';
import Ir from './containers/ir/index';
import Pr from './containers/pr/index';
import Recruit from './containers/recruit/index';
import Etc from './containers/etc/index';

import ComponentIndex from './components/Index';

import './resources/sass/app.scss';
import lo_kr from './locale/locale_kr.json';

class App extends React.Component {
    render(){
        const components = {
            "hr" : Hr,
            "service" : Service,
            "ir" : Ir,
            "pr" : Pr,
            "recruit" : Recruit
        };

        console.log(lo_kr.menu);
        return (
            <Router>
                <div id='wrap'>
                    <Header menus={lo_kr.menu} />

                    <Route exact path="/" component={Main} />
                    {
                        lo_kr.menu.map((menuData, idx) => {
                            return (
                                <Route key={idx} path={'/'+ menuData.id +'/**'} 
                                        render={(...props) => React.createElement(components[ menuData.id ], {menu: lo_kr.menu[ idx ]}, null)} />
                                );
                        })
                    }
                {/*
                    <Route path='/hr/**' component={Hr} hrMenu={lo_kr.menu[ 0 ]} />
                    <Route path='/service/**' component={Service} />
                    <Route path='/ir/**' component={Ir} />
                    <Route path='/pr/**' component={Pr} />
                    <Route path='/recruit/**' component={Recruit} />
                    <Route path='/etc/**' component={Etc} />
*/}
                    {/* test page */}
                    <Route path='/components/index' component={ComponentIndex} />

                    <Footer />

                </div>
            </Router>
        )
    }
}

export default App;