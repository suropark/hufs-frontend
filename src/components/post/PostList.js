import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import './PostList.css';
function PostList({ match }) {
  const [currentList, setCurrentList] = useState([]);
  const [listPerPage, setListPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.post);
  useEffect(() => {
    const sliced = posts.slice(firstIndex, lastIndex);
    setCurrentList(sliced);
  }, [currentPage]);

  const lastIndex = currentPage * listPerPage; // 10, 20, 30
  const firstIndex = currentPage * listPerPage - listPerPage; // 1, 11, 21..

  return (
    <div>
      <table>
        <TableHeader />
        <TableBody
          currentList={posts.slice(firstIndex, lastIndex)}
          match={match}
        />
      </table>
      <ReactPaginate
        pageCount={Math.ceil(posts.length / 10)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={0}
        breakLabel={''}
        previousLabel={'이전'}
        nextLabel={'다음'}
        onPageChange={(e) => setCurrentPage(e.selected + 1)}
        containerClassName={'pagination-ul'}
        activeClassName={'currentPage'}
        previousClassName={'pageLabel-btn'}
        nextClassName={'pageLabel-btn'}
      />
      <span>
        <Link to="/edit">
          <button>글 작성</button>
        </Link>
      </span>
    </div>
  );
}

export default PostList;

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>글 번호</th>
        <th>제목</th>
        <th>userId</th>
        <th>조회</th>
      </tr>
    </thead>
  );
}

function TableBody({ currentList, match }) {
  return (
    <tbody>
      {currentList ? (
        currentList.map((list, index) => {
          return (
            <tr key={index}>
              <td>{list.id}</td>
              <td>{list.title.slice(0, 4)}</td>
              <td>
                <Link to={`${match.path}/${list.id}`}>{list.userId}</Link>
              </td>
              <td>조회수</td>
            </tr>
          );
        })
      ) : (
        <h2>loading</h2>
      )}
    </tbody>
  );
}
