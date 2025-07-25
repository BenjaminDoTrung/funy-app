import React from 'react';
import { Card, Form, Select, InputNumber, Switch, Button, Space, Divider, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

const ApplicationSettings = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Application settings:', values);
  };

  return (
    <div style={{ padding: '24px' }}>
      <Card title={t('settings.application')} style={{ maxWidth: 800 }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            language: 'vi',
            timezone: 'Asia/Ho_Chi_Minh',
            dateFormat: 'DD/MM/YYYY',
            timeFormat: '24',
            pageSize: 10,
            enableDarkMode: false,
            enableAnimations: true,
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Ngôn ngữ"
                name="language"
                rules={[{ required: true, message: 'Vui lòng chọn ngôn ngữ!' }]}
              >
                <Select placeholder="Chọn ngôn ngữ">
                  <Option value="vi">Tiếng Việt</Option>
                  <Option value="en">English</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Múi giờ"
                name="timezone"
                rules={[{ required: true, message: 'Vui lòng chọn múi giờ!' }]}
              >
                <Select placeholder="Chọn múi giờ">
                  <Option value="Asia/Ho_Chi_Minh">Asia/Ho_Chi_Minh</Option>
                  <Option value="UTC">UTC</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Định dạng ngày"
                name="dateFormat"
              >
                <Select placeholder="Chọn định dạng ngày">
                  <Option value="DD/MM/YYYY">DD/MM/YYYY</Option>
                  <Option value="MM/DD/YYYY">MM/DD/YYYY</Option>
                  <Option value="YYYY-MM-DD">YYYY-MM-DD</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Định dạng giờ"
                name="timeFormat"
              >
                <Select placeholder="Chọn định dạng giờ">
                  <Option value="12">12 giờ</Option>
                  <Option value="24">24 giờ</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Divider />

          <Form.Item
            label="Số lượng item trên trang"
            name="pageSize"
          >
            <InputNumber min={5} max={100} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="Chế độ tối"
            name="enableDarkMode"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="Hiệu ứng animation"
            name="enableAnimations"
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

export default ApplicationSettings; 