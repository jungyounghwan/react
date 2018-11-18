import React from 'react';

class CompanyInfo extends React.Component {

    render(){
        return (
            <div className="company_info">
                <div className="txt_wrap">
                    <div className="c_r">
                        <h3 className="stit"><img src="/imgs/hr/co_in_stlt_01.gif" /></h3>
                        <p><img src="/imgs/hr/co_in_txt_01.gif" /></p>
                        <h3 className="stit"><img src="/imgs/hr/co_in_stlt_02.gif" /></h3>
                        <p><img src="/imgs/hr/co_in_txt_02.png" /></p>
                        <h3 className="stit"><img src="/imgs/hr/co_in_stlt_03.gif" /></h3>
                        <p><img src="/imgs/hr/co_in_txt_03.gif" /></p>
                    </div>
                    <div className="c_l">
                        <h3 className="stit"><img src="/imgs/hr/co_in_stlt_04.gif" /></h3>
                        <p><img src="/imgs/hr/co_in_txt_04.png" /></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CompanyInfo;