import { Form, Input, Button } from 'antd';

function LoginForm() {
  const onFinish = (values) => {
    // login method.
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      style={{ width: '600px' }}
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="아이디"
        name="아이디"
        rules={[
          {
            required: true,
            message: '아이디 입력!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="비밀번호"
        name="비밀번호"
        rules={[
          {
            required: true,
            message: '비밀번호 입력!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          로그인
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
