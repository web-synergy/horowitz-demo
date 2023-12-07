import { createBrowserRouter } from 'react-router-dom';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import MainPage from '../components/MainPage/MainPage';
import News from '../components/News/News';
import Stub from '../components/Stub/Stub';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/about',
        element: <Stub />,
      },
      {
        path: '/history',
        element: <Stub />,
      },
      {
        path: '/projects',
        element: <Stub />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/contacts',
        element: <Stub />,
      },
      {
        path: '/sponsors',
        element: <Stub />,
      },
    ],
  },
]);

export default routes;
