import React, { useState } from 'react';
import { Input, Select, Modal, Button } from 'antd';

import { useDispatch } from 'react-redux';
import { postReport } from '../../_actions/post_action';
import { withRouter } from 'react-router';
function ReportModal({ type, id, history }) {
  const { Option } = Select;
  const { TextArea } = Input;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const [body, setBody] = useState({ content: 1, detail: '' });
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onReport = (e) => {
    if (type === 'post') {
      dispatch(postReport(id, body)).then((response) => {
        switch (response.status) {
          case 200:
            alert('신고가 완료되었습니다. 감사합니다.');
            break;
          case 401:
            alert('로그인이 필요합니다.');
            history.push('/');
            break;
          case 403:
            alert('접근 권한이 없습니다');
            break;
          case 409:
            alert('이미 신고한 게시글입니다.');
            break;
          default:
            break;
        }
      });
    } else if (type === 'comment') {
      dispatch(postReport(id, body)).then((response) => {
        switch (response.status) {
          case 200:
            alert('신고가 완료되었습니다. 감사합니다.');
            break;
          case 401:
            alert('로그인이 필요합니다.');
            history.push('/');
            break;
          case 403:
            alert('접근 권한이 없습니다');
            break;
          case 409:
            alert('이미 신고한 게시글입니다.');
            break;
          default:
            break;
        }
      });
    }
    setBody({ content: 1, detail: '' });
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        신고하기
      </Button>
      <Modal
        title="신고 / report"
        visible={isModalVisible}
        onOk={onReport}
        onCancel={handleCancel}
      >
        <Select
          defaultValue={1}
          style={{ width: 170 }}
          onChange={(e) => {
            console.log(body);
            setBody({ ...body, content: e });
          }}
        >
          <Option value={1}>불쾌함</Option>
          <Option value={2}>광고성</Option>
        </Select>
        <br />
        <br />
        <br />
        <TextArea
          placeholder="신고 상세 사유"
          rows={4}
          value={body.detail}
          onChange={(e) => setBody({ ...body, detail: e.target.value })}
        />
      </Modal>
    </>
  );
}

export default withRouter(ReportModal);
