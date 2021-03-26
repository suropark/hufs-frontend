import React from 'react';
// import GoogleLogin from '../../components/login/GoogleLogin';
import KakaoLogin from '../../components/login/KakaoLogin';

function LoginPage() {
  return (
    <div>
      <div>
        <KakaoLogin />
        {/* <GoogleLogin /> */}
      </div>
    </div>
  );
}

export default LoginPage;
