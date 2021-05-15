import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
function UserPost({ match }) {
  const { Column } = Table;
  const { Posts } = useSelector((state) => state.user);

  return (
    <div>
      <Table pagination={true} dataSource={Posts}>
        <Column
          title="카테고리"
          dataIndex="id"
          key="id"
          style={{ textAlign: 'center' }}
          render={(text, record) => record.Board.title}
        />
        <Column
          title="제목"
          key="title"
          render={(text, record) => (
            <Link to={`1/${record.id}`}>
              {record.title.length > 25
                ? record.title.slice(0, 25)
                : record.title}
            </Link>
          )}
        />
      </Table>
    </div>
  );
}

export default UserPost;
