import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
function UserInfo() {
  const { id, nickName } = useSelector((state) => state.user); //  유저 리듀서에 있는 유저 정보 가져오기?
  const [nick, onChange, setNick] = useInput(nickName);

  const editNickName = () => {
    console.log(nick);
    axios
      .put('user/nickname', nick)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div style={{ margin: '8px 0' }}>

        {' '}
        <label>아이디</label>
      </div>
      <div>
        <input type="id" value={id} />{' '}
      </div>
      <div style={{ margin: '8px 0' }}>
        <label>닉네임</label>
      </div>
      <div>
        <input
          type="nickName"
          value={nick}
          onChange={onChange}
          style={{ marginRight: '40px' }}
        />
        <button onClick={editNickName}> 닉네임 변경 </button>
      </div>
    </div>
  );
}

export default UserInfo;
