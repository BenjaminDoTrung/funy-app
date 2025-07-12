import React from 'react';
import { Button, Typography } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Error = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: 32 }}>
      <Title level={1} style={{ fontSize: '6rem', fontWeight: 'bold', color: '#1677ff' }}>404</Title>
      <Title level={3} style={{ marginBottom: 16 }}>Page Not Found</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 32 }}>
        The page you are looking for does not exist.
      </Text>
      <Button
        type="primary"
        icon={<HomeOutlined />}
        size="large"
        onClick={() => navigate('/')}
      >
        Go Home
      </Button>
    </div>
  );
};

export default Error; 