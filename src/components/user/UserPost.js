import React from 'react';
import { useSelector } from 'react-redux';

function UserPost() {
  const { posts } = useSelector((state) => state.user);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>글 번호</th>
            <th>제목</th>
            <th>userId</th>
            <th>조회</th>
          </tr>
        </thead>
        {posts
          ? posts.map((post, index) => {
              return (
                <>
                  <div key={index}>{post.postId}</div>
                  <div>{post.content}</div>
                </>
              );
            })
          : null}
      </table>
    </div>
  );
}

export default UserPost;
