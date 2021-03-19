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
  const [post, setPost] = useState();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    const matchPost = posts.find((posts) => posts.id === +match.params.id);
    setPost(matchPost);
  }, [posts]);

  const onDelete = () => {
    const answer = window.confirm('게시글을 삭제하시겠습니까?');
    if (answer) {
      dispatch(postRemove(post.id))
        .then((response) => {
          if (response.removeSuccess) {
            alert('게시글이 삭제되었습니다.');
          } else {
            alert('게시글을 삭제하지 못했습니다.');
          }
        })
        .catch((error) => console.log(error));
    }
  };
  const onLike = () => {
    dispatch(postLike(post.id)).catch((error) => console.log(error));
  };
  const onReport = () => {
    // 모달 창 띄워서 신고 내용 적을 필요 있음.
    let body = {
      id: post.id,
      // content: content
    };
    dispatch(postReport(body))
      .then((response) => {
        if (response.reportSuccess) {
          alert('신고가 완료되었습니다.');
        } else {
          alert('신고에 실패하였습니다');
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {post ? (
        <div>
          <p>{post.id}</p>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <p>추천수: {post.like}</p>
          <button onClick={onDelete}> 삭제하기</button>
          <button onClick={onLike}> 추천하기</button>
          <button onClick={onReport}>신고하기</button>

          <Link to={`${post.id}/update`}>
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
