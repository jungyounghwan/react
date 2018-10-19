import React from 'react';

class Tab extends React.Component {

    render(){
        const tabProps = this.props;
        const tabPropsName = tabProps.name;
        const tabList = tabPropsName.map(
            (name, index) => <li key={index} className={"tab_list"+index}><button type="button">{name}</button></li>
        );

        return (
            <ul className={'tab type_' + tabProps.type}>
                {tabList}
            </ul>
        );
    }
}

export default Tab;