import React from 'react';
import SubVisual from '../../components/SubVisual';
import SubLocation from '../../components/SubLocation';
import Lnb from '../Lnb';
import ContentsTitle from '../../components/ContentsTitle';

class Ceo extends React.Component {

    render(){
        return (
            <div id="container">
                <SubVisual />

                <div id="wrap_contents">
                    <SubLocation />

                    <Lnb />

                    <div id="contents">
                        <ContentsTitle />

                        <p>{location.pathname}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ceo;