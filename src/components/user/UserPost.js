import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
function UserPost({ match }) {
  const { Column } = Table;
  const { myPost } = useSelector((state) => state.user);
  return (
    <div>
      <Table pagination={false} dataSource={myPost}>
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
      {/* <table>
        <thead>
          <tr>
            <th>글 번호</th>
            <th>제목</th>
            <th>내용</th>
          </tr>
        </thead>
        {myPost
          ? myPost.map((post, index) => {
              return (
                <tr key={index}>
                  <td>{post.id}</td>
                  <td>
                    <Link to={`1/${post.id}`}>{post.title}</Link>
                  </td>
                </tr>
              );
            })
          : null}
      </table> */}
    </div>
  );
}

export default UserPost;
