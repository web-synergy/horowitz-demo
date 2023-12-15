import { createBrowserRouter } from 'react-router-dom';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import MainPage from '../components/MainPage/MainPage';
import News from '../components/News/News';
import NewsItem from '../components/NewsItem/NewsItem';
import Stub from '../components/Stub/Stub';
import { newsLoader as singleNewsLoader } from '../components/NewsItem/NewsItem';
import { Loader } from '../components/SharedLayout/SharedLayout';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    loader: Loader,
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
        path: '/news/:newsSlug',
        element: <NewsItem />,
        loader: singleNewsLoader,
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
