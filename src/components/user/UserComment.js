import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
function UserComment() {
  const { Column } = Table;
  const { Replies } = useSelector((state) => state.user); //  유저 리듀서에 있는 유저 정보 가져오기?


  return (
    <div>
      <Table pagination={true} dataSource={Replies}>
        <Column
          title="카테고리"
          dataIndex="id"
          key="id"
          render={(text, record) => record.Post?.Board?.title}
        />
        <Column
          title="내가 쓴 댓글"
          key="content"
          render={(text, record) => (
            <Link to={`1/${record?.Post?.id}`}>
              {record.content.length > 25
                ? record.content.slice(0, 25)
                : record.content}
            </Link>
          )}
        />{' '}
      </Table>
    </div>
  );
}

export default UserComment;
