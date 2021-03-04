import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentSave } from '../../_actions/comment_action';
import useInput from '../../hooks/useInput';
function CommentEdit(props) {
  const dispatch = useDispatch();
  // const [content, setContent] = useState('');
  // const changeHandler = (e) => setContent(e.target.value);
  const [content, onChange, setContent] = useInput('');
  const submitHandler = (e) => {
    e.preventDefault();
    let body = {
      postId: +props.match.params.id,
      content: content,
    };
    dispatch(commentSave(body));

    setContent('');
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="댓글을 입력하세요"
          value={content}
          onChange={onChange}
        />
        <button> 입력 </button>
      </form>
    </div>
  );
}

export default CommentEdit;
