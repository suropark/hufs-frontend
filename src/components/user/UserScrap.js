import React from 'react';
import { useSelector } from 'react-redux';

function UserScrap() {
  const { scraps } = useSelector((state) => state.user);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>글 번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>조회</th>
          </tr>
        </thead>
        {scraps
          ? scraps.map((post, index) => {
              return (
                <tr>
                  <td key={index}>{post.postId}</td>
                  <td>제목</td>
                  <td>{post.content}</td>
                </tr>
              );
            })
          : null}
      </table>
    </div>
  );

}

export default UserScrap;
