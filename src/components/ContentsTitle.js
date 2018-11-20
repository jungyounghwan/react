import React from 'react';

class ContentsTitle extends React.Component {

    render(){

        return (
            <div className="contents_title">
                <h2>{this.props.contentTitle}</h2>
            </div>
        );
    }
}

export default ContentsTitle;