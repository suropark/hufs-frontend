import { Link, useHistory } from 'react-router-dom';
import React, { useState, useCallback } from 'react';
import { Rate, Form, Input, InputNumber, Button } from 'antd';
const { TextArea } = Input;

export default function ItemRegisterForm({ onRegister, match }) {
  const [title, setTitle] = useState('');
  const [score, setScore] = useState(0);
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const history = useHistory();

  // 음식명이 사용자의 입력에 의해 변경되면 itemName 상태값을 변경한다.
  const handleChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  // 가격이 사용자의 입력에 변경되면 price 설정 함수를 호출한다.
  /*
  const handleChangeScore = useCallback((e) => {
    setScore(e.currentTarget);
  }, []);*/
  const handleChangeScore = (score) => {
    setScore(score);
  };

  // 음식 설명
  const handleChangeContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  // 업로드 파일
  const handleChangeFile = useCallback((e) => {
    setFile(e.target.files[0]);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      onRegister({ title, score, content, file });
    },
    [onRegister, title, score, content, file],
  );

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <form onSubmit={handleSubmit}>
        <br />
        <div style={{ maxWidth: '700px', margin: '2rem' }}>
          <label>제목 </label>
          <Input type="text" value={title} onChange={handleChangeTitle} />
          <hr></hr>
          <label>평점 </label>
          <Rate allowHalf value={score} onChange={handleChangeScore} />
          <hr></hr>
          <label>사진</label>
          <Input type="file" onChange={handleChangeFile} />
          <hr></hr>
          <label>후기</label>
          <TextArea rows="5" value={content} onChange={handleChangeContent} />
        </div>
        <div>
          <button type="submit">등록</button>
          &nbsp;
          <Button onClick={() => history.goBack()}>취소</Button>&nbsp;
        </div>
      </form>
    </div>
  );
}
