import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
function UserPost({ match }) {
  const { Column } = Table;
  const { Posts } = useSelector((state) => state.user);
  return (
    <div>
      <Table pagination={false} dataSource={Posts}>
        <Column title="-" dataIndex="id" key="id" />
        <Column
          title="내가 쓴 글"
          key="title"
          render={(text, record) => (
            <Link to={`1/${record.id}`}>
              {record.title.length > 30
                ? record.title.slice(0, 29)
                : record.title}
            </Link>
          )}
        />
      </Table>
    </div>
  );
}

export default UserPost;
