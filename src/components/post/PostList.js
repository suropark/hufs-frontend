import React, { useEffect, useState } from 'react';
import { Link, Switch, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { message, Skeleton } from 'antd';
import { postList } from '../../_actions/post_action';
import { PageHeader, Button, Table, Pagination } from 'antd';
import PostSearch from './PostSearch';

const { Column } = Table;
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
  function findBoardName(boardId) {
    switch (boardId) {
      case 1:
        return '떠들어Boo';
      case 2:
        return '학교 해Boo';
      case 3:
        return '학교 간 Boo';
      case 4:
        return '학교 떠난 Boo';
      case 5:
        return '정면승Boo';
      case 6:
        return '이거 모르면 바Boo';
      default:
        break;
    }
  }
  function findBoardSub(boardId) {
    switch (boardId) {
      case 1:
        return '자유롭게 떠드는 커뮤니티';
      case 2:
        return '편하게 장학금 확인가능';
      case 3:
        return '외대생만의 맛집과 리뷰!';
      case 4:
        return '졸업생들 여기서 헤쳐 모여~~!';
      case 5:
        return '캠O스픽, 스X업 말고 여기서 한 번에 모아보자!';
      case 6:
        return '외대생이라면 누릴 수 있는 제휴 혜택 정보&꿀팁 궁금한 사람?!';
      default:
        break;
    }
    // case 2 ,3 커뮤니티 아니라서 반환안되네
  }
  return (
    <>
      {' '}
      <table className="community-main">
        <PageHeader
          title={findBoardName(+match.url.substring(1))}
          subTitle={findBoardSub(+match.url.substring(1))}
        />{' '}
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
          </div>
        </div>
      </table>
      {/* <div className="bottom">

        <Pagination
          defaultCurrent={1}
          onChange={(event) => setCurrentPage(event.selected + 1)}
          total={posts.length}
        />
      </div> */}
    </>
  );
}

export default withRouter(PostList);

export function TableBody({ currentList, match, loading }) {
  return (
    <>
      {loading ? (
        <Table pagination={false} dataSource={currentList}>
          <Column title="글 번호" dataIndex="id" key="id" />
          <Column
            title="제목"
            key="title"
            render={(text, record) => (
              <Link to={`${match.path}/${record.id}`}>
                {record.title.length > 32
                  ? record.title.slice(0, 32)
                  : record.title}
                {/* {true ? record.Replies[0].count : null} */}
                {record.Replies[0]?.count ? (
                  <span style={{ color: 'black' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;( {record.Replies[0]?.count} )
                  </span>
                ) : null}
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
