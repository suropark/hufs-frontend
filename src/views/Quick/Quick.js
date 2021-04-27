import React from 'react';
import { Menu, Affix } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function Quick() {



  const handleClick = e => {
    console.log('click ', e);
  };
  return (
    <Affix offsetTop={250} >
      <Menu
        onClick={handleClick}


        mode="inline"
      >
        <SubMenu icon={<MailOutlined />} title="Quick Menu">
          <Menu.Item key="1"><a href="https://wis.hufs.ac.kr/src08/jsp/index.jsp"
            target="_blank"
            title="종합정보시스템">종정시</a></Menu.Item>
          <Menu.Item key="10"><a title="시간표">시간표</a></Menu.Item>
          <Menu.Item key="11"><a title="장학 게시판">장학 게시판</a></Menu.Item>
          <Menu.Item key="12"><a title="과 게시판">과 게시판</a></Menu.Item>
        </SubMenu>
      </Menu >
    </Affix>

  );
}


export default Quick;
