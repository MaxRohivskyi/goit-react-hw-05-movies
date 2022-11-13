import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { NotFound } from './NotFound/NotFound';

const Home = lazy(() => import('pages/Home'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":slug/*" element={<MovieDetails />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound showBtn={true} />} />
      </Routes>
    </>
  );
};
