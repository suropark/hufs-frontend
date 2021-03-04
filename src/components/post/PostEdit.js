import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postSave } from '../../_actions/post_action';
import { withRouter } from 'react-router-dom';
function PostEdit(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e) => {
    setContent(e.target.value);
  };
  // useInput 커스텀 훅으로 줄이기
  const submitHandler = (e) => {
    e.preventDefault();

    let body = {
      title: title,
      content: content,
    };

    dispatch(postSave(body)).then((res) => {
      if (res.req) {
        props.history.push('/list');
      } else {
        alert('error');
      }
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={titleHandler}
      />
      <input
        type="text"
        placeholder="내용"
        value={content}
        onChange={contentHandler}
      />
      <button onClick={submitHandler}>제출</button>
    </div>
  );
}

export default withRouter(PostEdit);
