import React from 'react';
import { Result, Button } from 'antd';

function AuthExpired() {
  return (
    <div>
      <Result
        status="success"
        title="이메일 인증 유효기간(24시간)이 만료되었습니다"
        subTitle="다시 인증 부탁드립니다."
        extra={[
          <Button key="pageDirect">
            <a href="naver.com" target="blank">
              HUFSpace_로 이동하기
            </a>
          </Button>,
        ]}
      />
    </div>
  );
}

export default AuthExpired;
