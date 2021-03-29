import React from 'react';
import { Result, Button } from 'antd';

function AuthExpired() {
  return (
    <div>
      <Result
        title="이미 인증한 웹메일입니다"
        subTitle="HUFSpace_ 사용이 가능합니다."
        extra={[
          <Button key="pageDirect">
            <a href="/" target="blank">
              HUFSpace_로 이동하기
            </a>
          </Button>,
        ]}
      />
    </div>
  );
}

export default AuthExpired;
