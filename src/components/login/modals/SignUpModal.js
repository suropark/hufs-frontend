import React from 'react';
//import { Modal, Button, Form, Container } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { message, Select, Modal, Button, Input, Form, Checkbox } from 'antd';
import { withRouter } from 'react-router';
import Header from '../../../views/Header/Header';

const SignUpModal = (props) => {
  const { Option } = Select;
  const [major, setMajor] = useState(false);
  const [doubleMajor, setDoubleMajor] = useState(false);
  const [submit, setSubmit] = useState({});

  useEffect(async () => {
    const request1 = await axios
      .get(`http://52.78.2.40:8080/major/main-major`) //1전공
      .then((response) => response.data.data); // 배열 [id, name ]
    setMajor(request1);
    console.log(request1);

    const request2 = await axios
      .get(`http://52.78.2.40:8080/major/double-major`) //이중전공
      .then((response) => response.data.data); // 배열 [id, name ]
    setDoubleMajor(request2);
    console.log(request2);
  }, []);

  useEffect(() => {
    console.log(submit);
  }, [submit]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const request = await axios
      .post('http://52.78.2.40:8080/user/sign-up', submit)
      .then((response) => {
        console.log(response.status);
        message.success('회원가입이 성공적으로 완료되었습니다 :)');
      })
      .catch((error) => {
        switch (error.response?.status) {
          case 401:
            alert('개인');
        }
      });
    console.log(request.status);
  };

  const layout = {
    labelcol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  // const Demo = () => {
  //   const onFinish = (values: any) => {
  //     console.log('Success:', values);
  // };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log('Failed:', errorInfo);
  // };

  return (
    <>
      {/* <Modal
          title="회원가입 / Sign Up"
          centered
          visible={signUpModal}
          onOk={() => showSignUpModal(false)}
          onCancel={() => showSignUpModal(false)}
        > */}
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
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="닉네임"
            name="nickname"
            rules={[{ required: true, message: '닉네임을 입력하세요!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="웹메일"
            namxtra="@hufs.ac.kr 앞 부분까지만 입력해주세요.
            <br />위 웹메일로 학생 확인 인증 메일이 발송됩니다. 인증까지는 최대 24시간이 소요됩니다."
            name="webMail"
            rules={[{ required: true, message: 'put your password!' }]}
          >
            {/* <Input.P
          > */}
          </Form.Item>

          <Form.Item label="1전공" name="majorId">
            <Select
              style={{ width: 170 }}
              // onChange={onChange}
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
              style={{ width: 170 }}
              // onChange={onChange}
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
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>동의합니다</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      {/* </Modal> */}
    </>
  );
};

export default withRouter(SignUpModal);

{
  /* <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">회원가입</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicNickname">
              <Form.Label>닉네임</Form.Label>
              <Form.Control
                value={submit.nickname}
                onChange={(event) =>
                  setSubmit({ ...submit, nickname: event.target.value })
                }
                placeholder="닉네임을 입력하세요"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicWebMail">
              <Form.Label>웹메일</Form.Label>
              <Form.Control
                value={submit.webMail}
                onChange={(event) =>
                  setSubmit({ ...submit, webMail: event.target.value })
                }
                placeholder="웹메일/지메일(G-suite) 입력하세요"
              />
              <Form.Text className="text-muted">
                @hufs.ac.kr 앞 부분까지만 입력해주세요.
                <br />위 웹메일로 학생 확인 인증 메일이 발송됩니다. 인증까지는
                최대 24시간이 소요됩니다.
              </Form.Text>
            </Form.Group>

            <Form.Control
              onChange={(event) =>
                setSubmit({ ...submit, mainMajorId: +event.target.value })
              }
              as="select"
            >
              <Form.Label>1전공</Form.Label>
              {doubleMajor
                ? doubleMajor.map((item) => {
                    return <option value={item.id}>{item.name}</option>;
                  })
                : null}
            </Form.Control>
            <Form.Group controlId="formBasicMinor">
              <Form.Label>이중전공</Form.Label>
              <Form.Control
                onChange={(event) =>
                  setSubmit({ ...submit, doubleMajorId: +event.target.value })
                }
                as="select"
                placeholder="이중전공/부전공을 입력하세요"
              >
                {major
                  ? major.map((item) => {
                      return <option value={item.id}>{item.name}</option>;
                    })
                  : null}
              </Form.Control>
            </Form.Group>
            <Form.Text className="text-muted">
              전공 변경은 한 번만 가능합니다. 정확하게 입력해주세요.
            </Form.Text>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="동의합니다"
                onClick={(event) => setSubmit({ ...submit, isAggred: true })}
              />
            </Form.Group>
            <Button onClick={onSubmit} variant="primary" type="submit">
              회원가입
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Container>
    </Modal> */
}
