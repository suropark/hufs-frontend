import React, { useState } from 'react'
import { Modal } from 'antd'


function InformationModal() {

    const [isModalVisible, setisModalVisible] = useState(false)

    const show = () => {
        setisModalVisible(true)
    }

    const handleCancel = () => {
        setisModalVisible(false)
    }

    return (
        <>
            <span onClick={show}>개인정보 처리방침 </span>
            <Modal
                title="개인정보 처리방침"
                visible={isModalVisible}
                onCancel={handleCancel}
            >

            </Modal>
        </>
    )
}

export default InformationModal;