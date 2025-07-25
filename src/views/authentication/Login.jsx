import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Dropdown, Menu } from 'antd';
import { UserOutlined, LockOutlined, GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const backgroundUrl = 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { i18n, t } = useTranslation();

  const onFinish = (values) => {
    setLoading(true);
    // Xử lý đăng nhập ở đây
    setTimeout(() => setLoading(false), 1000);
  };

  const langMenu = (
    <Menu>
      <Menu.Item key="vi" onClick={() => i18n.changeLanguage('vi')}>Tiếng Việt</Menu.Item>
      <Menu.Item key="en" onClick={() => i18n.changeLanguage('en')}>English</Menu.Item>
    </Menu>
  );

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Header trong suốt trên cùng */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: 56,
          background: 'transparent',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 100,
          padding: '0 40px',
          boxSizing: 'border-box',
          fontWeight: 700,
          fontSize: 22,
          letterSpacing: 2,
          textShadow: '0 2px 8px #000',
        }}
      >
        <span style={{ fontFamily: 'inherit', fontWeight: 700, fontSize: 24, letterSpacing: 2 }}>FUNNY</span>
        <Dropdown overlay={langMenu} placement="bottomRight">
          <Button icon={<GlobalOutlined />} style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', marginLeft: 8 }}>
            {i18n.language === 'vi' ? 'Tiếng Việt' : 'English'}
          </Button>
        </Dropdown>
      </div>
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
      {/* Chữ FUNNY phía trên form login */}
      <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24, marginTop: 80 }}>
        <span style={{ color: '#fff', fontWeight: 900, fontSize: 48, letterSpacing: 2, textShadow: '0 4px 16px #000' }}>FUNNY</span>
      </div>
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
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: t('login.usernameRequired', 'Please input your username!') }]}
              >
                <Input
                  prefix={<UserOutlined style={{ color: '#aaa' }} />}
                  placeholder={t('login.username')}
                  size="large"
                  style={{ letterSpacing: 1 }}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: t('login.passwordRequired', 'Please input your password!') }]}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ color: '#aaa' }} />}
                  placeholder={t('login.password')}
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
                  {t('login.signInBtn')}
                </Button>
              </Form.Item>
              <Form.Item style={{ marginBottom: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox style={{ color: '#fff' }}>{t('login.remember')}</Checkbox>
                  </Form.Item>
                  <a href="#" style={{ color: '#fff', fontSize: 14 }}>{t('login.forgotPassword')}</a>
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