import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import viVN from 'antd/locale/vi_VN';
import { useTranslation } from 'react-i18next';
import ErrorBoundaryWrapper from './components/ErrorBoundary';
import 'antd/dist/reset.css';

function App() {
  const { i18n } = useTranslation();
  const locale = i18n.language === 'en' ? enUS : viVN;

  // Global error handler
  React.useEffect(() => {
    const handleError = (event) => {
      console.error('Global error:', event.error);
      // Chuyển đến trang lỗi khi có lỗi JavaScript
      window.location.href = '/auth/404';
    };

    const handleUnhandledRejection = (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      // Chuyển đến trang lỗi khi có promise rejection
      window.location.href = '/auth/404';
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return (
    <ErrorBoundaryWrapper>
      <ConfigProvider
        locale={locale}
        theme={{
          token: {
            colorPrimary: '#1677ff', // màu mặc định Antd
            borderRadius: 8,
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </ErrorBoundaryWrapper>
  );
}

export default App;
