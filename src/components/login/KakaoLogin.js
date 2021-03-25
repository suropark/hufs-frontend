import React from 'react';
import { useHistory } from 'react-router-dom';
//import styled from "styled-components";
import kakao_pic from './kakao_pic.png';

function KakaoLogin() {
  const { Kakao } = window;
  const history = useHistory();
  const loginWithKakao = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(`localhost:3000/user/sign-in`, {
          method: 'GET',
          headers: {
            Autorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res.code);
            localStorage.setItem('Kakao_token', res.access_token);
            if (res.code === 200) {
              alert('Sign in Successfully!');
              history.push('/');
            } else {
              alert("Wrong information, or you're not member");
            }
          });
      },
    });
  };

  return (
    <button onClick={() => loginWithKakao()}>
      <img className="loginBtn" alt="kakaoLogin" src={kakao_pic} />
    </button>
  );
}

export default KakaoLogin;
