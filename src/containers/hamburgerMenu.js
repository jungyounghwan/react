import React from 'react';

class HamburgerMenu extends React.Component {

    render(){
        return (
            <div className="hamburger_menu">
                <input className="menu_btn" type="checkbox" id="menu_btn" />
                <label className="menu_icon" htmlFor="menu_btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li><a href="#work">Our Work</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

        );
    }
}

export default HamburgerMenu;