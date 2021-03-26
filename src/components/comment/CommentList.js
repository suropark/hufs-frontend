import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  commentLike,
  commentRemove,
  commentReport,
} from '../../_actions/comment_action';

//  PostId 에 해당하는 comment DB에서 가져오기
//  {postId, UserId, Date or Key for Order, content, like}
// Post
function CommentList({ comments }) {
  const [updating, setUpdating] = useState('');
  const dispatch = useDispatch();
  // const { comments } = useSelector((state) => state.comment);
  // const matchComments = comments.filter(
  //   (comment) => comment.postId === +match.params.id,
  // );

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
    dispatch(commentRemove(+event.target.value))
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
      content: '객관식',
      detail: '주관식 (선택)',
    };
    dispatch(commentReport(+event.target.value, body))
      .then((response) => {
        if (response.reportSuccess) {
          alert('신고가 완료되었습니다.');
        } else {
          alert('신고에 실패하였습니다');
        }
      })
      .catch(alert('에러 발생'));
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
    <div>
      {comments
        ? comments.map((comment, index) => {
            return (
              <div key={index}>
                <span>유저 아이디: {comment.User.nickname}</span>
                {/* {updating ? (
                  <input placeholder={comment.content}> </input>
                ) : ( */}
                <span> 내용: {comment.content}</span>
                {/* )} */}
                <span> 추천 수: {comment.like} </span>
                <span> 신고 수: {comment.report} </span>

                <button value={comment.id} onClick={onLike}>
                  추천하기
                </button>
                <button value={comment.id} onClick={onDelete}>
                  삭제하기
                </button>
                <button value={comment.id} onClick={onReport}>
                  신고하기
                </button>
                {/* <button value={comment.id} onClick={onUpdate}>
                  수정하기
                </button> */}
              </div>
            );
          })
        : null}
    </div>
  );
}

export default CommentList;
