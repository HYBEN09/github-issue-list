import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import RootLayout, { BaseLayout } from './pages/RootLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/',
        element: (
          <BaseLayout>
            <HomePage />
          </BaseLayout>
        ),
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
