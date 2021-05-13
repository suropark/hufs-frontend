import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Layout, Menu } from 'antd';
import UserScrap from '../../components/user/UserScrap';
import UserComment from '../../components/user/UserComment';
import UserInfo from '../../components/user/UserInfo';
import UserPost from '../../components/user/UserPost';
import UserWithdraw from '../../components/user/UserWithdraw';
import { useDispatch } from 'react-redux';
import { getUserInfo } from '../../_actions/user_action';
import { withRouter } from 'react-router';
import Page404 from '../Page404/Page404';
import Header1 from '../Header/Header';
import styles from '../../css/MyPage.module.css';
function MyPage(props) {
  const { Header, Content, Footer } = Layout;
  const [userInfo, setUserInfo] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo())
      .then((response) => {
        console.log(response.payload);
        setUserInfo({
          nickname: response.payload.nickName,
          mainMajorId: response.payload.MainMajor.id,
          doubleMajorId: response.payload.DoubleMajor.id,
        });
      })
      .catch((error) => {
        switch (error.status) {
          case 401:
            alert('로그인하지 않은 사용자');
            props.history.push('/');
            break;
          case 403:
            alert('접근 권한 오류');
            props.history.push('/');
            break;
          default:
            break;
        }
      });
  }, []);
  const [click, setClick] = useState('1');

  const onClick = (event) => {
    setClick(event.key);
  };
  const selectedMenu = () => {
    switch (click) {
      case '1':
        return null;
      case '2':
        return <UserScrap />;
      case '3':
        return <UserPost match={props.match} />;
      case '4':
        return <UserComment />;
      case '5':
        return <UserWithdraw />;
      default:
        return <Page404 />;
    }
  };

  return (
    <>
      <Header1 />
      <div className={styles.main}>
        <div className={styles.communitymain}>
          {/* <Card title="마이 페이지" /> */}
          <Layout className={styles.layout}>
            <UserInfo userInfo={userInfo} />
            <Header>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[click]}
              >
                {/* <Menu.Item key="1" onClick={onClick}>
                  회원정보관리
              </Menu.Item> */}
                <Menu.Item key="2" onClick={onClick}>
                  나의 스크랩
                </Menu.Item>
                <Menu.Item key="3" onClick={onClick}>
                  내가 쓴 글{' '}
                </Menu.Item>
                <Menu.Item key="4" onClick={onClick}>
                  내가 쓴 댓글
                </Menu.Item>
                <Menu.Item key="5" onClick={onClick}>
                  회원 탈퇴
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px', margin: '16px 0' }}>
              {selectedMenu()}
            </Content>
            <Footer
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                border: '1px solid white',
              }}
            >
              HUFSpace_
            </Footer>
          </Layout>
        </div>
      </div>
    </>
  );
}

export default withRouter(MyPage);
