import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postUpdate } from '../../_actions/post_action';
// 상세 게시글 보기
// 게시글 내용 불러오기 ->
function PostUpdate({ match, history }) {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const [updated, setUpdated] = useState({
    title: '',
    content: '',
  });
  const post = posts.find((posts) => posts.id === +match.params.id);

  useEffect(() => {
    setUpdated({ ...post });
  }, []);
  const titleHandler = (event) => {
    setUpdated({ ...updated, title: event.target.value });
  };
  const contentHandler = (event) => {
    setUpdated({ ...updated, content: event.target.value });
  };
  const onUpdate = () => {
    dispatch(postUpdate(updated)).then(history.goBack());
  };

  return (
    <div>
      {post ? (
        <div>
          <p>글 번호: {post.id}</p>
          <h2>제목 :</h2>{' '}
          <input onChange={titleHandler} value={updated.title}></input>
          <p>
            내용{' '}
            <input onChange={contentHandler} value={updated.content}></input>
          </p>
          <button onClick={onUpdate}>수정하기</button>
        </div>
      ) : (
        'isLoading'
      )}
    </div>
  );
}

export default withRouter(PostUpdate);
