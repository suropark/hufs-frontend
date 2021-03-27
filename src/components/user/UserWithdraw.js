import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { withdrawUser } from '../../_actions/user_action';

function UserWithdraw(props) {
  const dispatch = useDispatch();
  const check = () => {
    const answer = window.confirm('정말 탈퇴하시겠습니까?');
    return answer;
  };
  const onWithdraw = () => {
    if (check()) {
      dispatch(withdrawUser()).then((response) => {
        switch (response.status) {
          case 200:
            alert('회원 탈퇴가 완료되었습니다');
            props.history.push('/');
            break;
          case 401:
            alert('로그인이 필요합니다.');
            props.history.push('/');
            break;
          default:
            break;
        }
      });
    }
  };
  return (
    <>
      <div>회원 탈퇴 이후 복구 불가, </div>
      <button onClick={onWithdraw}>
        <div>회원탈퇴</div>
      </button>{' '}
    </>
  );
}

export default withRouter(UserWithdraw);
