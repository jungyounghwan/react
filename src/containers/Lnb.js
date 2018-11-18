import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Lnb extends React.Component {

    subMenu = (data, depth) => {
        if (data.sub == undefined) {
            return;
        }

        const sm = data.sub.map((subMenu, idx) => { 
            return (
                    <li key={idx}><NavLink activeClassName="active" exact to={subMenu.uri}>{subMenu.name}</NavLink>{this.subMenu(subMenu, depth+1)}</li>
            )
        })

        return <div className={"box_depth"+ depth}><ul>{sm}</ul></div>;
    };

    render(){
        return (
            <div id="lnb">
                <ul className="nav">
                    <li><NavLink activeClassName="active" exact to={this.props.lnbData.uri}>{this.props.lnbData.name}</NavLink>
                        {this.subMenu(this.props.lnbData, 2)}
                    </li>
                </ul>
                <div className="lnb_banner">
                    <p>배너여역</p>
                </div>
            </div>
        );
    }
}

export default Lnb;