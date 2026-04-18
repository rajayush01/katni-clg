import { Routes, Route, Outlet } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';

import MainLayout from './components/layout/MainLayout';
import Loading from './components/ui/Loading';
import NotFound from './pages/NotFound';

const Home = lazy(() => import('./pages/Home'));

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const handleInitialLoadingComplete = () => {
    setIsInitialLoading(false);
  };

  if (isInitialLoading) {
    return (
      <Loading onComplete={handleInitialLoadingComplete} />
    );
  }

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Outlet />
            </MainLayout>
          }
        >
          <Route index element={<Home />} />
        </Route>

        <Route
          path="/404"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />

        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;