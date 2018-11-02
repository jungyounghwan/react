import React from 'react';

class Tab extends React.Component {
    targetTab = (e) => {
        const tabArea = e.target.dataset.tabareano;
        const tabNum = e.target.dataset.tabno;
        this.viewTabContent(tabArea, tabNum);
    }


    viewTabContent = (tabArea, tabNum) => {
        const targetArea = document.querySelector('.tabArea' + tabArea);
        const targetTab = targetArea.querySelectorAll('.tab > li');
        const targetCont = targetArea.querySelectorAll('.tab_cont');

        if (targetCont) {
            for (let i=0; i < targetTab.length; i++){
                targetCont[i].style.display = 'none';
                targetTab[i].classList.remove('active');
            }
            targetCont[tabNum].style.display = 'block';
            targetTab[tabNum].classList.add('active');
        }else {
            return
        }

    }

    render(){
        const tabProps = this.props;
        const tabPropsName = tabProps.name;
        const tabList = tabPropsName.map(
            (name, index) => <li key={index} className={`"tab_list"${index} ${index === 0 ? 'active' : ''}`}><button type="button" data-tabareano={tabProps.no} data-tabno={index} onClick={this.targetTab}>{name}</button></li>
        );

        return (
            <ul className={'tab type_' + tabProps.type}>
                {tabList}
            </ul>
        );
    }
}

export default Tab;