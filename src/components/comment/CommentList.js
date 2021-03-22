import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  commentLike,
  commentRemove,
  commentReport,
} from '../../_actions/comment_action';

//  PostId 에 해당하는 comment DB에서 가져오기
//  {postId, UserId, Date or Key for Order, content, like}
// Post
function CommentList({ match }) {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comment);
  const matchComments = comments.filter(
    (comment) => comment.postId === +match.params.id,
  );

  const onLike = (event) => {
    dispatch(commentLike(+event.target.value))
      .then((response) => {
        if (!response.likeSuccess) {
          alert('추천 실패.');
        }
      })
      .catch((error) => console.log(error));
  };
  const onDelete = (event) => {
    let body = {
      commentId: +event.target.value,
    };
    dispatch(commentRemove(body))
      .then((response) => {
        if (!response.removeSuccess) {
          alert('삭제할 수 없습니다.');
        }
      })
      .catch((error) => console.log(error));
  };
  const onReport = (event) => {
    // 신고 내역 작성

    let body = {
      commentId: +event.target.value,
      // content: content
    };
    dispatch(commentReport(body))
      .then((response) => {
        if (response.reportSuccess) {
          alert('신고가 완료되었습니다.');
        } else {
          alert('신고에 실패하였습니다');
        }
      })
      .catch(alert('에러 발생'));
  };
  return (
    <div>
      {matchComments.map((comment, index) => {
        return (
          <div key={index}>
            <span>유저 아이디: {comment.userId}</span>
            <span> 내용: {comment.content}</span>
            <span> 추천수: {comment.like} </span>
            <button value={comment.commentId} onClick={onLike}>
              추천하기
            </button>
            <button value={comment.commentId} onClick={onDelete}>
              삭제하기
            </button>
            <button onClick={onReport}>신고하기</button>
          </div>
        );
      })}
    </div>
  );
}

export default CommentList;