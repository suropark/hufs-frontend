import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
  postLike,
  postRemove,
  postReport,
  postUpdate,
} from '../../_actions/post_action';
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
  const onReport = () => {
    // 모달 창 띄워서 신고 내용 적을 필요 있음.
    let body = {
      id: view.id,
      // body: 내용
    };
    dispatch(postReport(body)).then(alert('신고가 완료되었습니다.'));
  };
  return (
    <div>
      {view ? (
        <div>
          <p>{view.id}</p>
          <h2>{view.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: view.content }} />
          <p>추천수: {view.like}</p>
          <button onClick={onDelete}> 삭제하기</button>
          <button onClick={onLike}> 추천하기</button>
          <button onClick={onReport}>신고하기</button>


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
