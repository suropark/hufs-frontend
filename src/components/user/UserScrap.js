import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteScrap } from '../../_actions/post_action';

function UserScrap() {
  const dispatch = useDispatch();
  const { scraps } = useSelector((state) => state.user);
  const onRemove = (e) => {
    console.log(e.target.value);
    dispatch(deleteScrap(e.target.value)).then((response) => {
      if (response.success) {
        alert('스크랩 삭제');
      } else {
        alert(response.message);
      }
    });
  };
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
                  <td>
                    <button value={post.postId} onClick={onRemove}>
                      스크랩 제거
                    </button>
                  </td>
                </tr>
              );
            })
          : null}
      </table>
    </div>
  );
}

export default UserScrap;
