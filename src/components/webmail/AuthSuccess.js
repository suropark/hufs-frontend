import React from 'react';
import { Result, Button } from 'antd';

function AuthSuccess() {
  return (
    <div>
      <Result
        status="success"
        title="웹메일 인증이 완료되었습니다."
        subTitle="페이지 사용이 가능합니다."
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

export default AuthSuccess;
