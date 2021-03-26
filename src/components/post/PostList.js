import React, { useEffect, useState } from 'react';
import { Link, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import './PostList.css';
import { postList } from '../../_actions/post_action';
function PostList({ match }) {
  const [currentList, setCurrentList] = useState([]);
  const [listPerPage, setListPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  // const list = useSelector((state) => state.post.posts);
  console.log(match.path.substring(1)); // 게시판 이름
  useEffect(() => {
    dispatch(postList(match)).then((response) => {
      setPosts(response.payload.reverse());
    });
  }, []);
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
        onPageChange={(event) => setCurrentPage(event.selected + 1)}
        containerClassName={'pagination-ul'}
        activeClassName={'currentPage'}
        previousClassName={'pageLabel-btn'}
        nextClassName={'pageLabel-btn'}
      />
      <span>
        <Link to={`${match.path}/edit`}>
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

export function TableBody({ currentList, match }) {
  return (
    <tbody>
      {currentList ? (
        currentList.map((post, index) => {
          return (
            <tr key={index}>
              <td>{post.id}</td>
              <td>{post.title.slice(0, 4)}</td>
              <td>
                <Link to={`${match.path}/${post.id}`}>{post.userId}</Link>
              </td>
              <td>{post.User.nickname}</td>
            </tr>
          );
        })
      ) : (
        <h2>loading</h2>
      )}
    </tbody>
  );
}
