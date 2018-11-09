import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Lnb extends React.Component {

    subMenu = (data, depth) => {
        if (data.sub == undefined) {
            return;
        }
        console.log("submenu", data, depth);
        const sm = data.sub.map((subMenu, idx) => { 
            return (
                    <li key={idx}><NavLink activeClassName="active" exact to={subMenu.uri}>{subMenu.name}</NavLink>{this.subMenu(subMenu, 3)}</li>
            )
        })

        return <div className={"box_depth"+ depth}><ul>{sm}</ul></div>;
    };

    render(){
        return (
            <div id="lnb">
                <ul className="nav">
                    {/*<li><NavLink activeClassName="active" exact to={this.props.hrData.uri}>{this.props.hrData.name}</NavLink>
                        {this.subMenu(this.props.hrData, 2)}
                    </li>*/}
                </ul>
                <div className="lnb_banner">
                    <a href="http://saraminhr.co.kr/10th/" target="_blank" title="새창"><img src="http://saraminhr.co.kr/imgs/pr/bnr_sub10th2.png" alt="사람인HR 창립10주년 기념행사" /></a>
                </div>
            </div>
        );
    }
}

export default Lnb;