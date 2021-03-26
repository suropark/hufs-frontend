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
      dispatch(withdrawUser()).then((resposne) => {
        if (resposne.data.withdrawlSuccess) {
          alert('회원 탈퇴 완료');
          props.history.push('/');
        } else {
          alert('회원 탈퇴 실패.');
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
