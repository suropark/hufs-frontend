import React, { useState } from 'react';
import axios from 'axios';
import { message, Modal, Button } from 'antd';
import kakao_pic from '../style/kakao_pic.png';
import google_pic from '../style/google_pic.png';
import { PUBLIC_URL } from '../../../config';
const SignInModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const signInGoogle = async (e) => {
    const request = await axios({
      method: 'get',
      url: `${PUBLIC_URL}/user/sign-in/google`,
      headers: {
        accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      // .get(`http://localhost:5000/user/sign-in/google`)

      .then((response) => {
        message.success('소셜 로그인 성공!');
      })
      .catch((error) => {
        message.error('로그인 실패');
      });
  };

  const signInKakao = async (e) => {
    const request = await axios({
      method: 'get',
      url: `${PUBLIC_URL}/user/sign-in/google`,
      headers: {
        accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      // .get(`http://127.0.0.1:5000/user/sign-in/kakao`)

      .then((response) => {
        message.success('소셜 로그인 성공!');
      })
      .catch((error) => {
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
          src={google_pic}
        />
        <a href={`${PUBLIC_URL}/user/sign-in/kakao`}>
          <img
            style={{ cursor: 'pointer', marginLeft: '66px' }}
            // onClick={signInKakao}
            src={kakao_pic}
          />
        </a>
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
