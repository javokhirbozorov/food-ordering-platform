import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';

// pages
import Page404 from './pages/Page404';

// Admin pages

// User pages

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/menu" />, index: true },
        { path: 'menu', element: <div>Menu</div> },
        { path: 'stock-level', element: <div>Stock Level</div> },
        { path: 'opening-hours', element: <div>Opening Hours</div> },
        { path: 'customers', element: <div>Customers</div> },
      ],
    },
    {
      path: '/',
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/main" />, index: true },
        { path: '/main', element: <div>Food Ordering Platform</div> },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
