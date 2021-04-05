import React from 'react';
import logo from '../../banner/logo.png';
import { Menu, Dropdown, Button, Space, Input, message } from 'antd';
import { Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import SignUp from '../../components/login/SignUp';
import Logout from '../../components/login/Logout';
import SearchAll from '../../components/post/SearchAll';
const { Search } = Input;

function Header(props) {
  // const menu = (
  //   <Menu>
  //     <Menu.Item>
  //       <a rel="noopener noreferrer" href="https://www.antgroup.com">
  //         1st menu item
  //       </a>
  //     </Menu.Item>
  //     <Menu.Item>
  //       <a rel="noopener noreferrer" href="https://www.aliyun.com">
  //         2nd menu item
  //       </a>
  //     </Menu.Item>
  //     <Menu.Item>
  //       <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
  //         3rd menu item
  //       </a>
  //     </Menu.Item>
  //   </Menu>
  // );
  const onSearch = (value) => console.log(value);
  const { Search } = Input;
  return (
    <div className="Head">
      <div className="Pagename">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <img src="#" className="Image" alt="이미지 들어갈 곳" />
      <span className="loginbar">
        <SignUp /> <Logout />
        <Button type="text">
          <Link style={{ color: 'rgba(0, 0, 0, 0.85)' }} to="/mypage">
            My page
          </Link>{' '}
        </Button>
        {/* <Button type="text">언어 선택</Button> */}
      </span>
      <SearchAll />
      {/* <input id="Searchbar"className="Searchbar" value="검색창" /> */}
      <Space direction="vertical">
        <Space id="Menubar">
          <Menu mode="horizontal">
            <Menu.Item key="mail">
              {' '}
              <Link to="/1">떠들어 Boo </Link>
            </Menu.Item>
            <Menu.Item key="app">
              <Link to="/2">학교해 boo</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/3">학교 간 boo</Link>
            </Menu.Item>
            <Menu.Item key="setting:4">
              {' '}
              <Link to="/4">학교 떠난 Boo </Link>
            </Menu.Item>
            <Menu.Item key="alipay">
              <Link to="/5"> 정면승 Boo </Link>
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
// {
//   /* <Dropdown overlay={menu}> */
// }
// <Button type="default"></Button>;
// {
//   /* </Dropdown> */
// }
// {
//   /* <Dropdown overlay={menu}> */
// }
// <Button type="default"></Button>;
// {
//   /* </Dropdown> */
// }
// {
//   /* <Dropdown overlay={menu}> */
// }
// <Button type="default" onClick={(e) => props.history.push('/3')}></Button>;
// {
//   /* </Dropdown> */
// }
// {
//   /* <Dropdown overlay={menu}> */
// }
// <Button type="default" onClick={(e) => props.history.push('/4')}>
//   <Link to="/4">학교 떠난 Boo </Link>
// </Button>;
// {
//   /* </Dropdown> */
// }
// {
//   /* <Dropdown overlay={menu}> */
// }
// <Button type="default" onClick={(e) => props.history.push('/5')}>
//   <Link to="/5"> 정면승 Boo </Link>
// </Button>;
// {
//   /* </Dropdown> */
// }
// {
//   /* <Dropdown overlay={menu}> */
// }
// <Button type="default" onClick={(e) => props.history.push('/6')}>
//   <Link to="/6">이거 모르면 바 Boo </Link>
// </Button>;
// {
//   /* </Dropdown> */
// }
