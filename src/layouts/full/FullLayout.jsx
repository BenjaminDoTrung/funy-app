import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, Dropdown } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  LogoutOutlined,
  LoginOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Header, Sider, Content } = Layout;

const FullLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const menuItems = [
    { key: 'dashboard', icon: <DashboardOutlined />, label: t('sidebar.dashboard'), path: '/dashboard' },
    { key: 'users', icon: <UserOutlined />, label: t('sidebar.users'), path: '/users' },
    { key: 'orders', icon: <ShoppingCartOutlined />, label: t('sidebar.orders'), path: '/orders' },
    { key: 'settings', icon: <SettingOutlined />, label: t('sidebar.settings'), path: '/settings' },
    { key: 'login', icon: <LoginOutlined />, label: 'Login', path: '/auth/login' },
  ];

  const handleMenuClick = ({ key }) => {
    const item = menuItems.find((m) => m.key === key);
    if (item) navigate(item.path);
  };

  const langMenu = (
    <Menu>
      <Menu.Item key="vi" onClick={() => i18n.changeLanguage('vi')}>Tiếng Việt</Menu.Item>
      <Menu.Item key="en" onClick={() => i18n.changeLanguage('en')}>English</Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div style={{
          height: 64,
          margin: 16,
          color: '#fff',
          fontWeight: 700,
          fontSize: collapsed ? 28 : 24,
          textAlign: 'center',
          letterSpacing: 2,
          transition: 'all 0.2s',
          overflow: 'hidden',
        }}>
          {collapsed ? 'F' : 'FUNNY'}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          onClick={handleMenuClick}
          items={menuItems}
        />
        <Menu theme="dark" mode="inline" style={{ borderTop: '1px solid #222', marginTop: 16 }}>
          <Menu.Item key="logout" icon={<LogoutOutlined />}>{t('sidebar.logout')}</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: 20, marginLeft: 16 }}
          />
          <div style={{ marginRight: 24 }}>
            <Dropdown overlay={langMenu} placement="bottomRight">
              <Button icon={<GlobalOutlined />}>{i18n.language === 'vi' ? 'Tiếng Việt' : 'English'}</Button>
            </Dropdown>
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0', minHeight: 280 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default FullLayout; 