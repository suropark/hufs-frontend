import React, { useEffect, useState } from 'react';
import { Link, Switch, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { message, Skeleton } from 'antd';
import { postList, postRemove, reviewDetail } from '../../../../_actions/reviewPost_action';
import { PageHeader, Button, Table, Pagination, List, Avatar, Space, Rate, Layout } from 'antd';
import { StarFilled } from '@ant-design/icons';
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
  const [detail, setDetail] = useState([]);



  useEffect(() => {
    dispatch(postList(history.location.state.id))
      .then((response) => {
        console.log(response.payload)
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

    dispatch(reviewDetail(history.location.state.id))
      .then((response) => {
        if (response.status === 200) {
          console.log(response.payload)
          setDetail(response.payload)
          console.log(detail)
        }
      })
      .catch((error) => {
        switch (error.response?.status) {
          case 401:
            message.error('로그인하지 않은 사용자');
            history.push('/');

            //
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

  const onDelete = (postId) => {
    const answer = window.confirm('게시글을 삭제하시겠습니까?');

    if (answer) {
      dispatch(postRemove(postId))
        .then((response) => {
          if (response.status === 200) {
            alert('게시글 삭제가 완료되었습니다.');
            window.location.reload();
            //history.goBack();
          }
        })
        .catch((error) => {
          switch (error.response.status) {
            case 401:
              alert('로그인하지 않은 사용자');
              history.push('/');
              break;
            case 403:
              alert('접근 권한 오류');
              break;
            case 404:
              alert('존재하지 않는 게시글입니다');
              history.push('/');
              break;
            default:
              break;
          }
        });
    }
  };

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
    if (nickname == null) {
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
      <Content style={{
        width: '1000px',
        margin: '0 15%'
      }}>
        <h1>Review</h1>
        <div >

          <div
          // style={{ paddingTop: '10px' }}
          >

            <StarFilled
              style={{ color: '#fadb14', fontSize: '20px', float: 'left' }}
            /> <h2 style={{ float: 'left' }}>{detail.average} </h2>
          </div>
          <div style={{ paddingtBottom: '10px' }}>
            <font color='gray' size='5' style={{ paddingLeft: '5px' }}>({detail.count})</font>
          </div>

        </div>
        <div aling="left" style={{ padding: '5px' }}>
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

        </div>
        {/* <hr ></hr> */}
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
            item ?
              <List.Item
                actions={[<Button onClick={() => { onDelete(item.id) }}>delete </Button>, <Button onClick={(e) => {
                  history.push({
                    pathname: '/3/edit',
                    state: {
                      name: item.name,
                      id: item.id
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
                  Edit</Button>]}
                key={item.title}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={checkNull(item.User)}
                  description={
                    <div>
                      <div>
                        <div><p>{item.createdAt ? item.createdAt.slice(0, 10) : 'none'}</p></div>
                        <Rate disabled allowHalf value={item.score}
                        /> {item.score}

                      </div>

                    </div>}
                />
                <div style={{ marginLeft: '50px' }}><strong>{item.title}</strong></div>
                <div style={{ marginLeft: '50px', marginTop: '20px' }} dangerouslySetInnerHTML={{ __html: item.content }}>
                </div>
              </List.Item>
              : 'none'
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