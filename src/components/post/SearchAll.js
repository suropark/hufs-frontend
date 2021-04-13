import React, { useState } from 'react';
import { message, Select, Input } from 'antd';
import { useDispatch } from 'react-redux';
import useInput from '../../hooks/useInput';
import { searchAll } from '../../_actions/post_action';
import { withRouter } from 'react-router';
const { Option } = Select;
const { Search } = Input;
function SearchAll(props) {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useInput('');
  const [searchType, setSearchType] = useState('titleAndContent');

  const onSearch = () => {
    if (keyword === '') {
      return message.warn('검색 키워드를 입력해주세요.');
    }
    dispatch(searchAll(keyword, searchType))
      .then((response) => {
        if (response.status === 200) {
          props.history.push({
            pathname: `/search`,
            state: { detail: response.payload.reverse() },
          });
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
    <span id="Searchbar">
      <Select
        defaultValue="제목"
        style={{ width: 80 }}
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
        value={keyword}
        onChange={setKeyword}
        onSearch={onSearch}
      />
    </span>
  );
}

export default withRouter(SearchAll);
