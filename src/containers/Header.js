import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component {

    render(){

        const pathname = location.pathname.split('/');
        const mainPath = location.pathname;

        return (
            <header id="header" className={mainPath == '/' ? 'main' : pathname[1]}>
                <h1 className="bi"><NavLink activeClassName="active" exact to={"/"}><img src={"/src/resources/images/common/header_logo"+(mainPath==='/'?'_main':'')+".png"} alt="saramin" /></NavLink></h1>
                <ul className="nav">
                    <li><NavLink activeClassName="active" exact to={"/hr/companyInfo"}>사람인HR</NavLink></li>
                    <li><NavLink activeClassName="active" exact to={"/service/jobportal"}>서비스</NavLink></li>
                    <li><NavLink activeClassName="active" exact to={"/ir/shareholderComposition"}>IR</NavLink></li>
                    <li><NavLink activeClassName="active" exact to={"/pr/saraminNews"}>홍보센터</NavLink></li>
                    <li><NavLink activeClassName="active" exact to={"/recruit/talent"}>채용</NavLink></li>
                </ul>
                <div>
                    <ul className="util_option">
                        <li><NavLink activeClassName="active" exact to={"/etc/sitemap"}>SITEMAP</NavLink></li>
                        <li><NavLink className="bg_round" activeClassName="active" exact to={"/en/"}>ENGLISH</NavLink></li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;