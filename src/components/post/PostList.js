import React, { useEffect, useState } from 'react';
import { Link, Switch, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import './PostList.css';
import { Skeleton } from 'antd';
import { postList } from '../../_actions/post_action';
import Header from '../../views/Community/Community';
import { Table, Tag, Input, Space } from 'antd';
import loading from '../../_actions/loading_action';
const { Search } = Input;
const { Column, ColumnGroup } = Table;
function PostList({ match, history }) {
  console.log(match);
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
  }, [match.path]);
  useEffect(() => {
    const sliced = posts.slice(firstIndex, lastIndex);
    setCurrentList(sliced);
    setloading(true);
  }, [currentPage]);

  const lastIndex = currentPage * listPerPage; // 10, 20, 30
  const firstIndex = currentPage * listPerPage - listPerPage; // 1, 11, 21..

  return (
    <div>
      <Header />
      {loading ? (
        <table className="community">
          {' '}
          <Search
            placeholder="검색창"
            allowClear
            onSearch={(e) => console.log(e)}
            style={{
              float: 'right',
              marginBottom: '10px',
              width: '300px',
              height: '30px',
            }}
          />
          <TableBody
            currentList={posts.slice(firstIndex, lastIndex)}
            match={match}
          />
        </table>
      ) : (
        <Skeleton />
      )}
      <div className="bottom">
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
      </div>
    </div>
  );
}

export default withRouter(PostList);

export function TableBody({ currentList, match }) {
  return (
    <>
      {loading ? (
        <Table pagination={false} dataSource={currentList}>
          <Column title="-" dataIndex="id" key="id" />
          <Column
            title="제목"
            key="title"
            render={(text, record) => (
              <Link to={`${match.path}/${record.id}`}>
                {record.title.length > 20
                  ? record.title.slice(0, 20)
                  : record.title}
              </Link>
            )}
          />{' '}
          <Column
            title="작성자"
            render={(text, record) =>
              record.User === null ? (
                <>탈퇴한 사용자</>
              ) : (
                <>{record.User.nickname}</>
              )
            }
            // console.log(record);
            key="User"
          />
          <Column
            title="작성일"
            render={(text, record) =>
              record.createdAt ? record.createdAt.slice(0, 10) : 'none'
            }
            key="createdAt"
          />
          <Column title="추천수" dataIndex="like" key="like" />
        </Table>
      ) : (
        <>
          {' '}
          <Skeleton />
          {console.log(currentList)}
        </>
      )}{' '}
    </>
    // <tbody>
    //   {currentList ? (
    //     currentList.map((post, index) => {
    //       return (
    //         <tr key={index}>
    //           <td>{post.title.slice(0, 4)}</td>
    //           <td>
    //             <Link to={`${match.path}/${post.id}`}>{post.content}</Link>
    //           </td>
    //           <td>{post.User === null ? post.User : post.User.nickname}</td>
    //         </tr>
    //       );
    //     })
    //   ) : (
    //     <h2>loading</h2>
    //   )}
    // </tbody>
  );
}
