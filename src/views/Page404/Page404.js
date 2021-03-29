import React from 'react';
import { Result, Button } from 'antd';
import { withRouter } from 'react-router';

function Page404(props) {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="존재하지 않는 페이지입니다. 
        Sorry, the page you visited does not exist."
        extra={
          <Button onClick={(e) => props.history.push('/')} type="link">
            HUFSpace_로 이동
          </Button>
        }
      />
    </div>
  );
}

export default withRouter(Page404);
