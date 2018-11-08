import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

    render(){

        const pathname = location.pathname.split('/');
        const mainPath = location.pathname;

        return (
            <header id="header" className={mainPath == '/' ? 'main' : pathname[1]}>
                <h1 className="bi"><NavLink activeClassName="active" exact to={"/"}><img src={"/src/resources/images/common/header_logo"+(mainPath==='/'?'_main':'')+".png"} alt="saramin" /></NavLink></h1>
                <ul className="nav">
                    {this.props.menus.map((menuData, idx) => {
                        return (
                                <li key={idx}><NavLink activeClassName="active" exact to={menuData.uri}>{menuData.name}</NavLink></li>
                            );
                    })}
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