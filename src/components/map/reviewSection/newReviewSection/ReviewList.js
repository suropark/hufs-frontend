import React, { useEffect, useState } from 'react';
import { Link, Switch, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { message, Skeleton } from 'antd';
import { postList } from '../../../../_actions/reviewPost_action';
import { PageHeader, Button, Table, Pagination, List, Avatar, Space, Rate, Layout } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Column } = Table;
function ReviewList({ match, history }) {
  console.log(history.location.state.id);
  const [currentList, setCurrentList] = useState([]);
  const [listPerPage, setListPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  // console.log(match.path.substring(1)); // 게시판 이름
  useEffect(() => {
    dispatch(postList(history.location.state.id))
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
            // history.push('/');
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

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  /* 
  useEffect(() => {
    const sliced = posts.slice(firstIndex, lastIndex);
    setCurrentList(sliced);
  }, [posts, currentPage]);

  const lastIndex = currentPage * listPerPage; // 10, 20, 30
  const firstIndex = currentPage * listPerPage - listPerPage; // 1, 11, 21.. */

  const checkNull = (nickname) => {
    if (nickname === null) {
      return (
        <><a>탈퇴한 사용자</a></>
      )
    }
    else {
      return nickname.nickname;
    }

  }

  return (
    <>
      <Content style={{ padding: '0 100px' }}>
        <h1>Review</h1>
        <Button onClick={(e) => {
          history.push({
            pathname: '/3/register',
            state: {
              detail: match.path,
              name: history.location.state.name,
              id: history.location.state.id
            },
          }

          )

          //   history.push({
          //     pathname: "map/register",
          //     state: { detail: match.path,
          //     name : history.location.state.name,
          //   id : history.location.state.id },
          //   }
          // )
        }
        }
        >
          Write Review</Button>
        <hr ></hr>
        <p></p>
        <List
          itemLayout="vertical"
          size="small"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3
          }}


          dataSource={posts}

          renderItem={item => (
            <List.Item
              key={item.title}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={checkNull(item.User)}
                description={
                  <div>
                    <div>
                      <div><p>{item.createdAt.slice(0, 10)}</p></div>
                      <Rate disabled defaultValue={item.score}></Rate>

                    </div>

                  </div>}
              />
              <div dangerouslySetInnerHTML={{ __html: item.content }}>
              </div>
            </List.Item>
          )}
        />{/* ,
      {' '}
      <table className="community-main">
        <div className="community-box">
          <Button
            onClick={(e) =>{
              history.push({
                pathname: '/3/register',
                state: { detail: match.path,
                    name : history.location.state.name,
                  id : history.location.state.id },
                  }   
                        
                  )

            //   history.push({
            //     pathname: "map/register",
            //     state: { detail: match.path,
            //     name : history.location.state.name,
            //   id : history.location.state.id },
            //   }
            // )
          }
            }
          >
            글 작성
          </Button>
          <TableBody
            currentList={posts.slice(firstIndex, lastIndex)}
            match={match}
            loading={loading}
          />
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
          */}

      </Content>

    </>

  );
}

export default withRouter(ReviewList);

/* export function TableBody({ currentList, match, loading }) {
  return (
    <>
      {loading ? (
        <Table pagination={false} dataSource={currentList}>
          <Column title="-" dataIndex="id" key="id" />
          <Column
            title="제목"
            key="title"
            render={(text, record) => (
              <Link to={{
                pathname:`${match.path}/${record.id}`,
                state:{
                  id : record.id
                }}
                }>
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
 */