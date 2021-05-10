import React, { useState } from 'react'
import { Modal } from 'antd'

function UseModal() {

    const [isModalVisible, setisModalVisible] = useState(false)

    const show = () => {
        setisModalVisible(true)
    }

    const handleCancel = () => {
        setisModalVisible(false)
    }

    return (
        <>
            <span onClick={show}>이용약관 </span>
            <Modal
                title="이용약관"
                visible={isModalVisible}
                onCancel={handleCancel}
            >

            </Modal>
        </>
    )
}

export default UseModal;