import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function UserPost() {
  const { myPost } = useSelector((state) => state.user);
  return (
    <div>
      <table>
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
      </table>
    </div>
  );
}

export default UserPost;
