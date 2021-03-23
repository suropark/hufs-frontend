import React from 'react';
// import GoogleLogin from '../../components/login/GoogleLogin';
import KakaoLogin from '../../components/login/KakaoLogin';
import LoginForm from '../../components/login/LoginForm';

function LoginPage() {
  return (
    <div>
      <LoginForm />

      <div>
        <KakaoLogin />
        {/* <GoogleLogin /> */}
      </div>
    </div>
  );
}

export default LoginPage;
