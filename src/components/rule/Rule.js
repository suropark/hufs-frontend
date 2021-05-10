import { AutoComplete } from 'antd';
import React from 'react'
import InformationModal from './InformationModal'
import UseModal from './UseModal'
function Rule() {

    return (
        <div
            className="rule"
            style={{
                opacity: '0.5',
                cursor: 'pointer'
            }}>
            <InformationModal />
            <UseModal />

        </div>
    )

}


export default Rule;