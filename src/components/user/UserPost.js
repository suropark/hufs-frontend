import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function UserPost() {
  const { posts } = useSelector((state) => state.user);
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
        {posts
          ? posts.map((post, index) => {
              return (
                <tr>
                  <td key={index}>{post.postId}</td>
                  <td>
                    <Link to={`list/${post.postId}`}>{post.title}</Link>
                  </td>
                  <td>{post.content}</td>
                </tr>

              );
            })
          : null}
      </table>
    </div>
  );
}

export default UserPost;
