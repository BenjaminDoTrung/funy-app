import React from 'react';
import { Button, Typography, Space } from 'antd';
import { HomeOutlined, ReloadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

const Error = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div style={{ textAlign: 'center', padding: 32 }}>
      <Title level={1} style={{ fontSize: '6rem', fontWeight: 'bold', color: '#1677ff' }}>404</Title>
      <Title level={3} style={{ marginBottom: 16 }}>{t('error.notFound')}</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 32 }}>
        {t('error.desc')}
      </Text>
      <Space size="middle">
        <Button
          type="primary"
          icon={<HomeOutlined />}
          size="large"
          onClick={() => navigate('/dashboard')}
        >
          {t('error.goHome')}
        </Button>
        <Button
          icon={<ReloadOutlined />}
          size="large"
          onClick={() => window.location.reload()}
        >
          Tải lại trang
        </Button>
      </Space>
    </div>
  );
};

export default Error; 