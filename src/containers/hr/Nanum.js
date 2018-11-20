import React from 'react';
import SubLocation from '../../components/SubLocation';
import ContentsTitle from '../../components/ContentsTitle';

class Nanum extends React.Component {

    render(){
        return (
            <div>
                <SubLocation />
                <ContentsTitle contentTitle={this.props.menu.name} />

                <div className="nanum">

                </div>
            </div>
        )
    }
}

export default Nanum;