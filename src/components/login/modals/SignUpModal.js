import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { message, Select, Button, Input, Form, Checkbox } from 'antd';
import { withRouter } from 'react-router';
import Header from '../../../views/Header/Header';
import Cookies from 'js-cookie';
import { PUBLIC_URL } from '../../../config';

const SignUpModal = (props) => {
  const { Option } = Select;
  const [major, setMajor] = useState(false);
  const [doubleMajor, setDoubleMajor] = useState(false);

  const [submit, setSubmit] = useState({
    // email: Cookies.get('email'),
    email: props.location.search.substring(7),
    nickname: '',
    webMail: '',
    mainMajorId: 1,
    doubleMajorId: 2,
    isAgreed: false,
  });

  useEffect(async () => {
    const request1 = await axios
      .get(`${PUBLIC_URL}/major/main-major`) //1전공
      .then((response) => response.data.data) // 배열 [id, name ]
      .catch((e) => {});
    setMajor(request1);
    const request2 = await axios
      .get(`http://52.78.2.40:5000/major/double-major`) //이중전공
      .then((response) => response.data.data)

      .catch((e) => {}); // 배열 [id, name ]
    setDoubleMajor(request2);
  }, []);
  useEffect(() => {}, [submit]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const request = await axios
      .post('http://52.78.2.40:5000/user/sign-up', submit)
      .then((response) => {
        message.success('회원가입이 성공적으로 완료되었습니다 :)');
        props.history.push('/');
      })
      .catch((error) => {
        switch (error.response?.status) {
          case 401:
            alert('개인 정보 수집 동의를 하지 않으셨습니다');
          case 409:
            alert('이미 존재하는 닉네임입니다');
        }
      });
  };

  const layout = {
    labelcol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 10, span: 16 },
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: 'inline-block',
          position: 'relative',
          width: '1100px',
          left: '15%',
        }}
      >
        <Form
          onValuesChange={(e) => setSubmit({ ...submit, [e[0]]: e })}
          name="basic"
          initialValues={{ remember: true }}
          style={{
            border: '3px solid #8897cb',
            borderRadius: '8px',

            margin: '15%',
            padding: '5%',
          }}
        >
          <Form.Item
            label="닉네임"
            name="nickname"
            rules={[{ required: true, message: '닉네임을 입력하세요!' }]}
            onChange={(event) =>
              setSubmit({ ...submit, nickname: event.target.value })
            }
          >
            <Input style={{ width: '90%', textAlign: 'center' }}></Input>
          </Form.Item>

          <Form.Item
            label="웹메일"
            extra="@hufs.ac.kr 앞 부분까지만 입력해주세요.
            위 웹메일로 학생 확인 인증 메일이 발송되며, 인증은 24시간이 지나면 만료됩니다."
            name="webMail"
            rules={[{ required: true, message: 'put your password!' }]}
            onChange={(event) =>
              setSubmit({ ...submit, webmail: event.target.value })
            }
            style={{ width: '91%' }}
          >
            <Input style={{ textAlign: 'center' }} suffix="@hufs.ac.kr"></Input>
          </Form.Item>

          <Form.Item label="1전공" name="majorId">
            <Select
              style={{ width: '90%' }}
              onChange={(event) =>
                setSubmit({ ...submit, mainMajorId: +event })
              }
            >
              {major ? (
                major.map((major) => {
                  return (
                    <Option key={major.id} value={major.id}>
                      {major.name}
                    </Option>
                  );
                })
              ) : (
                <></>
              )}
            </Select>
          </Form.Item>
          <Form.Item label="이중전공 / 부전공" name="doubleMajorId">
            <Select
              style={{ width: '89%' }}
              onChange={(event) =>
                setSubmit({ ...submit, doubleMajorId: +event })
              }
            >
              {doubleMajor ? (
                doubleMajor.map((major) => {
                  return (
                    <Option key={major.id} value={major.id}>
                      {major.name}
                    </Option>
                  );
                })
              ) : (
                <></>
              )}
            </Select>
          </Form.Item>
          <Form.Item
            {...tailLayout}
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error('필수 항목입니다.')),
              },
            ]}
          >
            <Checkbox
              onClick={(event) =>
                setSubmit({ ...submit, isAgrred: event.target.checked })
              }
            >
              동의합니다
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" onClick={onSubmit}>
              회원가입
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default withRouter(SignUpModal);
