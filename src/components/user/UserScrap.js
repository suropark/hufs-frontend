import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PUBLIC_IP } from '../../config';
import { deleteScrap } from '../../_actions/post_action';
import { Table } from 'antd';

import { Link } from 'react-router-dom';
function UserScrap() {
  const { Column } = Table;

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
      .catch((error) => { });
    // }
  }, []);
  const onRemove = (e) => {
    console.log(e);
    console.log(e.target);
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
      <Table pagination={false} dataSource={scraps}>
        <Column
          title="글 번호"
          dataIndex="id"
          key="id"
          style={{ textAlign: 'center' }}
        />
        <Column
          style={{ textAlign: 'center' }}
          title="스크랩한 글"
          key="content"
          render={(text, record) => (
            <Link to={`1/${record?.Post?.id}`}>
              {/* {record.Post?.title.length > 30
                ? record.Post?.title.slice(0, 29)
                : record.Post.title} */}
              {record.Post ? (
                record.Post?.title.slice(0, 29)
              ) : (
                <> 삭제된 게시글입니다</>
              )}
            </Link>
          )}
        />{' '}
        <Column
          title="내가 쓴 댓글"
          key="content"
          render={(text, record) => (
            <button value={record.id} onClick={onRemove}>
              삭제하기
            </button>
          )}
        />
      </Table>
    </div>
  );
}
export default UserScrap;
