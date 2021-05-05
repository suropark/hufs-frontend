import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentSave } from '../../_actions/comment_action';
import useInput from '../../hooks/useInput';
import { withRouter } from 'react-router';
import { Button, Input, message } from 'antd';
import { postView } from '../../_actions/post_action';
function CommentEdit({ history, match, setPost }) {
  const { TextArea } = Input;

  const dispatch = useDispatch();
  const [content, onChange, setContent] = useInput('');
  const onSubmit = (e) => {
    e.preventDefault();
    let body = {
      postId: +match.params.id,
      content: content,
    };
    dispatch(commentSave(body)) //error 옮겨야함
      .then(async (response) => {
        message.success('댓글 작성 성공!');
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

    setContent('');
  };
  return (
    <div
      className="comment-input"
      // style={{ width: '900px' }}
    >
      <TextArea
        className="comment-textarea"
        // style={{ display: 'inline-block', width: '750px' }}
        size={'small'}
        rows={4}
        autoSize={{ minRows: 4, maxRows: 4 }}
        showCount
        maxLength={100}
        type="text"
        placeholder="댓글을 입력하세요"
        value={content}
        onChange={onChange}
      />
      <Button
        style={{ width: '120px', height: '113px', position: 'absolute' }}
        onClick={onSubmit}
      >
        {' '}
        댓글 입력{' '}
      </Button>
    </div>
  );
}

export default withRouter(CommentEdit);
