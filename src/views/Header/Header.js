import React, { useEffect, useState } from 'react';
import logo from '../../banner/logo.png';
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
        <Link to="/2">졸업생 공간</Link>
      </Menu.Item>
    </Menu>
  );
  const menu3 = (
    <Menu>
      <Menu.Item>
        <Link to="/3">진로 공간</Link>
      </Menu.Item>
    </Menu>
  );
  const menu4 = (
    <Menu>
      <Menu.Item>
        <Link to="/4">장학 공간</Link>
      </Menu.Item>
    </Menu>
  );

  const [login, setLogin] = useState(false);
  useEffect(async () => {
    await axios
      .get(`${PUBLIC_IP}/user`)
      .then((response) => setLogin(true))
      .catch((error) => {
        setLogin(false);
      });
  }, []);

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
                <Link to="/1">떠들어 Boo </Link>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="app">
              <Dropdown overlay={menu2}>
                <Link to="/2">학교 떠난 Boo</Link>
              </Dropdown>
            </Menu.Item>
            <Menu.Item>
              <Dropdown overlay={menu3}>
                <Link to="/3">정면승 Boo</Link>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="setting:4">
              <Dropdown overlay={menu4}>
                <Link to="/4">학교해 Boo </Link>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="alipay">
              <Link to="/5">학교 간 Boo </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/6">이거 모르면 바 Boo </Link>
            </Menu.Item>
          </Menu>
        </Space>
      </Space>
    </div>
  );
}

export default withRouter(Header);
