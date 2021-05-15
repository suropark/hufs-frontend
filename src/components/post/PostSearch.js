import React, { useState } from 'react';
import { message, Select, Input } from 'antd';
import { useDispatch } from 'react-redux';
import useInput from '../../hooks/useInput';
import { postSearch } from '../../_actions/post_action';
import { useHistory, withRouter } from 'react-router';
const { Option } = Select;
const { Search } = Input;
function PostSearch({ setPosts, match }) {
  const dispatch = useDispatch();
  const [toSearch, onChangeSearch] = useInput('');
  const [searchType, setSearchType] = useState('titleAndContent');
  const history = useHistory();
  const onSearch = () => {
    if (toSearch === '') {
      return message.warn('검색 키워드를 입력해주세요.');
    }
    dispatch(postSearch(match.path.substring(1), toSearch, searchType))
      .then((response) => {
        if (response.status === 200) {
          // setPosts(response.payload.reverse());

          history.push({
            pathname: `/search`,
            state: { detail: response.payload.reverse() },
            BoardId: match.path.substring(1)
          });
        }
      })
      .catch((error) => {
        switch (error.response?.status) {
          case 401:
            message.error('로그인하지 않은 사용자');
            history.push('/');
            break;
          case 403:
            message.error('접근 권한 오류');
            history.push('/');
            break;
          case 404:
            message.info('검색 결과가 존재하지 않습니다.');
          case 422:
            if (error.response.data.message === 'QUERY_KEYWORD') {
              message.error('두 글자 이상 입력해주세요');
            } else {
              message.error('query error');
            }
          default:
            break;
        }
      });
  };
  return (
    <span style={{ float: 'right' }}>
      <Select
        defaultValue="제목&내용"
        style={{ width: 110 }}
        onChange={(e) => setSearchType(e)}
      >
        <Option value="titleAndContent">제목&내용</Option>
        <Option value="title">제목</Option>
        <Option value="content">내용</Option>
        <Option value="nick">닉네임</Option>
      </Select>
      <Search
        allowClear
        value={toSearch}
        onChange={onChangeSearch}
        onSearch={onSearch}
        style={{
          marginBottom: '10px',
          width: '250px',
          height: '25px',
        }}
      />
    </span>
  );
}

export default withRouter(PostSearch);
