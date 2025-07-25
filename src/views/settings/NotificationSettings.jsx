import React from 'react';
import { Card, Form, Switch, Button, Space, Divider, Row, Col, Select } from 'antd';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

const NotificationSettings = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Notification settings:', values);
  };

  return (
    <div style={{ padding: '24px' }}>
      <Card title={t('settings.notifications')} style={{ maxWidth: 800 }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            emailNotifications: true,
            pushNotifications: true,
            smsNotifications: false,
            orderUpdates: true,
            systemUpdates: true,
            marketingEmails: false,
            notificationFrequency: 'immediate',
          }}
        >
          <Form.Item
            label="Thông báo qua email"
            name="emailNotifications"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="Thông báo đẩy"
            name="pushNotifications"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="Thông báo SMS"
            name="smsNotifications"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Divider />

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Cập nhật đơn hàng"
                name="orderUpdates"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Cập nhật hệ thống"
                name="systemUpdates"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Email marketing"
            name="marketingEmails"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Divider />

          <Form.Item
            label="Tần suất thông báo"
            name="notificationFrequency"
          >
            <Select placeholder="Chọn tần suất thông báo">
              <Option value="immediate">Ngay lập tức</Option>
              <Option value="hourly">Hàng giờ</Option>
              <Option value="daily">Hàng ngày</Option>
              <Option value="weekly">Hàng tuần</Option>
            </Select>
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

export default NotificationSettings; 