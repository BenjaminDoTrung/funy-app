import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const backgroundUrl = 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    // Xử lý đăng nhập ở đây
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Lớp phủ blur */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backdropFilter: 'blur(6px)',
          background: 'rgba(0,0,0,0.4)',
          zIndex: 1,
        }}
      />
      {/* Form login */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 350,
        }}
      >
        <div style={{ background: 'rgba(0,0,0,0.5)', color: '#fff', borderRadius: 8, boxShadow: '0 8px 32px 0 rgba(31,38,135,0.37)' }}>
          <div style={{ padding: 32 }}>
            <Typography.Title level={2} style={{ textAlign: 'center', color: '#fff', letterSpacing: 2, fontWeight: 700, marginBottom: 24 }}>
              FUNNY
            </Typography.Title>
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input
                  prefix={<UserOutlined style={{ color: '#aaa' }} />}
                  placeholder="USERNAME"
                  size="large"
                  style={{ letterSpacing: 1 }}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ color: '#aaa' }} />}
                  placeholder="PASSWORD"
                  size="large"
                  style={{ letterSpacing: 1 }}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                  size="large"
                  style={{ fontWeight: 700, letterSpacing: 2 }}
                >
                  SIGN IN
                </Button>
              </Form.Item>
              <Form.Item style={{ marginBottom: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox style={{ color: '#fff' }}>Remember me</Checkbox>
                  </Form.Item>
                  <a href="#" style={{ color: '#fff', fontSize: 14 }}>Forgot password?</a>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;