import React, { useState } from 'react';
import { Modal } from 'antd';


function Popup() {
    const [yes, setYes] = useState(true);


    const handleButton = () => {
        setYes(false)

    }

    return (
        <div>

            <Modal
                className="temp"
                style={{
                    width: '500px',
                    height: '800px'
                }}
                title="공지"
                visible={yes}
                onCancel={handleButton}
                maskClosable="true"
            >
                <img src="" />
                안녕


            </Modal>

        </div>
    )

}


export default Popup;