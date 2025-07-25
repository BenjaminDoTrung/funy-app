import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
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
  AppstoreOutlined,
  SecurityScanOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Header, Sider, Content } = Layout;

const FullLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Tự động chuyển về dashboard khi reload trang
  useEffect(() => {
    if (isInitialLoad && location.pathname !== '/dashboard') {
      navigate('/dashboard', { replace: true });
      setIsInitialLoad(false);
    }
  }, [location.pathname, navigate, isInitialLoad]);

  // Xác định menu item được chọn dựa trên current path
  const getSelectedKey = () => {
    if (location.pathname === '/dashboard') return 'dashboard';
    if (location.pathname.startsWith('/settings/')) {
      const settingType = location.pathname.split('/')[2];
      return `settings-${settingType}`;
    }
    return '';
  };

  const menuItems = [
    { key: 'dashboard', icon: <DashboardOutlined />, label: t('sidebar.dashboard'), path: '/dashboard' },
    { key: 'users', icon: <UserOutlined />, label: t('sidebar.users'), path: '/users' },
    { key: 'orders', icon: <ShoppingCartOutlined />, label: t('sidebar.orders'), path: '/orders' },
    { 
      key: 'settings', 
      icon: <SettingOutlined />, 
      label: t('sidebar.settings'),
      children: [
        { key: 'settings-general', icon: <SettingOutlined />, label: t('settings.general'), path: '/settings/general' },
        { key: 'settings-application', icon: <AppstoreOutlined />, label: t('settings.application'), path: '/settings/application' },
        { key: 'settings-security', icon: <SecurityScanOutlined />, label: t('settings.security'), path: '/settings/security' },
        { key: 'settings-notifications', icon: <BellOutlined />, label: t('settings.notifications'), path: '/settings/notifications' },
      ]
    },
    { key: 'login', icon: <LoginOutlined />, label: 'Login', path: '/auth/login' },
  ];

  const handleMenuClick = ({ key }) => {
    try {
      // Tìm item trong menu chính
      let item = menuItems.find((m) => m.key === key);
      
      // Nếu không tìm thấy trong menu chính, tìm trong submenu
      if (!item) {
        for (const menuItem of menuItems) {
          if (menuItem.children) {
            const subItem = menuItem.children.find((child) => child.key === key);
            if (subItem) {
              item = subItem;
              break;
            }
          }
        }
      }
      
      if (item && item.path) {
        navigate(item.path);
      } else {
        // Nếu không tìm thấy route, chuyển đến trang lỗi
        navigate('/auth/404');
      }
    } catch (error) {
      console.error('Navigation error:', error);
      navigate('/auth/404');
    }
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
          selectedKeys={[getSelectedKey()]}
          defaultOpenKeys={['settings']}
          onClick={handleMenuClick}
          items={menuItems}
          style={{ borderRight: 0 }}
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