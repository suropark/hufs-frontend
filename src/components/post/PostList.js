import React, { useEffect, useState } from 'react';
import { Link, Switch, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { message, Skeleton, Pagination } from 'antd';
import { postList } from '../../_actions/post_action';
import { Button, Table } from 'antd';
import PostSearch from './PostSearch';
import PostSub from './PostSub';
import { findBoardName } from './PostSub'

const { Column } = Table;
function PostList({ match, history }) {
  const [currentList, setCurrentList] = useState([]);
  const [listPerPage, setListPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  // console.log(match.url.substring(1)); // 게시판 이름
  useEffect(() => {
    dispatch(postList(match))
      .then((response) => {
        if (response.status === 200) {
          const postKey = response.payload.map((post, key) => {
            return { ...post, key: key + 1 };
          });
          setPosts(postKey.reverse());
          setloading(true);
        }
      })
      .catch((error) => {
        switch (error.response?.status) {
          case 401:
            message.error('로그인하지 않은 사용자');
            history.push('/');
            break;
          case 403:
            message.error('접근 권한 오류');
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
  }, [posts, currentPage]);

  const lastIndex = currentPage * listPerPage; // 10, 20, 30
  const firstIndex = currentPage * listPerPage - listPerPage; // 1, 11, 21..
  // console.log(posts);
  return (
    <>
      {' '}
      <table className="community-main">
        <PostSub match={match} />
        {''}
        <div className="community-box">
          <PostSearch setPosts={setPosts} match={match} />
          <TableBody
            currentList={posts.slice(firstIndex, lastIndex)}
            match={match}
            loading={loading}
          />
          <Button
            className="makepost"
            onClick={(e) =>
              history.push({
                pathname: `${match.path}/edit`,
                state: { detail: match.path },
              })
            }
          >
            글 작성
          </Button>
          <div className="bottom">
            <Pagination
              className="postpagination"
              defaultCurrent={1}
              total={posts.length} //전체 게시물 개수 받음
              onChange={(e) => setCurrentPage(e)}
              pageSize={10} //페이지당 10개
              showSizeChanger={false}
            />
          </div>
        </div>
      </table>
    </>
  );
}

export default withRouter(PostList);

export function TableBody({ currentList, match, loading }) {
  return (
    <>
      {loading ? (
        <Table pagination={false} dataSource={currentList}>
          <Column title="글 번호" dataIndex="key" key="key" />
          <Column
            title="제목"
            key="title"
            render={(text, record) => (
              <Link to={`${match.path}/${record.id}`}>
                {record.title.length > 25
                  ? record.title.slice(0, 25)
                  : record.title}
                {/* {true ? record.Replies[0].count : null} */}
                {record.repliesCount ? (
                  <span style={{ color: 'black' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;({record.repliesCount})
                  </span>
                ) : null}
              </Link>
            )}
          />{' '}
          <Column
            title="작성자"
            render={(text, record) =>
              record.nickname === null ? (
                <>탈퇴한 사용자</>
              ) : (
                <>{record.nickname}</>
              )
            }
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
          <Skeleton />
        </>
      )}
    </>
  );
}

// 검색 결과용 , 게시판 명 , 유저 이름 받아오도록 변경 .
export function TableBody2({ currentList, match, loading, BoardId }) {

  return (
    <>
      {loading ? (
        <Table pagination={false} dataSource={currentList}>
          {BoardId === undefined ?
            // 게시판 이름 숫자로 넘어올떄
            (<Column
              title="카테고리"
              dataIndex="key"
              key="key"
              render={(text, record) =>
                record.Board?.title ? record.Board.title : null

              }
            />) : (<Column
              title="카테고리"
              dataIndex="key"
              key="key"
              render={(text, record) =>
                findBoardName(record.boardId)
              }

            />)
          }
          <Column
            title="제목"
            key="title"
            render={(text, record) => (
              <Link to={`${match.path}/${record.id}`}>
                {record.title.length > 25
                  ? record.title.slice(0, 25)
                  : record.title}
                {/* {true ? record.Replies[0].count : null} */}
                {record.Replies.length ? (
                  <span style={{ color: 'black' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;({record.Replies.length})
                  </span>
                ) : null}
              </Link>
            )}
          />{' '}
          <Column
            title="작성자"
            render={(text, record) =>
              record?.User === null ? (
                <>탈퇴한 사용자</>
              ) : (
                <>{record.User.nickname}</>
              )
            }
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
          <Skeleton />
        </>
      )}
    </>
  );
}
