import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import viVN from 'antd/locale/vi_VN';
import { useTranslation } from 'react-i18next';
import 'antd/dist/reset.css';

function App() {
  const { i18n } = useTranslation();
  const locale = i18n.language === 'en' ? enUS : viVN;

  return (
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
  );
}

export default App;
