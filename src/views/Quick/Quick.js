import React from 'react';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function Quick() {
  const handleClick = (e) => {};

  return (
    <Menu onClick={handleClick} mode="inline">
      <SubMenu icon={<MailOutlined />} title="Quick Menu">
        <Menu.Item key="1">
          <a
            href="https://wis.hufs.ac.kr/src08/jsp/index.jsp"
            target="_blank"
            title="종합정보시스템"
          >
            종정시
          </a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="https://eclass.hufs.ac.kr/" target="_blank" title="E-class">
            이클래스
          </a>
        </Menu.Item>
        <Menu.Item key="3">
          <a href="http://www.hufs.ac.kr/" target="_blank" title="Home">
            학교 홈페이지
          </a>
        </Menu.Item>
        {/* <Menu.Item key="4"><a title="과 게시판">과 게시판</a></Menu.Item> */}
      </SubMenu>
    </Menu>
  );
}

export default Quick;
