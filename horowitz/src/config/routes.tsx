import { createBrowserRouter } from 'react-router-dom';
import SharedLayout, { Loader } from '../components/SharedLayout/SharedLayout';
import MainPage from '../components/MainPage/MainPage';
import News, { newsLoader } from '../components/News/News';
import NewsItem, { newsItemLoader } from '../components/NewsItem/NewsItem';
import Stub from '../components/Stub/Stub';

import LangRedirect, {
  langAction,
} from '../components/LangRedirect/LangRedirect';

const routes = createBrowserRouter([
  {
    path: '/',
    loader: langAction,
    element: <LangRedirect />,
  },
  {
    path: '/:lang',
    element: <SharedLayout />,
    loader: Loader,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'about',
        element: <Stub />,
      },
      {
        path: 'history',
        element: <Stub />,
      },
      {
        path: 'projects',
        element: <Stub />,
      },
      {
        path: 'news',
        element: <News />,
        loader: newsLoader,
      },
      {
        path: 'news/:newsSlug',
        element: <NewsItem />,
        loader: newsItemLoader,
      },
      {
        path: 'contacts',
        element: <Stub />,
      },
      {
        path: 'sponsors',
        element: <Stub />,
      },
    ],
  },
  {
    path: '*',
  },
]);

export default routes;
