import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PUBLIC_IP } from '../../config';
import { deleteScrap } from '../../_actions/post_action';
import { Button, message } from 'antd';
import { Link } from 'react-router-dom';
function UserScrap() {
  const dispatch = useDispatch();
  // const { scraps } = useSelector((state) => state.user);
  const [scraps, setScraps] = useState([]);
  useEffect(async () => {
    const request = await axios
      .get(`${PUBLIC_IP}/user/scrap`, {
        params: { directoryId: 1 },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.data); //
          setScraps(response.data.data); // [스크랩 id, 포스트 Post.id, 포스트 Post.title]
        }
      })
      .catch((error) => {});
    // }
  }, []);
  const onRemove = (e) => {
    console.log(e.target.value);
    dispatch(deleteScrap(e.target.value)).then((response) => {
      if (response.status === 200) {
        alert('스크랩 삭제');
      } else {
        alert(response.message);
      }
    });
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>글 번호</th>
            <th>제목</th>
            <th></th>
          </tr>
        </thead>
        {scraps
          ? scraps.map((post, index) => {
              return (
                <tr key={index}>
                  <td>{post.Post.id}</td>
                  <td>
                    <Link to={`1/${post.Post.id}`}>{post.Post.title}</Link>
                  </td>
                  <td>
                    <button value={post.id} onClick={onRemove}>
                      스크랩 제거
                    </button>
                  </td>
                </tr>
              );
            })
          : null}
      </table>
    </div>
  );
}

export default UserScrap;
