import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout, Menu } from 'antd';
import UserScrap from '../../components/user/UserScrap';
import UserComment from '../../components/user/UserComment';
import UserInfo from '../../components/user/UserInfo';
import UserPost from '../../components/user/UserPost';
import UserWithdrawl from '../../components/user/UserWithdrawl';
import { useDispatch } from 'react-redux';
import { getUserInfo } from '../../_actions/user_action';
function MyPage(props) {
  const { Header, Content, Footer } = Layout;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo()).then(console.log('cool'));
  }, []);
  // dispatch(getUserInfo()) 마이페이지 접근시 유저관련 정보를 리듀서에 넣자.
  const [click, setClick] = useState('1');
  const onWithdraw = () => {
    axios.get('/api/users/withdraw').then((response) => {
      if (response.data.success) {
        props.history.push('/');
      } else {
        alert('회원 탈퇴');
      }
    });
  };
  const onClick = (event) => {
    setClick(event.key);
  };
  const selectedMenu = () => {
    console.log('project');
    console.log(typeof click);
    switch (click) {
      case '1':
        return <UserInfo />;
      case '2':
        return <UserScrap />;
      case '3':
        return <UserPost />;
      case '4':
        return <UserComment />;
      case '5':
        return <UserWithdrawl />;
      default:
        return <div>error 404</div>;
      // return <NoResultsFound />;
    }
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[click]}>
          <Menu.Item key="1" onClick={onClick}>
            회원정보관리
          </Menu.Item>
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
      <Footer style={{ textAlign: 'center' }}>Footer</Footer>
    </Layout>
  );
}

export default MyPage;
