import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemRead({ id, item, isLoading, onRemove, match }) {
  // 이미지 표시 URL 생성
  const pictureUrl = () => {
    return `/items/display?id=${id}&timestamp=${new Date().getTime()}`;
  };

  return (
    <div align="center">
      <h2 className="title">음식 상세보기</h2>
      {isLoading && '로딩중....'}
      {!isLoading && item && (
        <>
          <table>
            <tbody>
              <tr>
                <td className="form-label">음식번호</td>
                <td>
                  <input type="text" value={item.id} readOnly />
                </td>
              </tr>
              <tr>
                <td className="form-label">음식명</td>
                <td>
                  <input type="text" value={item.title} readOnly />
                </td>
              </tr>
              <tr>
                <td className="form-label">음식 평점</td>
                <td>
                  <input type="text" value={item.score} readOnly />
                </td>
              </tr>
              <tr>
                <td className="form-label">미리보기</td>
                <td>
                  <img
                    src={pictureUrl()}
                    alt="음식 이미지"
                    width="200"
                    className="img-preview"
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label">음식 설명</td>
                <td>
                  <textarea value={item.content} readOnly></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      <Link to={`${match.path}/edit/${id}`} className="like-a-button">
        편집
      </Link>
      &nbsp;
      <button onClick={onRemove} className="like-a-button danger">
        삭제
      </button>
      &nbsp;
      <Link to={`${match.path}`} className="like-a-button">
        목록
      </Link>
    </div>
  );
}
