import React from 'react';
import logo from '../../banner/logo.png';
// import mainboo from '../../banner/mainboo.png';
import { Menu, Dropdown, Button, Space, Input, message } from 'antd';
import { Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import SignUp from '../../components/login/SignUp';
import Logout from '../../components/login/Logout';
import SearchAll from '../../components/post/SearchAll';
import Cookies from 'js-cookie';
const { Search } = Input;

function Header(props) {
  const menu1 = (
    <Menu>
      <Menu.Item>
        <Link to="/1">자유공간</Link>
      </Menu.Item>
    </Menu>
  );
  const menu2 = (
    <Menu>
      <Menu.Item>
        <Link to="/2">졸업생공간</Link>
      </Menu.Item>
    </Menu>
  );

  const menu3 = (
    <Menu>
      <Menu.Item>
        <Link to="/3">진로공간</Link>
      </Menu.Item>
    </Menu>
  );
  const menu4 = (
    <Menu>
      <Menu.Item>
        <Link to="/calendar">장학공간</Link>
      </Menu.Item>
    </Menu>
  );
  const menu5 = (
    <Menu>
      <Menu.Item>
        <Link to="/map">서울</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/map">글로벌</Link>
      </Menu.Item>
    </Menu>
  );
  // const menu6 = (
  //   <Menu>
  //     <Menu.Item>
  //       <Link to="/6">
  //         자유공간
  //         </Link>
  //     </Menu.Item>

  //   </Menu >
  // )

  const onSearch = (value) => console.log(value);
  const { Search } = Input;
  return (
    <div className="Head">
      <div className="Pagename">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      {/* <img src={mainboo} className="Image" alt="이미지 들어갈 곳" /> */}
      <span className="loginbar">
        {Cookies.get('user') === undefined ? <SignUp /> : <Logout />}
        <Button type="text">
          <Link style={{ color: 'rgba(0, 0, 0, 0.85)' }} to="/mypage">
            My page
          </Link>{' '}
        </Button>
        {/* <Button type="text">언어 선택</Button> */}
      </span>
      <SearchAll />

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
                <Link to="/calendar">학교해 Boo </Link>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="alipay">
              <Dropdown overlay={menu5}>
                <Link to="/map">학교 간 Boo </Link>
              </Dropdown>
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
