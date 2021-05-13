import axios from 'axios';
import { message, Button, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { PUBLIC_IP } from '../../config';
import { updateUser } from '../../_actions/user_action';
import MajorSelect from './MajorSelect';
import SecondMajorSelect from './SecondMajorSelect';
import styles from '../../css/UserInfo.module.css';
function UserInfo(props) {
  const dispatch = useDispatch();
  const { Providers, webMail, nickName, MainMajor, DoubleMajor, Token } =
    useSelector((state) => state.user);
  const [mainMajorList, setMainMajorList] = useState([]);
  const [doubleMajorList, setDoubleMajorList] = useState([]);
  const [change, setChange] = useState({});
  const [webMailInput, setWebMailInput] = useState(webMail);
  useEffect(async () => {
    await axios
      .all([
        axios.get(`${PUBLIC_IP}/major/main-major`, {
          params: { campusId: 12 },
        }),
        axios.get(`${PUBLIC_IP}/major/double-major`),
      ])
      .then((response) => {
        setMainMajorList(response[0].data.data);
        setDoubleMajorList(response[1].data.data);
      });
  }, []);
  useEffect(() => {
    setChange(props.userInfo);
  }, [props.userInfo]);
  const onSubmit = () => {
    const answer = window.confirm('변경은 한 번입니다.');

    if (answer) {
      dispatch(updateUser(change))
        .then((response) => {
          message.success('수정이 완료되었습니다.');
        })
        .catch((error) => {
          switch (error.response?.status) {
            case 400:
              message.error('닉네임을 변경한지 30일이 지나지 않았을 경우');
              break;
            case 401:
              message.error('로그인하지 않은 사용자');
              props.history.push('/');
              break;
            case 403:
              message.error('접근 권한 오류');
              break;
            case 409:
              message.error('이미 존재하는 닉네임입니다.');
              break;
            default:
              break;
          }
        });
    }
  };
  function MainMajorChange(value) {
    setChange({ ...change, mainMajorId: value });
  }
  function DoubleMajorChange(value) {
    setChange({ ...change, doubleMajorId: value });
  }

  const onAuth = async () => {
    await axios
      .post(`${PUBLIC_IP}/user/email`, webMailInput)
      .then((response) => {
        message.success(
          '이메일이 성공적으로 전송되었습니다. 웹메일을 확인해주세요',
        );
      })
      .catch((error) => {
        switch (error?.response?.status) {
          case 401:
            message.error('로그인이 필요합니다.');
            props.history.push('/');
            break;
          default:
            message.error('알 수 없는 오류 발생');
            break;
        }
      }); // no parameter? 이메일 보내야할거같은데
  };
  return (
    // google, kakao 연동 필요.
    <div>
      {!nickName ? (
        <h3>로딩 중...</h3>
      ) : (
        <div className={styles.card}>
          <div className={styles.image}>이미지</div>
          <div className={styles.info}>
            <div className={styles.email}>
              <label>이메일</label>
              <div>
                <Input
                  value={Providers[0].email}
                  style={{ width: '200px' }}
                  disabled={true}
                ></Input>
              </div>
            </div>
            <div className={styles.webMail}>
              <label>웹메일</label>
              <div>
                {Token?.isEmailAuthenticated ? (
                  <Input
                    disabled
                    value={webMail}
                    style={{ width: '200px' }}
                    suffix={<>@hufs.ac.kr</>}
                  ></Input>
                ) : (
                  <>
                    <Input
                      value={webMail}
                      onChange={(e) => setWebMailInput(e.target.value)}
                      style={{ width: '200px' }}
                      suffix={<>@hufs.ac.kr</>}
                    ></Input>
                    <Button
                      onClick={onAuth}
                      // style={{ marginLeft: '8px' }}
                    >
                      인증하기
                    </Button>
                  </>
                )}
              </div>

              {/* 인증 하기, 인증 여부에 따른 disabled 작성 필요 */}
            </div>
            <div className={styles.nickName}>
              <label>닉네임</label>

              <div>
                <Input
                  style={{ width: '200px' }}
                  type="nickName"
                  placeholder={change.nickname}
                  value={change.nickname}
                  onChange={(e) => {
                    setChange({ ...change, nickname: e.target.value });
                    console.log(change);
                  }}
                />
              </div>
            </div>
            <div className={styles.mainMajor}>
              <label>주전공</label>
              <MajorSelect
                list={mainMajorList}
                defaultMajor={MainMajor.name}
                onChange={MainMajorChange}
              />
            </div>
            <div className={styles.secondMajor}>
              <label>이중/부전공</label>
              <SecondMajorSelect
                list={doubleMajorList}
                defaultSecondMajor={DoubleMajor.name}
                onChange={DoubleMajorChange}
              />
            </div>
            <button onClick={onSubmit}> 수정하기 </button>{' '}
          </div>
        </div>
      )}
    </div>
  );
}

export default withRouter(UserInfo);
