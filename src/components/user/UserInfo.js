import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import { updateUser } from '../../_actions/user_action';
import MajorSelect from './MajorSelect';
import SecondMajorSelect from './SecondMajorSelect';
function UserInfo() {
  const dispatch = useDispatch();
  const { nickname, mainMajor, doubleMajor } = useSelector(
    (state) => state.user,
  ); //  유저 스토어에서 닉네임, 전공, 이중전공 가져오기
  // const request = axios.get('/major').then((response) => response.data);
  const request = {
    mainMajor: ['스칸디나비아어', '독일어'],
    doubleMajor: ['11스칸디나비아어', '독일어'],
  };
  const [nick, onChange] = useInput(nickname);
  const [change, setChange] = useState({});
  const onSubmit = () => {
    let data = { nickname: nick, ...change }; // 변경 한 닉네임,
    console.log(data);
    const answer = window.confirm('변경은 한 번 ');

    if (answer) {
      dispatch(updateUser(data)).then((response) => {
        if (response.success) {
          alert('닉네임 변경 완료');
        } else {
          alert(response.payload);
        }
      });
    }
  };
  function mainMajorChange(value) {
    setChange({ ...change, major: value });
  }
  function doubleMajorChange(value) {
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
          type="nickname"
          value={nick}
          onChange={onChange}
          style={{ marginRight: '40px' }}
        />
      </div>
      <label>본전공</label>
      <MajorSelect
        list={request.mainMajor}
        defaultMajor={mainMajor}
        onChange={mainMajorChange}
      />
      <label>이중전공/부전공</label>
      <SecondMajorSelect
        list={request.doubleMajor}
        defaultSecondMajor={doubleMajor}
        onChange={doubleMajorChange}
      />
      <button onClick={onSubmit}> 유저 정보 변경 </button>
    </div>
  );
}

export default UserInfo;
