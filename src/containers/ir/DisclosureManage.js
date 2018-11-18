import React from 'react';

class DisclosureManage extends React.Component {

    render(){
        return (
            <div className="disclosure_manage">
                <div className="fi_st2">

                    <object data="/imgs/pdf/saraminhr_dtr3.pdf" type="application/pdf" width="698px" height="880px">
                        <embed src="/imgs/pdf/saraminhr_dtr3.pdf" type="application/pdf" width="698px"
                               height="880px"/>
                    </object>
                    <br/>
                    <a href="/imgs/pdf/saraminhr_dtr2.pdf">&lt;PDF 파일 다운로드 받기&gt;</a>

                </div>
            </div>
        )
    }
}

export default DisclosureManage;