import { render } from '@testing-library/react';
import React, { useState } from 'react';
import axios from 'axios';
// import SignUpModal from './signUpModal';
import { message, Modal, Button } from 'antd';
import kakao_pic from '../style/kakao_pic.png';
import google_pic from '../style/google_pic.png';
const SignInModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const signInGoogle = async (e) => {
    const request = await axios
      .get(`http://52.78.2.40:8080/user/sign-in/google`)
      .then((response) => {
        console.log(response.status);
        message.success('Social Sign in Successfully');
      })
      .catch((error) => {
        console.log(error);
        message.error('로그인 실패');
      });
  };

  const signInKakao = async (e) => {
    const request = await axios
      .get(`http://52.78.2.40:8080/user/sign-in/kakao`)
      .then((response) => {
        console.log(response.status);
        message.success('Sign in Successfully');
      })
      .catch((error) => {
        console.log(error);
        message.error('로그인 실패');
      });
  };

  return (
    <>
      <Button type="text" onClick={() => setModalVisible(true)}>
        로그인
      </Button>
      <Modal
        title="로그인 / LOGIN"
        centered
        okButtonProps={{ style: { display: 'none' } }}
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      >
        <img
          style={{ cursor: 'pointer' }}
          onClick={signInGoogle}
          src={kakao_pic}
        />
        <img
          style={{ cursor: 'pointer', marginLeft: '66px' }}
          onClick={signInKakao}
          src={google_pic}
        />
      </Modal>
    </>
  );
};

export default SignInModal;

// <Modal
//   show={show}
//   onHide={onHide}
//   size="lg"
//   aria-labelledby="contained-modal-title-vcenter"
//   centered
// >
//   <Container>
//     <Modal.Header closeButton>
//       <Modal.Title id="contained-modal-title-vcenter">Sign In</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <button
//         id="customBtn"
//         className="customG"
//         style={{ display: 'inline' }}
//         onClick={signInGoogle}
//       >
//         구글로그인
//       </button>
//       <button
//         id="customBtn"
//         className="customK"
//         style={{ display: 'inline' }}
//         onClick={signInKakao}
//       >
//         카카오로그인
//       </button>
//     </Modal.Body>
//     <Modal.Footer>
//       <Button onClick={onHide}>Close</Button>
//     </Modal.Footer>
//   </Container>
// </Modal>
