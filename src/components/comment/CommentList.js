import { Avatar, Comment, List } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { commentLike, commentRemove } from '../../_actions/comment_action';
import ReportModal from '../post/ReportModal';
import { UserOutlined } from '@ant-design/icons';
import { postView } from '../../_actions/post_action';
import styles from '../../css/Comment.module.css'
import like from '../../image/recommend.png';
function CommentList({ comments, history, setPost, match }) {
  const dispatch = useDispatch();
  const onLike = (event) => {
    dispatch(commentLike(+event.target.value))
      .then(async (response) => {
        alert('추천 완료');
        await postView(+match.params.id).then((response) =>
          setPost(response.payload),
        );
      })
      .catch((error) => {
        switch (error.response?.status) {
          case 401:
            alert('로그인이 필요합니다.');
            history.push('/');
            break;
          case 403:
            alert('접근 권한이 없습니다');
            break;
          case 409:
            alert('이미 좋아요 한 댓글입니다.');
            break;
          default:
            break;
        }
      });
  };
  const onDelete = (event) => {
    const answer = window.confirm('이 댓글을 삭제하시겠습니까?');
    if (answer) {
      dispatch(commentRemove(+event.target.value))
        .then(async (response) => {
          alert('삭제 완료');
          await postView(+match.params.id).then((response) =>
            setPost(response.payload),
          );
        })
        .catch((error) => {
          switch (error.response?.status) {
            case 401:
              alert('로그인이 필요합니다.');
              history.push('/');
              break;
            case 403:
              alert('접근 권한이 없습니다');
              break;
            default:
              break;
          }
        });
    }
  };
  // const onUpdate = (event) => {

  // };
  // const toInput = () => {
  //   return (
  //     <>
  //       <input></input>
  //     </>
  //   );
  // };
  return (
    <div className="comment-body">
      <List
        className="comment-list"
        header={`${comments.length} replies`}
        itemLayout="horizontal"
        dataSource={comments ? comments : null}
        renderItem={(item) => (
          <li>
            {/* single comment and reply comment? */}
            <Comment
              actions={item.actions}
              author={item.User === null ? '탈퇴한 사용자' : item.User.nickname}
              avatar={<Avatar icon={<UserOutlined />} />}
              content={
                <>
                  {item.content}
                  {/* <span> 추천: {item.like} </span> */}
                  {/* <span> 신고 수: {item.report} </span> */}
                  <div className={styles.commentset}>
                    <button
                      className={styles.delete}
                      value={item.id}
                      onClick={onDelete}>
                      삭제
                    </button>

                    <ReportModal

                      type="comment"
                      id={item.id}
                      history={history} />
                    <img src={like} />
                    <button
                      className={styles.like}
                      value={item.id}
                      onClick={onLike}>

                      {item.like}
                    </button>


                  </div>
                </>
              }
              datetime={item.createAt ? item.createAt.slice(0, 10) : null}
            // 현재 안나타남
            />
          </li>
        )}
      />
    </div>
  );
}

export default withRouter(CommentList);
