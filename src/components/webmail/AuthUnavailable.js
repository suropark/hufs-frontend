import React from 'react';
import { Result, Button } from 'antd';

function AuthUnavailable() {
  return (
    <div>
      <Result
        title="유효하지 않은 인증 메일입니다."
        subTitle="메일함을 다시 확인해주세요. 유효한 인증 메일이 없을 경우, 마이페이지에서 재전송 가능합니다."
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

export default AuthUnavailable;
