import React from 'react';

class Tab extends React.Component {

    render(){
        const tabProps = this.props.name;
        const tabList = tabProps.map(
            (name, index) => `<li className="tab_list${index}"><button type="button">${name}</button></li>`
        );
        console.log(tabList);
        return (
            <ul className={'tab'}>
                {tabList}
            </ul>
        );
    }
}

export default Tab;