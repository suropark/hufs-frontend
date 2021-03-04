import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { commentLike, commentRemove } from '../../_actions/comment_action';

//  PostId 에 해당하는 comment DB에서 가져오기
//  {postId, UserId, Date or Key for Order, content, like}
// Post
function CommentList({ match }) {
  const { comments } = useSelector((state) => state.comment);

  const matchComments = comments.filter(
    (comment) => comment.postId === +match.params.id,
  );

  const dispatch = useDispatch();
  const onLike = (e) => {
    dispatch(commentLike(+e.target.value));
  };
  const onDelete = (event) => {
    let body = {
      commentId: +event.target.value,
    };
    dispatch(commentRemove(body));
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
          </div>
        );
      })}
    </div>
  );
}

export default CommentList;
