import React from 'react';
import { useSelector } from 'react-redux';
function UserInfo() {
  const { id, nickName } = useSelector((state) => state.user); //  유저 리듀서에 있는 유저 정보 가져오기?

  return (
    <div>
      <div>
        {' '}
        <label>아이디</label>
      </div>
      <div>
        <input type="id" value={id} />{' '}
      </div>
      <div>
        {' '}
        <label>닉네임</label>
      </div>
      <div>
        <input type="nickName" value={nickName} />
      </div>
    </div>
  );
}

export default UserInfo;
