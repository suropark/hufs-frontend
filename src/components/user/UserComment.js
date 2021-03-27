import axios from 'axios';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function UserComment() {
  const { myReplies } = useSelector((state) => state.user); //  유저 리듀서에 있는 유저 정보 가져오기?

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>댓글</th>
            <th>게시글</th>
          </tr>
        </thead>
        {myReplies
          ? myReplies.map((comment, index) => {
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
      </table>
    </div>
  );
}

export default UserComment;
