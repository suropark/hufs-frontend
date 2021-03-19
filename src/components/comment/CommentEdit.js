import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentSave } from '../../_actions/comment_action';
import useInput from '../../hooks/useInput';
function CommentEdit(props) {
  const dispatch = useDispatch();
  const [content, onChange, setContent] = useInput('');
  const onSubmit = (e) => {
    e.preventDefault();
    let body = {
      postId: +props.match.params.id,
      content: content,
    };
    dispatch(commentSave(body))
      .then((response) => {
        if (!response.saveSuccess) {
          alert('댓글 작성에 실패했습니다.');
        }
      })
      .catch((error) => console.log(error));

    setContent('');
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="댓글을 입력하세요"
          value={content}
          onChange={onChange}
        />
        <button onClick={onSubmit}> 입력 </button>
      </form>
    </div>
  );
}

export default CommentEdit;
