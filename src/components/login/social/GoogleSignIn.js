import React, { useState, useEffect, useRef } from 'react';
import { PUBLIC_IP } from '../../../config';
import axios from 'axios';
import { message, Modal, Button } from 'antd';
import google_pic from '../style/google_pic.png';
import { useHistory } from 'react-router-dom';


function GoogleSignIn() {
    const googleLoginBtn = useRef(null);
    const [token, setToken] = useState("");
    const [emailInfo, setEmailInfo] = useState({ email : ' ' })
    const history = useHistory();

    useEffect(() => {
      googleSDK();
    }, []);
  
  
  //SDK 초기 설정 및 내 API초기화
   const googleSDK = () => {
      window.googleSDKLoaded = () => {
        console.log(window.gapi);
        window.gapi.load("auth2", () => {
          const auth2 = window.gapi.auth2.init({
            client_id:
              "13311386829-vlj3ciu02fu1tqriq8dqo0a3nsm4f90u.apps.googleusercontent.com",
            scope: "profile email",
          });
          //버튼 클릭시 사용자 정보 불러오기
           auth2.attachClickHandler(
            googleLoginBtn.current,
            {},
            (googleUser) => {
              const profile = googleUser.getBasicProfile();
              console.log(profile);
              console.log(`Token || ${googleUser.getAuthResponse().id_token}`);
              setToken(googleUser.getAuthResponse().id_token);
              console.log(`ID: ${profile.getId()}`);
              console.log(`Name: ${profile.getName()}`);
              console.log(`Image URL: ${profile.getImageUrl()}`);
              console.log(`Email: ${profile.getEmail()}`);
              console.log(profile.At);
              setEmailInfo({ ...emailInfo, email: profile.At });
              //console.log(`email is saved:`, emailInfo); 확인
            },
            (error) => {
              alert(JSON.stringify(error, undefined, 2));
            }
          );
        });
      };
     //구글 SDK 불러오기
         (function (d, s, id) {
        let js;
        const fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "google-jssdk");
    };
    
    const authorization = async (e) => {
        //console.log("here"); 확인
        console.log(e);
        const request = await axios
        .get(`${PUBLIC_IP}/user/sign-in/kakao`, emailInfo)
        //.get(`http://52.78.2.40:8080/user.sign-in/kakao`)
        .then((response) => {
        //console.log("this?", response); 확인
        message.success("로그인이 정상 완료 되었습니다.")
        
        history.push('/');
        })
        .catch((error) => {
          //console.log("error?", error); 확인
          history.push('/redirect');
          switch (error.response?.status) {
            case 404:
              message.error("회원가입이 되지 않은 사용자입니다. 회원가입 페이지로 넘어갑니다.");
              history.push('/redirect');
          }
        })
     }

     return (
        // <Button id="gSignInWrapper">
        <>
        <span class="label" />
        <div ref={googleLoginBtn} id="customBtn" className="customGPlusSignIn">
        <img style={{ cursor: 'pointer' }}
          onClick = {authorization}
          src={google_pic}/>
        </div>
        </>
        //</Button>
    );
}

export default GoogleSignIn;