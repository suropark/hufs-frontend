import React from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router';
import axios from 'axios';
import { PUBLIC_IP } from '../../../config';
import { message } from 'antd';
function ReactGoogle({ setModalVisible }) {
  const history = useHistory();
  return (
    <>
      <GoogleLogin
        clientId="13311386829-vlj3ciu02fu1tqriq8dqo0a3nsm4f90u.apps.googleusercontent.com"
        onSuccess={(googleData) => {
          console.log(googleData);
          console.log(googleData.profileObj.email);
          axios
            .post(`${PUBLIC_IP}/user/sign-in`, {
              email: googleData.profileObj.email,
              provider: 'google',
            })
            .then((response) => {
              if (response.status === 200) {
                console.log('this?', response);
                message.success('로그인이 정상 완료 되었습니다.');
                history.push('/');
                setModalVisible(false);
              }
            })
            .catch((error) => {
              if (error.response.status === 404) {
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

export default ReactGoogle;
