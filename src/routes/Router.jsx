import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const FullLayout = lazy(() => import('../layouts/full/FullLayout'));
const BlankLayout = lazy(() => import('../layouts/blank/BlankLayout'));
const Dashboard = lazy(() => import('../views/dashboard/Dashboard'));
const Login = lazy(() => import('../views/authentication/Login'));
const Error = lazy(() => import('../views/authentication/Error'));

const suspense = (children) => (
  <Suspense fallback={<div>Loading...</div>}>
    {children}
  </Suspense>
);

const Router = [
  {
    path: '/',
    element: suspense(<FullLayout />),
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', element: suspense(<Dashboard />) },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: suspense(<BlankLayout />),
    children: [
      { path: '404', element: suspense(<Error />) },
      { path: 'login', element: suspense(<Login />) },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

const router = createBrowserRouter(Router);

export default router; 