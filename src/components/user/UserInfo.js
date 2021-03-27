import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { PUBLIC_URL } from '../../config';
import useInput from '../../hooks/useInput';
import { updateUser } from '../../_actions/user_action';
import MajorSelect from './MajorSelect';
import SecondMajorSelect from './SecondMajorSelect';
function UserInfo(props) {
  const dispatch = useDispatch();
  const { email, webMail, nickname, mainMajor, doubleMajor } = useSelector(
    (state) => state.user,
  );
  const [mainMajorList, setMainMajorList] = useState([]);
  const [doubleMajorList, setDoubleMajorList] = useState([]);
  useEffect(async () => {
    await axios
      .all([
        axios.get(`${PUBLIC_URL}/major/main-major`),
        axios.get(`${PUBLIC_URL}/major/double-major`),
      ])
      .then((response) => {
        setMainMajorList(response[0].data.data);
        setDoubleMajorList(response[1].data.data);
      });
  }, []);
  const [change, setChange] = useState({
    nickname: nickname,
    majorId: mainMajor,
    majorId: doubleMajor,
  });
  const onSubmit = () => {
    console.log(change);
    const answer = window.confirm('변경은 한 번 ');

    if (answer) {
      dispatch(updateUser(change)).then((response) => {
        switch (response.status) {
          case 200:
            alert('수정이 완료되었습니다.');
            break;
          case 400:
            alert('닉네임을 변경한지 30일이 지나지 않았을 경우');
            break;
          case 401:
            alert('로그인하지 않은 사용자');
            props.history.push('/');
            break;
          case 403:
            alert('접근 권한 오류');
            break;
          case 409:
            alert('이미 존재하는 닉네임입니다.');
            break;
          default:
            break;
        }
      });
    }
  };
  function mainMajorChange(value) {
    setChange({ ...change, majorId: value });
  }
  function doubleMajorChange(value) {
    setChange({ ...change, secondMajorId: value });
  }
  return (
    <div>
      <div style={{ margin: '8px 0' }}>
        <label>로그인 이메일</label>
        <div style={{ margin: '8px 0' }}>{email}</div>
      </div>
      <div style={{ margin: '8px 0' }}>
        <label>웹메일</label>
        <div style={{ margin: '8px 0' }}>{webMail}</div>
      </div>
      <div style={{ margin: '8px 0' }}>
        <label>닉네임</label>
      </div>
      <div style={{ margin: '8px 0' }}>
        <input
          type="nickname"
          placeholder={nickname}
          value={change.nickname}
          onChange={(e) => setChange({ ...change, nickname: e.target.value })}
          style={{ marginRight: '40px' }}
        />
      </div>
      <label>본전공</label>
      <MajorSelect
        list={mainMajorList}
        defaultMajor={mainMajor}
        onChange={mainMajorChange}
      />
      <label>이중전공/부전공</label>
      <SecondMajorSelect
        list={doubleMajorList}
        defaultSecondMajor={doubleMajor}
        onChange={doubleMajorChange}
      />
      <button onClick={onSubmit}> 유저 정보 변경 </button>
    </div>
  );
}

export default withRouter(UserInfo);
