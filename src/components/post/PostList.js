import React, { useEffect, useState } from 'react';
import { Link, Switch, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import './PostList.css';
import { Skeleton } from 'antd';
import { postList } from '../../_actions/post_action';
function PostList({ match, history }) {
  const [currentList, setCurrentList] = useState([]);
  const [listPerPage, setListPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  // console.log(match.path.substring(1)); // 게시판 이름
  useEffect(() => {
    dispatch(postList(match))
      .then((response) => {
        if (response.status === 200) {
          setPosts(response.payload.reverse());
        }
      })
      .catch((error) => {
        switch (error.response?.status) {
          case 401:
            alert('로그인하지 않은 사용자');
            history.push('/');
            break;
          case 403:
            alert('접근 권한 오류');
            history.push('/');
            break;
          default:
            break;
        }
      });
  }, []);
  useEffect(() => {
    const sliced = posts.slice(firstIndex, lastIndex);
    setCurrentList(sliced);
    setloading(true);
  }, [currentPage]);

  const lastIndex = currentPage * listPerPage; // 10, 20, 30
  const firstIndex = currentPage * listPerPage - listPerPage; // 1, 11, 21..

  return (
    <div>
      {loading ? (
        <table>
          <TableHeader />
          <TableBody
            currentList={posts.slice(firstIndex, lastIndex)}
            match={match}
          />
        </table>
      ) : (
        <Skeleton />
      )}

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
        <button
          onClick={(e) =>
            history.push({
              pathname: `${match.path}/edit`,
              state: { detail: match.path },
            })
          }
        >
          글 작성
        </button>
      </span>
    </div>
  );
}

export default withRouter(PostList);

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>제목</th>
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
              <td>{post.title.slice(0, 4)}</td>
              <td>
                <Link to={`${match.path}/${post.id}`}>{post.content}</Link>
              </td>
              <td>{post.User === null ? post.User : post.User.nickname}</td>
            </tr>
          );
        })
      ) : (
        <h2>loading</h2>
      )}
    </tbody>
  );
}
