import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './containers/Header';
import Footer from './containers/Footer';
import Main from './containers/main/Main';

import Hr from './containers/hr/Index';
import Service from './containers/service/Index';
import Ir from './containers/ir/Index';
import Pr from './containers/pr/Index';
import Recruit from './containers/recruit/Index';
import Etc from './containers/etc/Index';

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

        console.log('lo_kr.menu : ', lo_kr.menu);
        console.log('components : ', components);
        return (
            <Router>
                <div id='wrap'>
                    <Header menus={lo_kr.menu} />

                    <Route exact path="/" component={Main} />
                    {/*{
                        lo_kr.menu.map((menuData, idx) => {
                            return (<Route key={idx} path={'/'+ menuData.id +'/**'} render={(...props) => <Hr hrMenu={lo_kr.menu[ idx ]} />} />);
                        })
                    }*/}

                    <Route path='/hr/**' component={Hr} />
                    <Route path='/service/**' component={Service} />
                    <Route path='/ir/**' component={Ir} />
                    <Route path='/pr/**' component={Pr} />
                    <Route path='/recruit/**' component={Recruit} />
                    <Route path='/etc/**' component={Etc} />

                    {/* test page */}
                    <Route path='/components/index' component={ComponentIndex} />

                    <Footer />

                </div>
            </Router>
        )
    }
}

export default App;