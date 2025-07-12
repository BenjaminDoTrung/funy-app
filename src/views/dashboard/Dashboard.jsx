import React from 'react';
import { Row, Col, Card, Typography, Statistic, Space } from 'antd';
import { UserOutlined, ShoppingCartOutlined, DollarOutlined, RiseOutlined } from '@ant-design/icons';
import ReactApexChart from 'react-apexcharts';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

const Dashboard = () => {
  const { t } = useTranslation();
  const stats = [
    {
      title: t('dashboard.totalUsers'),
      value: 1234,
      icon: <UserOutlined style={{ fontSize: 32, color: '#1677ff' }} />,
    },
    {
      title: t('dashboard.totalSales'),
      value: 45678,
      prefix: '$',
      icon: <DollarOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
    },
    {
      title: t('dashboard.totalOrders'),
      value: 567,
      icon: <ShoppingCartOutlined style={{ fontSize: 32, color: '#faad14' }} />,
    },
    {
      title: t('dashboard.growth'),
      value: 12.5,
      suffix: '%',
      icon: <RiseOutlined style={{ fontSize: 32, color: '#13c2c2' }} />,
    },
  ];

  const chartOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
    colors: ['#1677ff'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
      labels: {
        formatter: (val) => `$${val}k`,
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `$${val}k`,
      },
    },
  };

  const chartSeries = [
    {
      name: t('dashboard.totalSales'),
      data: [31, 40, 28, 51, 42, 109, 100, 120, 80, 90, 110, 130],
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Title level={3} style={{ marginBottom: 24 }}>{t('dashboard.title')}</Title>
      <Row gutter={[24, 24]}>
        {stats.map((stat, idx) => (
          <Col xs={24} sm={12} md={6} key={idx}>
            <Card>
              <Space align="center">
                {stat.icon}
                <Statistic
                  title={stat.title}
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  valueStyle={{ fontSize: 28 }}
                />
              </Space>
            </Card>
          </Col>
        ))}
        <Col xs={24} md={16}>
          <Card style={{ height: 400 }}>
            <Title level={5}>{t('dashboard.salesOverview')}</Title>
            <ReactApexChart
              options={chartOptions}
              series={chartSeries}
              type="area"
              height={300}
            />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card style={{ height: 400 }}>
            <Title level={5}>{t('dashboard.recentActivity')}</Title>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: 8, color: '#888' }}>• {t('dashboard.newUser')}</li>
              <li style={{ marginBottom: 8, color: '#888' }}>• {t('dashboard.orderCompleted')}</li>
              <li style={{ marginBottom: 8, color: '#888' }}>• {t('dashboard.paymentReceived')}</li>
              <li style={{ marginBottom: 8, color: '#888' }}>• {t('dashboard.newProduct')}</li>
              <li style={{ marginBottom: 8, color: '#888' }}>• {t('dashboard.systemUpdate')}</li>
              <li style={{ marginBottom: 8, color: '#888' }}>• {t('dashboard.backupCompleted')}</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard; 