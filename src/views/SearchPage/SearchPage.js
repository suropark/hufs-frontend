import React, { useEffect, useState } from 'react';
import { Link, Switch, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PageHeader, Pagination, Table } from 'antd';
import { TableBody2 } from '../../components/post/PostList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const { Column } = Table;
function PostList(props) {
  const [currentList, setCurrentList] = useState([]);
  const [listPerPage, setListPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState(props.location.state.detail);
  const [loading, setloading] = useState(false);
  // console.log(props.match.path.substring(1)); // 게시판 이름

  useEffect(() => {
    const sliced = posts.slice(firstIndex, lastIndex);
    setCurrentList(sliced);

    setloading(true);
  }, [currentPage]);

  const lastIndex = currentPage * listPerPage; // 10, 20, 30
  const firstIndex = currentPage * listPerPage - listPerPage; // 1, 11, 21..

  return (
    <>
      <Header />
      {props.location.state.detail ? (
        <>
          <table className="community-main">
            <PageHeader
              title="검색 결과"
              subTitle={`${props.location.state.detail.length} 건의 검색결과`}
            />{' '}
            <div className="community-box">
              <span style={{ float: 'right', height: '35px' }} />
              <TableBody2
                currentList={posts.slice(firstIndex, lastIndex)}
                match={{ path: 1 }} // 하드 코딩 수정 필요
                loading={loading}
                BoardId={props.location?.BoardId}
              />
            </div>
            <div className="bottom">
              <Pagination
                className="postpagination"
                defaultCurrent={1}
                total={posts.length} //전체 게시물 개수 받음
                onChange={(e) => setCurrentPage(e)}
                pageSize={10} //페이지당 10개
                showSizeChanger={false}
              />
            </div>{' '}
          </table>
        </>
      ) : (
        <>X</>
      )}
      <Footer />
    </>
  );
}

export default withRouter(PostList);
