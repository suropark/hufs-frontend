import axios from 'axios';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
function UserComment() {
  const { comments } = useSelector((state) => state.user); //  유저 리듀서에 있는 유저 정보 가져오기?
  // const [currentList, setCurrentList] = useState([]);
  // const [listPerPage, setListPerPage] = useState(10);
  // const [currentPage, setCurrentPage] = useState(1);
  // useEffect(() => {
  //   const sliced = comments.slice(firstIndex, lastIndex);
  //   setCurrentList(sliced);
  // }, [currentPage]);
  // const lastIndex = currentPage * listPerPage; // 10, 20, 30
  // const firstIndex = currentPage * listPerPage - listPerPage; // 1, 11, 21..

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>글 번호</th>
            <th>제목</th>
            <th>댓글 내용</th>
            <th>날짜</th>
          </tr>
        </thead>
        {comments
          ? comments.map((comment) => {
              return (
                <tr>
                  <td>{comment.postId}</td>
                  <td>{comment.postTitle}</td>
                  <td>{comment.content}</td>
                </tr>
              );
            })
          : null}
      </table>
    </div>
  );
}

export default UserComment;
