import React from 'react';

class SubVisual extends React.Component {

    render(){

        return (
            <div className="sub_visual">
                <div className="inner">
                    <p>{this.props.subMenu}</p>
                </div>
            </div>
        );
    }
}

export default SubVisual;