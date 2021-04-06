import { Link, useHistory } from 'react-router-dom';
import { Rate,Button,Input } from 'antd';
import React, { useState, useEffect, useCallback } from 'react';

const { TextArea } = Input;

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
        <div style={{width: "800px", margin: "0 auto", paddingTop:"150px"}}>
      {isLoading && '로딩중...'}
      {!isLoading && item && (
          <form onSubmit={handleSubmit}>
          <br />
          <div style={{ maxWidth: "700px", margin: "2rem"}}>
              <label>제목 </label>
              <Input type="text" value={item.title} onChange={handleChangeTitle} />
              <hr></hr>
              <label>평점  </label>
              <Rate allowHalf value = {item.score} onChange={handleChangeScore}/>
              <hr></hr>
              <label>사진</label>
              <Input type="file" onChange={handleChangeFile} />
              <hr></hr>
              <label>미리보기</label>
              <img src={pictureUrl(item.id)} alt="" width="200" className="img-preview" />
              <hr></hr>
              <label>후기</label>
              <TextArea
              rows="5"
              value={item.content}
              onChange={handleChangeContent}
            />
            </div>
            <div>
            <button type="submit" >수정</button>
      &nbsp;
      <Button onClick={()=>history.goBack()}>취소</Button>&nbsp;
      </div>

                    
                </form>
            )}
    </div>
  );
}
