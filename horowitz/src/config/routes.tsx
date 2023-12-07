import { createBrowserRouter } from 'react-router-dom';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import MainPage from '../components/MainPage/MainPage';
import News from '../components/News/News';
import Sub from '../components/Stub/Stub';

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
        element: <Sub title="about" />,
      },
      {
        path: '/history',
        element: <Sub title="history" />,
      },
      {
        path: '/projects',
        element: <Sub title="projects" />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/contacts',
        element: <Sub title="contacts" />,
      },
      {
        path: '/sponsors',
        element: <Sub title="sponsors" />,
      },
    ],
  },
]);

export default routes;
