import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { postLike, postRemove, postUpdate } from '../../_actions/post_action';
import CommentEdit from '../comment/CommentEdit';
import CommentList from '../comment/CommentList';
// 상세 게시글 보기
// 게시글 내용 불러오기 ->
function PostView({ match, history }) {
  const [view, setView] = useState();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    const post = posts.find((posts) => posts.id === +match.params.id);
    setView(post);
  }, [posts]);

  const onDelete = () => {
    dispatch(postRemove(view.id)).then(history.push('/list'));
  };
  const onLike = () => {
    dispatch(postLike(view.id));
  };

  return (
    <div>
      {view ? (
        <div>
          <p>{view.id}</p>
          <h2>{view.title}</h2>
          <p>{view.content}</p>
          <p>추천수: {view.like}</p>
          <button onClick={onDelete}> 삭제하기</button>
          <button onClick={onLike}> 추천하기</button>
          <Link to={`${view.id}/update`}>
            <button>수정하기</button>
          </Link>
        </div>
      ) : (
        'isLoading'
      )}
      <CommentList match={match} />
      <CommentEdit match={match} />
    </div>
  );
}

export default withRouter(PostView);
