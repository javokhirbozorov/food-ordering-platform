import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';

// pages
import Page404 from './pages/Page404';

// Admin pages
import Customers from './pages/admin-pages/Customers';
import StockLevel from './pages/admin-pages/StockLevel';
import OpeningHours from './pages/admin-pages/OpeningHours';
import MenuPage from './pages/admin-pages/MenuPage';

// User pages

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/menu" />, index: true },
        { path: 'menu', element: <MenuPage /> },
        { path: 'stock-level', element: <StockLevel /> },
        { path: 'opening-hours', element: <OpeningHours /> },
        { path: 'customers', element: <Customers /> },
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
