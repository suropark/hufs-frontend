import React, { useState, useEffect, useRef } from 'react';
import { message, Modal, Button } from 'antd';
import kakao_pic from '../style/kakao_pic.png';
import GoogleSignIn from '../social/GoogleSignIn';
import KakaoSignIn from '../social/KakaoSignIn';

function SignInModal({ setLogin }) {
  const [modalVisible, setModalVisible] = useState(false);

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
      </Modal>
    </>
  );
}

export default SignInModal;
