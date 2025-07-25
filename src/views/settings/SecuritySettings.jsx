import React from 'react';
import { Card, Form, Input, Switch, Button, Space, Divider, Alert } from 'antd';
import { useTranslation } from 'react-i18next';

const SecuritySettings = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Security settings:', values);
  };

  return (
    <div style={{ padding: '24px' }}>
      <Card title={t('settings.security')} style={{ maxWidth: 800 }}>
        <Alert
          message="Bảo mật tài khoản"
          description="Các cài đặt bảo mật giúp bảo vệ tài khoản của bạn khỏi các mối đe dọa bên ngoài."
          type="info"
          showIcon
          style={{ marginBottom: 24 }}
        />

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            enableTwoFactor: false,
            enableLoginNotifications: true,
            sessionTimeout: 30,
            requirePasswordChange: false,
          }}
        >
          <Form.Item
            label="Xác thực hai yếu tố (2FA)"
            name="enableTwoFactor"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="Thông báo đăng nhập"
            name="enableLoginNotifications"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Divider />

          <Form.Item
            label="Thời gian timeout phiên làm việc (phút)"
            name="sessionTimeout"
          >
            <Input type="number" min={5} max={480} />
          </Form.Item>

          <Form.Item
            label="Yêu cầu đổi mật khẩu định kỳ"
            name="requirePasswordChange"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Divider />

          <Form.Item
            label="Mật khẩu hiện tại"
            name="currentPassword"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu hiện tại!' }]}
          >
            <Input.Password placeholder="Nhập mật khẩu hiện tại" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu mới"
            name="newPassword"
            rules={[
              { required: true, message: 'Vui lòng nhập mật khẩu mới!' },
              { min: 8, message: 'Mật khẩu phải có ít nhất 8 ký tự!' }
            ]}
          >
            <Input.Password placeholder="Nhập mật khẩu mới" />
          </Form.Item>

          <Form.Item
            label="Xác nhận mật khẩu mới"
            name="confirmPassword"
            dependencies={['newPassword']}
            rules={[
              { required: true, message: 'Vui lòng xác nhận mật khẩu mới!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Xác nhận mật khẩu mới" />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Lưu cài đặt
              </Button>
              <Button onClick={() => form.resetFields()}>
                Đặt lại
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SecuritySettings; 