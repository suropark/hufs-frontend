import React, { useState, useEffect, useRef } from 'react';
import { PUBLIC_IP } from '../../../config';
import axios from 'axios';
import { message, Modal, Button } from 'antd';
import kakao_pic from '../style/kakao_pic.png';
import google_pic from '../style/google_pic.png';
import GoogleSignIn  from '../social/GoogleSignIn';
import { useHistory } from 'react-router-dom';

function SignInModal() {
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ emailInfo, setEmailInfo ] = useState({ email: '', provider: '', });
  const { Kakao } = window;
  const history = useHistory();
  

  const signInKakao = async (e) => {
    console.log(e);
    console.log("hi")
    //const kakaoInit = () => {
      Kakao.init('690082dcedf6efeca17e320160913cb3');
      console.log(Kakao.isInitialized());
    //}
    Kakao.Auth.authorize({
      redirectUri: `${PUBLIC_IP}/user/sign-in`,
    });

    // setEmailInfo({ ... emailInfo, email: e.target})
    // console.log(emailInfo);

    const request = await axios
    .get(`${PUBLIC_IP}/user/sign-in`, emailInfo)
    .then((response) => {
      message.success("로그인이 정상 완료 되었습니다.")
      history.push('/');
    })
    .catch((error) => {
      switch (error.response?.status) {
        case 404:
          message.error("회원가입이 되지 않은 사용자입니다. 회원가입 페이지로 넘어갑니다.")
          history.push('/redirect');
      }
    })
  }

 
  //  const authorization = async (e) => {
  //    console.log("here");
  //    console.log(e);
  //    const request = await axios
  //    .post(`${PUBLIC_IP}/user/sign-in/kakao`, emailInfo)
  //    .then((response) => {
  //     message.success("로그인이 정상 완료 되었습니다.")
  //     history.push('/');
  //    })
  //    .catch((error) => {
  //      switch (error.response?.status) {
  //        case 404:
  //          message.error("회원가입이 되지 않은 사용자입니다. 회원가입 페이지로 넘어갑니다.")
  //          history.push('/redirect') //회원가입 페이지로 넘겨주기
  //      }
  //    })
  // }
  

 return (
   <>
    <Button type="text" onClick={() => setModalVisible(true)}>
      로그인
    </Button>
    <Modal
    title="로그인 / LOGIN"
    centered
    okButtunProps={{ style: { display: 'none' } }}
    visible = {modalVisible}
    onOk = {() => setModalVisible(false)}
    onCancel = {() => setModalVisible(false)}
    >
      <GoogleSignIn />
      <a id="custom-login-kakaoBtn" href="javascript:loginWithKakao()">
        <img style={{ cursor: 'pointer' }}
          onClick={signInKakao}
          src={kakao_pic}/>
      </a>
    </Modal>
   </>
 )
}

export default SignInModal;