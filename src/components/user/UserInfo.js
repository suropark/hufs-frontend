import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import { updateUser } from '../../_actions/user_action';
import MajorSelect from './MajorSelect';
import SecondMajorSelect from './SecondMajorSelect';
function UserInfo() {
  const { nickName, major, secondMajor } = useSelector((state) => state.user); //  유저 스토어에서 닉네임, 전공, 이중전공 가져오기
  const [nick, onChange, setNick] = useInput(nickName);

  const [change, setChange] = useState({});
  const dispatch = useDispatch();
  const onSubmit = () => {
    let data = { nick: nick, ...change }; // 변경 한 닉네임,
    console.log(data);
    const answer = window.confirm('변경은 한 번 ');

    if (answer) {
      dispatch(updateUser(data)).then((response) => {
        if (response.success) {
          alert('닉네임 변경 완료');
        } else {
          alert('닉네임 변경 실패');
        }
      });
    }
  };
  function majorChange(value) {
    setChange({ ...change, major: value });
  }
  function secondMajorChange(value) {
    setChange({ ...change, secondMajor: value });
  }

  useEffect(() => {
    console.log(change);
  }, [change]);
  return (
    <div>
      <div style={{ margin: '8px 0' }}>
        <label>닉네임</label>
      </div>
      <div style={{ margin: '8px 0' }}>
        <input
          type="nickName"
          value={nick}
          onChange={onChange}
          style={{ marginRight: '40px' }}
        />
      </div>
      <label>본전공</label>
      <MajorSelect defaultMajor={major} onChange={majorChange} />
      <label>이중전공/부전공</label>
      <SecondMajorSelect
        defaultSecondMajor={secondMajor}
        onChange={secondMajorChange}
      />
      <button onClick={onSubmit}> 유저 정보 변경 </button>
    </div>
  );
}

export default UserInfo;
