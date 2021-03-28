import React from 'react';
import logo from "../../banner/logo.png";
import { Menu, Dropdown, Button, Space, Input } from 'antd';



const { Search } = Input;



function Header() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>


  );
  const onSearch = value => console.log(value);
  const { Search } = Input;

  return (
    <div className="Head">

      <div className="Pagename">
        <a href="/">
          <img src={logo} />
        </a>
      </div>
      <img src="#" className="Image" alt="이미지 들어갈 곳" />
      <span className="loginbar">
        <a href="#">회원가입 </a>
        <a href="#">로그인 </a>
        <a href="#">언어선택</a>

      </span>
      <Space id="Searchbar" direction=" vertical">
        <Search placeholder="검색창" allowClear onSearch={onSearch} style={{ width: '278px' }} />
      </Space>
      {/* <input id="Searchbar"className="Searchbar" value="검색창" /> */}
      <Space direction="vertical">

        <Space id="Menubar">
          <Dropdown overlay={menu} >
            <Button>떠들어 Boo</Button>
          </Dropdown>
          <Dropdown overlay={menu} >
            <Button>학교 해 Boo</Button>
          </Dropdown>
          <Dropdown overlay={menu} >
            <Button>학교 간 Boo</Button>
          </Dropdown>
          <Dropdown overlay={menu}>
            <Button>학교 떠난 Boo</Button>
          </Dropdown>
          <Dropdown overlay={menu} >
            <Button>정면승 Boo</Button>
          </Dropdown>
          <Dropdown overlay={menu} >
            <Button>이거 모르면 바 Boo</Button>
          </Dropdown>

        </Space>
      </Space>

    </div >
  );
}

export default Header;
