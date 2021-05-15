import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PUBLIC_IP } from '../../config';
import { deleteScrap } from '../../_actions/post_action';
import { Button, message, Popconfirm, Table } from 'antd';

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
          setScraps(response.data.data); // [스크랩 id, 포스트 Post.id, 포스트 Post.title]
        }
      })
      .catch((error) => {});
    // }
  }, []);
  const onRemove = (recordId) => {
    dispatch(deleteScrap(recordId))
      .then(async (response) => {
        await axios
          .get(`${PUBLIC_IP}/user/scrap`, {
            params: { directoryId: 1 },
          })
          .then((response) => {
            if (response.status === 200) {
              setScraps(response.data.data); // [스크랩 id, 포스트 Post.id, 포스트 Post.title]
            }
          });
        message.success('스크랩 삭제');
      })
      .catch((error) => {
        switch (error?.response.message) {
          case 'UNAUTHORIZED':
            message.error('로그인하지 않은 사용자');
          case 'FORBIDDEN_SUSPENSION':
            message.error('정지된 사용자');
          case 'FORBIDDEN_BEFORE':
            message.error('이메일 인증이 되지 않은 사용자');
          case 'QUERY':
            message.error('쿼리 스트링 에러, 운영진에게 연락바랍니다.');
          default:
            break;
        }
      });
  };

  return (
    <div>
      <Table pagination={true} dataSource={scraps}>
        <Column
          title="카테고리"
          dataIndex="id"
          key="id"
          style={{ textAlign: 'center' }}
          render={(text, record) => record.Post.Board.title}
        />
        <Column
          style={{ textAlign: 'center' }}
          title="제목"
          key="content"
          render={(text, record) => (
            <Link to={`1/${record?.Post?.id}`}>
              {/* {record.Post?.title.length > 30
                ? record.Post?.title.slice(0, 29)
                : record.Post.title} */}
              {record.Post ? (
                record.Post?.title.slice(0, 25)
              ) : (
                <> 삭제된 게시글입니다</>
              )}
            </Link>
          )}
        />{' '}
        <Column
          title="삭제하기"
          key="content"
          render={(text, record) => (

            <Popconfirm
              
              title="스크랩을 삭제하시겠습니까?"
              onConfirm={(e) => onRemove(record.id)}
              okText="Yes"
              cancelText="No"
              value={record.id}
            >
              <Button style={{ marginRight: '35%;' }} type="link" value={record.id}>
                삭제하기
              </Button>
            </Popconfirm>

          )}
        />
      </Table>
    </div>
  );
}
export default UserScrap;
