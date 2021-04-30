import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router';
import axios from 'axios';
import { PUBLIC_IP } from '../../../config';
import { message } from 'antd';

function GoogleSignIn ({ setModalVisible, modalVisible, SignInModal }) {
  const history = useHistory();
  const [ modalState, setModalState ] = useState(true);
 
  console.log("Where are you", setModalVisible);
  console.log("work?", modalState);

  return (
    <>
      <GoogleLogin
        clientId="13311386829-vlj3ciu02fu1tqriq8dqo0a3nsm4f90u.apps.googleusercontent.com"
        onSuccess={(googleData) => {
          console.log(googleData.profileObj.email);
          axios
            .post(`${PUBLIC_IP}/user/sign-in`, {
              email: googleData.profileObj.email,
              provider: 'google',
            }, {withCredentials : true})
            .then((response) => {
              if (response.status === 200) {
                console.log('this?', response);
                message.success('로그인이 정상 완료 되었습니다.');
                history.push('/');
                //SignInModal.setModalVisible(false);
                setModalState(false);
                setModalVisible(false);
                //console.log("::",modalState)
                //console.log(":::", setModalVisible(false))
              }
            })
            .catch((error) => {
              //setModalState(true);
              if (error.response?.status === 404) {
                history.push('/register', {
                  email: googleData.profileObj.email,
                  provider: 'google',
                });
              }
            });
        }}
        onFailure={(e) => console.log(e)}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
}

export default GoogleSignIn;
