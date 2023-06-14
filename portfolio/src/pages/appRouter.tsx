import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ErrorBoundary from '../components/common/errorBounday';
import Spinner from '../components/common/Spinner';

//component
import Layout from '../components/layout';
import Navigation from '../components/layout/navigation';
//page
const Main = lazy(() => import('./main'));
const FloatingPage = lazy(() => import('./floating'));
const Board = lazy(() => import('./board'));
const Closet = lazy(() => import('./closet'));
const Mypage = lazy(() => import('./mypage'));


const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Layout>
          <ErrorBoundary>
          <Suspense fallback={<Spinner />} >
            <Routes>
              <Route path="/main/*" element={<Main />} />
              <Route path="/floating/*" element={<FloatingPage />} />
              <Route path="/board/*" element={<Board />} />
              <Route path="/closet/*" element={<Closet />} />
              <Route path="/mypage/*" element={<Mypage />} />
              <Route path="/" element={<Navigate replace to="/main" />} />
            </Routes>
          </Suspense>
          </ErrorBoundary>
        </Layout>
      </BrowserRouter>
    </>
  );
};
export default AppRouter;
