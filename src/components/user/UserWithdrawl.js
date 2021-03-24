import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router';

function UserWithdrawl(props) {
  const check = () => {
    const answer = window.confirm('정말 탈퇴하시겠습니까?');
    return answer;
  };
  const onWithdrawl = () => {
    if (check()) {
      axios.delete('user/withdrawl').then((resposne) => {
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
      <button onClick={onWithdrawl}>
        <div>회원탈퇴</div>
      </button>{' '}
    </>
  );
}

export default withRouter(UserWithdrawl);
