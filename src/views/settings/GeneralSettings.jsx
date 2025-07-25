import React from 'react';
import { Card, Form, Input, Switch, Button, Space, Divider } from 'antd';
import { useTranslation } from 'react-i18next';

const GeneralSettings = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('General settings:', values);
  };

  return (
    <div style={{ padding: '24px' }}>
      <Card title={t('settings.general')} style={{ maxWidth: 800 }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            siteName: 'Funy App',
            siteDescription: 'Ứng dụng quản lý',
            enableNotifications: true,
            autoSave: true,
          }}
        >
          <Form.Item
            label="Tên trang web"
            name="siteName"
            rules={[{ required: true, message: 'Vui lòng nhập tên trang web!' }]}
          >
            <Input placeholder="Nhập tên trang web" />
          </Form.Item>

          <Form.Item
            label="Mô tả trang web"
            name="siteDescription"
          >
            <Input.TextArea rows={3} placeholder="Nhập mô tả trang web" />
          </Form.Item>

          <Divider />

          <Form.Item
            label="Bật thông báo"
            name="enableNotifications"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="Tự động lưu"
            name="autoSave"
            valuePropName="checked"
          >
            <Switch />
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

export default GeneralSettings; 