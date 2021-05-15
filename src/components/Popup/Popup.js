import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import note from '../../image/note.png'
import Cookies from 'js-cookie'


function Popup() {
    const [yes, setYes] = useState(true);

    // time 값 받아와서 저장



    const handleCancelButton = () => {
        setYes(false)


    }
    const handleOKButton = () => {
        setYes(false)
        Cookies.set('CookieCheck', 'confirm', { expires: 7 })
    }


    return (
        <div>

            {!Cookies.get('CookieCheck') ?

                (<Modal
                    id="temp"
                    title="공지"
                    style={{ width: '520px' }}
                    visible={yes}
                    onOk={handleOKButton}
                    okText="일주일 동안 보지 않기 "
                    onCancel={handleCancelButton}
                    maskClosable="false"
                >
                    <img style={{
                        width: '480px',
                        height: '700px'
                    }}
                        src={note} />




            "모든 서비스는 현재, 회원가입과 웹메일 인증을 한 유저에 한해서 이용이 가능합니다."
                </Modal>)
                : null}


        </div>
    )

}


export default Popup;