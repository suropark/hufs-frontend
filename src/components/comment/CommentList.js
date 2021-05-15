import { Avatar, Button, Comment, List, message, Popconfirm } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import {
  commentLike,
  commentRemove,
  commentReply,
} from '../../_actions/comment_action';
import ReportModal from '../post/ReportModal';
import { UserOutlined } from '@ant-design/icons';
import { postView } from '../../_actions/post_action';
import styles from '../../css/Comment.module.css';
import like from '../../image/recommend.png';
import TextArea from 'antd/lib/input/TextArea';
import { PUBLIC_IP } from '../../config';
import axios from 'axios';
import Form from 'antd/lib/form/Form';
function CommentList({ comments, history, setPost, match }) {
  const dispatch = useDispatch();
  const onLike = (event) => {
    dispatch(commentLike(+event.target.value))
      .then(async (response) => {
        message.success('추천 완료');
        await postView(+match.params.id).then((response) =>
          setPost(response.payload),
        );
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
            message.error('이미 좋아요 한 댓글입니다.');
            break;
          default:
            break;
        }
      });
  };
  const onDelete = (commentId) => {
    dispatch(commentRemove(commentId))
      .then((response) => {
        message.success('삭제 완료');
        dispatch(postView(+match.params.id)).then((response) =>
          setPost(response.payload),
        );
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
          default:
            break;
        }
      });
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

  // const [reply, setReply] = useState({
  //   content: '',
  //   parentId: null,
  //   postId: +match.params.id,
  // });
  const onReply = async (content, parentId) => {
    if (content.trim().length === 0) {
      message.info('댓글을 입력하세요');
      return;
    }
    const reply = {
      content: content,
      parentId: parentId,
      postId: +match.params.id,
    };
    dispatch(commentReply(reply)).then((response) => {
      dispatch(postView(+match.params.id)).then((response) => {
        setPost(response.payload);
        let textArray = document.getElementsByTagName('textarea');
        for (let i = 0; i < textArray.length - 1; i++) {
          // console.log(textArray[i].value);
          textArray[i].value = ''; // 수정 필요... 한번 대댓글 사용한 textarea는 초기화 후 다시 원래 value가 생성됨
        }
      });
    });
  };
  // const typeReply = (event) => {
  //   console.log(reply);
  //   setReply({
  //     ...reply,
  //     content: event.target.value,
  //     parentId: +event.target.id,
  //   });
  // };
  return (
    <div className="comment-body">
      {/* <List
        className="comment-list"
        header={`${comments.length} replies`}
        itemLayout="horizontal"
        dataSource={comments ? comments : null}
        renderItem={(item) => (
          <li> */}
      {/* single comment and reply comment? */}
      {comments.map((item) => {
        return (
          item.parentId === null && (
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
                    <Popconfirm
                      title="정말로 댓글을 삭제하시겠습니까?"
                      onConfirm={(e) => onDelete(item.id)}
                      okText="Yes"
                      cancelText="No"
                      value={item.id}
                    >
                      <button className={styles.delete} value={item.id}>
                        삭제
                      </button>
                    </Popconfirm>
                    <ReportModal
                      type="comment"
                      id={item.id}
                      history={history}
                    />
                    <img src={like} />
                    <button
                      className={styles.like}
                      value={item.id}
                      onClick={onLike}
                    >
                      {item.like}
                    </button>
                  </div>
                </>
              }
              datetime={item.createAt ? item.createAt.slice(0, 10) : null}
            // 현재 안나타남
            >
              <span
                style={{ cursor: 'pointer', fontWeight: 'bolder' }}
                onClick={(e) => {
                  let x = document.getElementById(`reply-${item.id}`);

                  if (x.style.display === 'none') {
                    x.style.display = 'block';
                  } else {
                    x.style.display = 'none';
                  }
                }}
              >
                대댓글
              </span>

              <div id={`reply-${item.id}`} style={{ display: 'none' }}>
                {comments.map((e) => {
                  return (
                    e.parentId === item.id && (
                      <Comment
                        actions={e.actions}
                        author={
                          e.User === null ? '탈퇴한 사용자' : e.User.nickname
                        }
                        avatar={<Avatar icon={<UserOutlined />} />}
                        content={
                          <>
                            {e.content}
                            {/* <span> 추천: {e.like} </span> */}
                            {/* <span> 신고 수: {e.report} </span> */}
                            <div className={styles.commentset}>
                              <Popconfirm
                                title="정말로 댓글을 삭제하시겠습니까?"
                                onConfirm={(event) => onDelete(e.id)}
                                okText="Yes"
                                cancelText="No"
                                value={e.id}
                              >
                                <button className={styles.delete} value={e.id}>
                                  삭제
                                </button>
                              </Popconfirm>
                              <ReportModal
                                type="comment"
                                id={e.id}
                                history={history}
                              />
                              <img src={like} />
                              <button
                                className={styles.like}
                                value={e.id}
                                onClick={onLike}
                              >
                                {e.like}
                              </button>
                            </div>
                          </>
                        }
                        datetime={e.createAt ? e.createAt.slice(0, 10) : null}
                      // 현재 안나타남
                      ></Comment>
                    )
                  );
                })}

                <form
                  className={styles.form}
                  onSubmit={(e) => {
                    e.preventDefault();
                    onReply(e.target[0].value, item.id);
                  }}
                >
                  <TextArea
                    className={styles.commenttextarea}
                    size={'small'}
                    rows={4}
                    autoSize={{ minRows: 2, maxRows: 4 }}
                    // showCount
                    maxLength={200}
                    type="text"
                    id={item.id}
                    placeholder="댓글을 입력하세요"
                  />
                  <input type="submit" value="댓글 입력" />
                </form>
              </div>
            </Comment>
          )
        );
      })}
    </div>
  );
}

export default withRouter(CommentList);
