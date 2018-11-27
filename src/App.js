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
    /*모바일 대응 component 분리 작업*/
    mobileDevice = () => {
        const UserAgent = navigator.userAgent;
        if( UserAgent.match(/iPhone|iPod|iPad|iPad2|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null || window.offsetWidth <= 970) {
            return true
        }else {
            return false
        }
    }
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
                    {
                        lo_kr.menu.map((menuData, idx) => {
                            return (
                                <Route key={idx} path={'/'+ menuData.id +'/**'}
                                        render={(...props) => React.createElement(components[ menuData.id ], {menu: menuData}, null)} />
                                );
                        })
                    }
                    <Route exact path={'/etc/sitemap'} render={(...props) => React.createElement(Etc, {menu: lo_kr.sitemap}, null)} />
                    {/* test page */}
                    <Route path='/components/index' component={ComponentIndex} />

                    <Footer />

                </div>
            </Router>
        )
    }
}

export default App;