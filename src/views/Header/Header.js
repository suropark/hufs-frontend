import React, { useEffect, useState } from 'react';
import logo from '../../image/logo.png';
// import mainboo from '../../banner/mainboo.png';
import { Menu, Dropdown, Button, Space, Input, message } from 'antd';
import { Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import SignUp from '../../components/login/SignUp';
import Logout from '../../components/login/Logout';
import Cookies from 'js-cookie';
import axios from 'axios';
import { PUBLIC_IP } from '../../config';
const { Search } = Input;

function Header(props) {
  const menu1 = (
    <Menu>
      <Menu.Item>
        <Link to="/1">자유 공간</Link>
      </Menu.Item>
    </Menu>
  );
  const menu2 = (
    <Menu>
      <Menu.Item>
        <Link to="/2">장학 공간</Link>
      </Menu.Item>
    </Menu>
  );
  const menu4 = (
    <Menu>
      <Menu.Item>
        <Link to="/4">졸업생 공간</Link>
      </Menu.Item>
    </Menu>
  );
  const menu5 = (
    <Menu>
      <Menu.Item>
        <Link to="/5">진로 공간</Link>
      </Menu.Item>
    </Menu>
  );

  const [login, setLogin] = useState(false);
  const [isEmailAuthenticated, setIsEmailAuthenticated] = useState(false);
  useEffect(async () => {
    await axios
      .get(`${PUBLIC_IP}/user`)
      .then((response) => {
        setLogin(true);
      })
      .catch((error) => {
        setLogin(false);
      });
  }, []);
  // function statusCheck() { // 차후 로그인확인을 위함
  //   if (!login) {
  //     return <Link onClick={(e) => alert('로그인필요')}>떠들어Boo</Link>;
  //   } else {
  //     return <Link to="/1">떠들어Boo</Link>;
  //   }
  // }
  return (
    <div className="Head">
      <div className="Pagename">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      {/* <img src={mainboo} className="Image" alt="이미지 들어갈 곳" /> */}
      <span className="loginbar">
        {login ? (
          <Logout setLogin={setLogin} />
        ) : (
          <SignUp setLogin={setLogin} />
        )}
        <Button type="text">
          <Link style={{ color: 'rgba(0, 0, 0, 0.85)' }} to="/mypage">
            My page
          </Link>{' '}
        </Button>
        {/* <Button type="text">언어 선택</Button> */}
      </span>

      <Space direction="vertical">
        <Space id="Menubar">
          <Menu mode="horizontal">
            <Menu.Item key="mail">
              <Dropdown overlay={menu1}>
                <Link to="/1">떠들어Boo</Link>
                {/* {statusCheck()} */}
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="app">
              <Dropdown overlay={menu2}>
                <Link to="/2">학교 해Boo</Link>
              </Dropdown>
            </Menu.Item>
            <Menu.Item>
              <Link to="/3">학교 간 Boo</Link>
            </Menu.Item>
            <Menu.Item key="setting:4">
              <Dropdown overlay={menu4}>
                <Link to="/4">학교 떠난 Boo</Link>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="alipay">
              <Dropdown overlay={menu5}>
                <Link to="/5">정면승Boo</Link>
              </Dropdown>
            </Menu.Item>
            <Menu.Item>
              <Link to="/6">이거 모르면 바Boo</Link>
            </Menu.Item>
          </Menu>
        </Space>
      </Space>
    </div>
  );
}

export default withRouter(Header);
