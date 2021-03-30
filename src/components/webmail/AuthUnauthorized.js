import React from 'react';
import { Result, Button } from 'antd';

function AuthUnauthorized() {
  return (
    <div>
      <Result
        title="접근 권한이 존재하지 않습니다"
        subTitle="인증 상태를 확인해주세요"
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

export default AuthUnauthorized;
