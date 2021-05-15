import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  message,
  Select,
  Button,
  Input,
  Form,
  Checkbox,
} from 'antd';
import { withRouter } from 'react-router';
import Header from '../../../views/Header/Header';
import { PUBLIC_IP } from '../../../config';
import { InformationModal2 } from '../../rule/InformationModal'
import { UseModal2 } from '../../rule/UseModal'

const SignUpModal = (props) => {
  const { Option } = Select;
  const [major, setMajor] = useState(false);
  const [doubleMajor, setDoubleMajor] = useState(false);
  const [submit, setSubmit] = useState({
    email: props.location.state.email,
    provider: props.location.state.provider,
    nickname: '',
    webMail: '',
    mainMajorId: 1,
    doubleMajorId: 2,
    isAgreed: false,
  });

  useEffect(async () => {
    const request1 = await axios
      .get(`${PUBLIC_IP}/major/main-major`) //1전공
      .then((response) => response.data.data) // 배열 [id, name ]
      .catch((e) => { });
    setMajor(request1);
    const request2 = await axios
      .get(`${PUBLIC_IP}/major/double-major`) //이중전공
      .then((response) => response.data.data)

      .catch((e) => { }); // 배열 [id, name ]
    setDoubleMajor(request2);
  }, []);
  useEffect(() => console.log(submit), [submit]);

  const argCheck = { a: false, b: false };

  const onSubmit = async (e) => {
    console.log(submit);
    e.preventDefault();
    const request = await axios
      .post(`${PUBLIC_IP}/user/sign-up`, submit)
      .then((response) => {
        message.success('회원가입이 성공적으로 완료되었습니다 :)');
        message.success(
          '웹메일을 확인해주세요. 웹메일 인증이 완료되면 HUFSpace의 모든 기능을 사용하실 수 있습니다.',
        );
        props.history.push('/');
      })
      .catch((error) => {
        switch (error.response?.status) {
          case 401:
            message.info('개인 정보 수집 동의를 하지 않으셨습니다');
            break;
          case 409:
            if (error.response.data.message === 'CONFLICT_NICKNAME') {
              message.info('이미 존재하는 닉네임입니다');
            } else {
              message.info('이미 가입된 사용자입니다.');
            }
            break;
          case 422:
            if (error.response.data.message === 'BODY_MAIN_MAJOR') {
              message.info('주전공을 선택하지 않으셨습니다')
            } else {
              message.info('이중전공을 선택하지 않으셨습니다. 없으면 가장 아래의 "미정"을 선택하세요.')
            }
            break; 
          default:
            break;
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
            onChange={(event) => {
              setSubmit({ ...submit, nickname: event.target.value })
            }}
          >
            <Input style={{ width: '100%', textAlign: 'center' }} placeholder='닉네임을 입력하세요'></Input>
          </Form.Item>

          <Form.Item
            label="웹메일"
            extra="@hufs.ac.kr 앞 부분까지만 입력해주세요.
            위 웹메일로 학생 확인 인증 메일이 발송되며, 인증은 24시간이 지나면 만료됩니다."
            name="webMail"
            onChange={(event) => {
              console.log(submit);
              setSubmit({ ...submit, webMail: event.target.value })
            }}
            style={{ width: '100%' }}
          >
            <Input style={{ textAlign: 'center' }} suffix="@hufs.ac.kr"></Input>
          </Form.Item>

          <Form.Item label="주전공" name="majorId" rules={[{ required: true, message: '' }]}>
            <Select
              style={{ width: '100%' }}
              onChange={(event) => 
                setSubmit({ ...submit, mainMajorId: +event })
              }
              placeholder='주전공을 선택하세요. 없으면 "미정"을 눌러주세요'
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
          <Form.Item label="이중/부전공" name="doubleMajorId" rules={[{ required: true, message: '' }]}>
            <Select
              style={{ width: '100%' }}
              onChange={(event) => {
                setSubmit({ ...submit, doubleMajorId: +event })
              }}
              placeholder='이중/부전공을 선택하세요. 없으면 "미정"을 눌러주세요'
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
          {/* 개인정보 */}
          <InformationModal2 />
          <Form.Item
            {...tailLayout}
            name="isAgreed"
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
              onChange={(event) => {
                  argCheck.a = !(argCheck.a);
                  if((argCheck.a == true) && (argCheck.b === true)) { 
                    setSubmit({ ...submit, isAgreed: event.target.checked }); }
              }}
            >
              동의합니다 (필수)
            </Checkbox>

          </Form.Item>
          {/* 이용약관 */}
          <UseModal2 />
          <Form.Item
            {...tailLayout}
            name="isAgreed2"
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
              onChange={(event) => {
                argCheck.b = !(argCheck.b);
                if ( (argCheck.a == true)&&(argCheck.b) ) { setSubmit({ ...submit, isAgreed: event.target.checked }); }
              }}
            >
              동의합니다 (필수)
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
