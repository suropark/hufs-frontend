import { Link, useHistory } from 'react-router-dom';
import { Rate } from 'antd';
import React, { useState, useEffect, useCallback } from 'react';

// 이미지 표시 URL 생성
const pictureUrl = (id) => {
  return `/items/display?id=${id}&timestamp=${new Date().getTime()}`;
};

export default function ItemModifyFrom({ item, isLoading, onModify, match }) {
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [score, setScore] = useState(0);
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setScore(item.score);
      setContent(item.content);
    }
  }, [item]);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const handleChangeScore = (e) => {
    setScore(e.target.value);
  };

  const handleChangeFile = useCallback((e) => {
    setFile(e.target.files[0]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onModify(title, score, content, file);
  };

  return (
    <div align="center">
      <h2>수정</h2>
      {isLoading && '로딩중...'}
      {!isLoading && item && (
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td className="form-label">번호</td>
                <td>
                  <input type="text" value={item.id} disabled />
                </td>
              </tr>
              <tr>
                <td className="form-label">음식이름</td>
                <td>
                  <input
                    type="text"
                    value={title}
                    onChange={handleChangeTitle}
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label">음식 평점</td>
                <td>
                  <Rate allowHalf value={score} onChange={handleChangeScore} />
                  {/*
                                <select value={score} onChange={handleChangeScore}>
                  <option value="1pt">1점</option>
                  <option value="2pt">2점</option>
                  <option value="3pt">3점</option>
                  <option value="4pt">4점</option>
                  <option value="5pt">5점</option>
                                    </select>*/}
                </td>
              </tr>
              <tr>
                <td className="form-label">음식파일</td>
                <td>
                  <input type="file" onChange={handleChangeFile} />
                </td>
              </tr>
              <tr>
                <td className="form-label">미리보기</td>
                <td>
                  <img
                    src={pictureUrl(item.id)}
                    alt=""
                    width="200"
                    className="img-preview"
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label">음식설명</td>
                <td>
                  <textarea
                    rows="5"
                    value={content}
                    onChange={handleChangeContent}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>

          <div>
            <button type="submit" className="like-a-button">
              수정
            </button>
            &nbsp;
            <button onClick={() => history.goBack()}>취소</button>&nbsp;
          </div>
        </form>
      )}
    </div>
  );
}
