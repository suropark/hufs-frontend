import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button, Space, message } from 'antd';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { withdrawUser } from '../../_actions/user_action';
import { ExclamationCircleOutlined } from '@ant-design/icons';
function UserWithdraw(props) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  function confirm() {
    Modal.confirm({

      title: '정말로 회원을 탈퇴하시겠습니까? 😢',
      // icon: <ExclamationCircleOutlined />,
      content: 'HUFSpace_',

      cancelText: '취소',
      okText: '탈퇴하기',
      onOk() {
        onWithdraw();
      },
    });
  }
  const onWithdraw = () => {
    dispatch(withdrawUser())
      .then((response) => {
        message.success('회원 탈퇴가 완료되었습니다.');
        props.history.push('/');
      })
      .catch((error) => {
        switch (error.reponse?.status) {
          case 401:
            message.error('로그인이 필요합니다');
            props.history.push('/');
          default:
            message.error(error.response?.status);
            break;
        }
      });
  };
  return (
    <div
      className="withdraw"
    >
      <div>회원 탈퇴 이후 정보들을 복구 불가합니다  </div>
      <div>😭😭😭😭😭😭😭😭😭😭😭😭😭</div>
      <Button onClick={confirm}>Confirm</Button>
    </div>
  );
}

export default withRouter(UserWithdraw);
