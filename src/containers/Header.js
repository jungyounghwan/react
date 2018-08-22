import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component {
    render(){
        return (
            <header id="header">
                <p className="ci"><NavLink activeClassName="active" exact to={"/"}>saramin</NavLink></p>
                <ul className="nav">
                    <li><NavLink activeClassName="active" to={"/hr"}>사람인HR</NavLink></li>
                    <li><NavLink activeClassName="active" to={"/service"}>서비스</NavLink></li>
                    <li><NavLink activeClassName="active" to={"/ir"}>IR</NavLink></li>
                    <li><NavLink activeClassName="active" to={"/pr"}>홍보센터</NavLink></li>
                    <li><NavLink activeClassName="active" to={"/recruit"}>채용</NavLink></li>
                </ul>
                <ul className="util_option">
                    <li><NavLink to={"/sitemap"}>SITEMAP</NavLink></li>
                    <li><NavLink to={"/en/"}>ENGLISH</NavLink></li>
                </ul>
            </header>
        );
    }
}

export default Header;