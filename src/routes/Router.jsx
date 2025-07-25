import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Error from '../views/authentication/Error';

const FullLayout = lazy(() => import('../layouts/full/FullLayout'));
const BlankLayout = lazy(() => import('../layouts/blank/BlankLayout'));
const Dashboard = lazy(() => import('../views/dashboard/Dashboard'));
const Login = lazy(() => import('../views/authentication/Login'));
// const Error = lazy(() => import('../views/authentication/Error'));
const GeneralSettings = lazy(() => import('../views/settings/GeneralSettings'));
const ApplicationSettings = lazy(() => import('../views/settings/ApplicationSettings'));
const SecuritySettings = lazy(() => import('../views/settings/SecuritySettings'));
const NotificationSettings = lazy(() => import('../views/settings/NotificationSettings'));

const suspense = (children) => (
  <Suspense fallback={<div>Loading...</div>}>
    {children}
  </Suspense>
);

const Router = [
  {
    path: '/',
    element: suspense(<FullLayout />),
    errorElement: <Error />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" replace /> },
      { path: '/dashboard', element: suspense(<Dashboard />) },
      { path: '/settings/general', element: suspense(<GeneralSettings />) },
      { path: '/settings/application', element: suspense(<ApplicationSettings />) },
      { path: '/settings/security', element: suspense(<SecuritySettings />) },
      { path: '/settings/notifications', element: suspense(<NotificationSettings />) },
      { path: '*', element: <Navigate to="/dashboard" replace /> },
    ],
  },
  {
    path: '/auth',
    element: suspense(<BlankLayout />),
    errorElement: <Error />,
    children: [
      { path: '404', element: suspense(<Error />) },
      { path: 'login', element: suspense(<Login />) },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  // Redirect tất cả các route khác về dashboard
  {
    path: '*',
    element: <Navigate to="/dashboard" replace />,
  },
];

const router = createBrowserRouter(Router);

export default router; 