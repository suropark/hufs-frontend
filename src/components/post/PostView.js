import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
  postDellike,
  postLike,
  postRemove,
  postReport,
  postScrap,
  postView,
} from '../../_actions/post_action';
import CommentEdit from '../comment/CommentEdit';
import CommentList from '../comment/CommentList';
import ReportModal from './ReportModal';
import { Card, message, PageHeader, Popconfirm, Skeleton } from 'antd';
import styles from '../../css/PostView.module.css';
import like from '../../image/recommend.png';
// 상세 게시글 보기
// 게시글 내용 불러오기 ->
function PostView({ match, history }) {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postView(+match.params.id))
      .then((response) => {
        if (response.status === 200) {
          setPost(response.payload);
          setLoading(false);
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
          case 404:
            message.error('존재하지 않는 게시글입니다');
            history.push('/');
            break;
          default:
            break;
        }
      });
  }, []);
  const onDelete = () => {
    dispatch(postRemove(post.id))
      .then((response) => {
        if (response.status === 200) {
          message.success('게시글 삭제가 완료되었습니다.');
          history.goBack();
        }
      })
      .catch((error) => {
        switch (error.response.status) {
          case 401:
            message.error('로그인하지 않은 사용자');
            history.push('/');
            break;
          case 403:
            message.error('접근 권한 오류');
            break;
          case 404:
            message.error('존재하지 않는 게시글입니다');
            history.push('/');
            break;
          default:
            break;
        }
      });
  };
  const onLike = () => {
    dispatch(postLike(post.id))
      .then(async (response) => {
        await postView(+match.params.id).then((response) => {
          message.success('성공');
          setPost(response.payload);
        });
      })
      .catch((error) => {
        switch (error.response?.status) {
          case 401:
            message.error('로그인이 필요합니다.');
            history.push('/');
            break;
          case 403:
            message.error('접근 권한이 없습니다');
            break;
          case 409:
            message.error('이미 좋아요한 게시글입니다.');
            break;
          default:
            break;
        }
      });
    // 새로고침 필요한지 -> 아니요
  };
  // const onDellike = () => {
  //   dispatch(postDellike(post.id))
  //     .then((response) => {
  //       window.location.reload();
  //     })
  //     .catch((error) => {
  //       switch (error.response.status) {
  //         case 401:
  //           message.error('로그인이 필요합니다.');
  //           history.push('/');
  //           break;
  //         case 403:
  //           message.error('접근 권한이 없습니다');
  //           break;
  //         case 409:
  //           message.error('좋아요한 기록이 없습니다.');
  //           break;
  //         default:
  //           break;
  //       }
  //     });
  // };
  const onScrap = () => {
    dispatch(postScrap(post.id))
      .then((response) => {
        message.success(
          '스크랩에 성공했습니다. 마이페이지에서 확인할 수 있습니다.',
        );
      })
      .catch((error) => {
        switch (error.response.status) {
          case 401:
            message.error('로그인이 필요합니다.');
            // history.push('/');
            break;
          case 403:
            message.error('접근 권한이 없습니다');
            break;
          case 409:
            message.error('이미 스크랩 한 게시글 입니다.');
            break;
          default:
            break;
        }
      });
  };

  return (
    <div className={styles.communitymain}>
      {/* <PageHeader
        title={'1'}
        subTitle="게시판 설명 적는 곳"
      /> */}
      <div className={styles.communitybox}>
        {loading ? (
          <h1>loading</h1>
        ) : (
          <Card
            title={
              <>
                <div style={{ fontWeight: 'bold', fontSize: '22px' }}>
                  {post.title}
                </div>
                <span className={styles.like}>
                  <img src={like} />
                  <span className={styles.recommend} onClick={onLike}>
                    {post.like}
                  </span>
                </span>
                <div className={styles.postinfo}>
                  {post.User === null ? (
                    <span style={{ fontSize: '8px' }}> 탈퇴한 사용자 </span>
                  ) : (
                    <span style={{ fontSize: '13px' }}>
                      {' '}
                      {post.User.nickname}{' '}
                    </span>
                  )}
                  <span style={{ marginLeft: '24px', fontSize: '12px' }}>
                    {post.createdAt?.slice(0, 10)}
                  </span>
                  <span style={{ marginLeft: '24px', fontSize: '12px' }}>
                    {' '}
                    글 번호 {post.id}
                  </span>
                </div>
              </>
            }
          >
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="board-content"
            />
            <div>
              <div style={{ fontSize: '12px' }}>
                <ReportModal type="post" id={post.id} history={history} />{' '}
                <div>
                  <Popconfirm
                    title="정말로 게시글을 삭제하시겠습니까?"
                    onConfirm={onDelete}
                    okText="Yes"
                    cancelText="No"
                  >
                    <span
                      style={{
                        cursor: 'pointer',
                        float: 'left',
                        marginRight: '12px',
                      }}
                    >
                      삭제
                    </span>
                  </Popconfirm>
                  <span
                    onClick={onScrap}
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      marginLeft: '12px',
                    }}
                  >
                    스크랩
                  </span>
                </div>{' '}
                <Link to={`${post.id}/update`}>
                  <span>수정</span>
                </Link>
              </div>{' '}
            </div>
            <div>
              <hr />
            </div>
            <CommentList
              setPost={setPost}
              history={history}
              comments={post.Replies ? post.Replies : []}
              match={match}
            />
            <CommentEdit setPost={setPost} history={history} match={match} />
          </Card>
        )}
      </div>
    </div>
  );
}

export default withRouter(PostView);
