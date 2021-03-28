import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { commentLike, commentRemove } from '../../_actions/comment_action';
import ReportModal from '../post/ReportModal';

function CommentList({ comments, history }) {
  const dispatch = useDispatch();

  const onLike = (event) => {
    dispatch(commentLike(+event.target.value))
      .then((response) => {
        alert('추천 완료');
        window.location.reload();
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
        .then((response) => {
          alert('삭제 완료');
          window.location.reload();
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
    <div style={{ width: '900px' }}>
      {comments
        ? comments.map((comment, index) => {
            return (
              <div key={index}>
                <span>
                  유저 아이디:{' '}
                  {comment.User === null
                    ? '탈퇴한 사용자'
                    : comment.User.nickname}
                </span>
                <span> 내용: {comment.content}</span>
                <span> 추천 수: {comment.like} </span>
                <span> 신고 수: {comment.report} </span>
                <button value={comment.id} onClick={onLike}>
                  추천하기
                </button>
                <button value={comment.id} onClick={onDelete}>
                  삭제하기
                </button>
                <ReportModal type="comment" id={comment.id} history={history} />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default withRouter(CommentList);
