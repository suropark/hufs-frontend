import axios from 'axios';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
function UserComment() {
  const { Column } = Table;
  const { Replies } = useSelector((state) => state.user); //  유저 리듀서에 있는 유저 정보 가져오기?

  return (
    <div>
      <Table pagination={false} dataSource={Replies}>
        <Column title="-" dataIndex="id" key="id" />
        <Column
          title="내가 쓴 댓글"
          key="content"
          render={(text, record) => (
            <Link to={`1/${record.Post.id}`}>
              {record.title.length > 30
                ? record.title.slice(0, 29)
                : record.title}
            </Link>
          )}
        />{' '}
      </Table>
      {/* <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>댓글</th>
            <th>게시글</th>
          </tr>
        </thead>
        {Replies
          ? Replies.map((comment, index) => {
              return (
                <tr key={index}>
                  <td>{comment.id}</td>
                  <td>{comment.content}</td>
                  <td>
                    <Link to={`1/${comment.Post.id}`}>
                      {comment.Post.title}
                    </Link>{' '}
                  </td>
                </tr>
              );
            })
          : null}
      </table> */}
    </div>
  );
}

export default UserComment;
