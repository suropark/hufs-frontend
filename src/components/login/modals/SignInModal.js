import React, { useState, useEffect, useRef } from 'react';
import { message, Modal, Button } from 'antd';
import kakao_pic from '../style/kakao_pic.png';
import GoogleSignIn from '../social/GoogleSignIn';
import KakaoSignIn from '../social/KakaoSignIn';
// import google_pic from '../style/google_pic.png';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import { PUBLIC_IP } from '../../../config';

function SignInModal({ setLogin }) {
  const [modalVisible, setModalVisible] = useState(false);
  // const [ emailInfo, setEmailInfo ] = useState({ email: '', provider: '', });
  // const { Kakao } = window;
  // const history = useHistory();

  return (
    <>
      <Button type="text" onClick={() => setModalVisible(true)}>
        로그인
      </Button>
      <Modal
        title="로그인 / LOGIN"
        centered
        okButtunProps={{ style: { display: 'none' } }}
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      >
        <GoogleSignIn setLogin={setLogin} setModalVisible={(modalState) => setModalVisible(modalState)} />
        <img
          style={{ cursor: 'pointer' }}
          onClick={KakaoSignIn}
          src={kakao_pic}
        />
      </Modal>
    </>
  );
}

export default SignInModal;
