import React, { useEffect, useState } from 'react';
import { Link, Switch, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { PageHeader, Button, Table } from 'antd';
import { TableBody } from '../../components/post/PostList';
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
  console.log(props.location);
  console.log(posts);
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
              <TableBody
                currentList={posts.slice(firstIndex, lastIndex)}
                match={{ path: 1 }} // 하드 코딩 수정 필요
                loading={loading}
              />
            </div>
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
