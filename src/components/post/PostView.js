import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
  postDellike,
  postLike,
  postRemove,
  postReport,
  postScrap,
  postView,
} from '../../_actions/post_action';
import CommentEdit from '../comment/CommentEdit';
import CommentList from '../comment/CommentList';
import ReportModal from './ReportModal';
import Header from '../../views/Community/Community';
import { Skeleton } from 'antd';
import { Input, Space } from 'antd';
// 상세 게시글 보기
// 게시글 내용 불러오기 ->
function PostView({ match, history }) {
  const [post, setPost] = useState();
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(postView(+match.params.id))
      .then((response) => {
        if (response.status === 200) {
          setPost(response.payload);
        }
      })
      .catch((error) => {
        switch (error.response.status) {
          case 401:
            alert('로그인하지 않은 사용자');
            history.push('/');
            break;
          case 403:
            alert('접근 권한 오류');
            history.push('/');
            break;
          case 404:
            alert('존재하지 않는 게시글입니다');
            history.push('/');
            break;
          default:
            break;
        }
      });
  }, []);
  const onDelete = () => {
    const answer = window.confirm('게시글을 삭제하시겠습니까?');
    if (answer) {
      dispatch(postRemove(post.id))
        .then((response) => {
          if (response.status === 200) {
            alert('게시글 삭제가 완료되었습니다.');
            history.goBack();
          }
        })
        .catch((error) => {
          switch (error.response.status) {
            case 401:
              alert('로그인하지 않은 사용자');
              history.push('/');
              break;
            case 403:
              alert('접근 권한 오류');
              break;
            case 404:
              alert('존재하지 않는 게시글입니다');
              history.push('/');
              break;
            default:
              break;
          }
        });
    }
  };
  const onLike = () => {
    dispatch(postLike(post.id))
      .then((response) => {
        window.location.reload();
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
          case 409:
            alert('이미 좋아요한 게시글입니다.');
            break;
          default:
            break;
        }
      });
    // 새로고침 필요한지
  };
  const onDellike = () => {
    dispatch(postDellike(post.id))
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        switch (error.response.status) {
          case 401:
            alert('로그인이 필요합니다.');
            history.push('/');
            break;
          case 403:
            alert('접근 권한이 없습니다');
            break;
          case 409:
            alert('좋아요한 기록이 없습니다.');
            break;
          default:
            break;
        }
      });
  };
  const onScrap = () => {
    dispatch(postScrap(post.id))
      .then((response) => {
        alert('스크랩에 성공했습니다. 마이페이지에서 확인할 수 있습니다.');
      })
      .catch((error) => {
        switch (error.response.status) {
          case 401:
            alert('로그인이 필요합니다.');
            history.push('/');
            break;
          case 403:
            alert('접근 권한이 없습니다');
            break;
          case 409:
            alert('이미 스크랩 한 게시글 입니다.');
            break;
          default:
            break;
        }
      });
  };
  return (
    <div>
      {post ? (
        <div>
          <p>{post.id}</p>
          <h2>{post.title}</h2>
          {post.User === null ? (
            <h3> 탈퇴한 사용자 </h3>
          ) : (
            <h3> post.User.nickname </h3>
          )}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <span>추천 수: {post.like}</span>
          <strong onClick={onLike}> 추천하기</strong>
          <strong onClick={onDellike}> 취소</strong>
          <br /> <span>신고 수: {post.report}</span>
          <ReportModal type="post" id={post.id} history={history} />
          <br /> <strong onClick={onDelete}> 삭제하기</strong>
          <br /> <strong onClick={onScrap}>스크랩하기</strong>
          <br />
          <Link to={`${post.id}/update`}>
            <strong>수정하기</strong>
          </Link>
          <div>
            <hr />
          </div>
          <br />
          <br />
          댓글 부분
          <br />
          <br />
          <CommentList
            history={history}
            comments={post.Replies ? post.Replies : []}
          />
          <CommentEdit history={history} match={match} />
        </div>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}

export default withRouter(PostView);
