import React, { useState } from 'react';
import { message, Select, Input } from 'antd';
import { useDispatch } from 'react-redux';
import useInput from '../../hooks/useInput';
import { postSearch } from '../../_actions/post_action';
const { Option } = Select;
const { Search } = Input;
function PostSearch({ setPosts, match }) {
  const dispatch = useDispatch();
  const [toSearch, onChangeSearch] = useInput('');
  const [searchType, setSearchType] = useState('titleAndContent');

  const onSearch = () => {
    if (toSearch === '') {
      return message.warn('검색 키워드를 입력해주세요.');
    }
    dispatch(postSearch(match.path.substring(1), toSearch, searchType))
      .then((response) => {
        if (response.status === 200) {
          setPosts(response.payload.reverse());
        }
      })
      .catch((error) => {
        switch (error.response?.status) {
          case 401:
            message.error('로그인하지 않은 사용자');
            // history.push('/');
            break;
          case 403:
            message.error('접근 권한 오류');
            // history.push('/');
            break;
          case 404:
            message.info('검색 결과가 존재하지 않습니다.');
          default:
            break;
        }
      });
  };
  return (
    <span style={{ float: 'right' }}>
      <Select
        defaultValue="제목"
        style={{ width: 120 }}
        onChange={(e) => setSearchType(e)}
      >
        <Option value="titleAndContent">제목&내용</Option>
        <Option value="title">제목</Option>
        <Option value="content">내용</Option>
        <Option value="nick">닉네임</Option>
      </Select>
      <Search
        placeholder="검색창"
        allowClear
        value={toSearch}
        onChange={onChangeSearch}
        onSearch={onSearch}
        style={{
          marginBottom: '10px',
          width: '300px',
          height: '30px',
        }}
      />
    </span>
  );
}

export default PostSearch;
