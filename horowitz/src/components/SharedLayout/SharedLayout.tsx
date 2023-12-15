import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { lazy, Suspense } from 'react';
import { token } from '../../api/index';
import {
  useLoaderData,
  ActionFunctionArgs,
  Params,
  ParamParseKey,
  LoaderFunction,
} from 'react-router-dom';
const PreviewProvider = lazy(() => import('../PreviewProvider'));
const PathNames = {
  newsDetail: '/',
} as const;

interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof PathNames.newsDetail>>;
}

export const Loader: LoaderFunction = async ({ request }: Args) => {
  const url = new URL(request.url);
  const previewDrafts = url.searchParams.get('draft');
  return { previewDrafts };
};
const SharedLayout = () => {
  const { previewDrafts } = useLoaderData() as { previewDrafts: boolean };
  return (
    <Stack minHeight='100vh'>
      <Header />
      <Stack component='main' minHeight='100%' flex='1 1 auto'>
        {previewDrafts ? (
          <Suspense fallback={<h1>Loading...</h1>}>
            <PreviewProvider token={token!}>
              <Outlet />
            </PreviewProvider>
          </Suspense>
        ) : (
          <Outlet />
        )}
      </Stack>
      <Footer />
    </Stack>
  );
};

export default SharedLayout;
