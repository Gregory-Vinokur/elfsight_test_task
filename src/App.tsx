import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import Episode from './pages/Episode/Episode';
import NotFound from './pages/404/NotFound';
import MainLayout from './layouts/MainLayout';
import Characters from './pages/Characters/Characters';

export enum PATH {
  Characters = '/',
  EPISODE = 'episode',
  LOCATION = 'location',
  ERROR = '404',
  DEFAULT = '*',
}

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={PATH.Characters} element={<MainLayout />}>
            <Route index element={<Characters />} />
            <Route path={PATH.EPISODE} element={<Episode />} />
            <Route path={PATH.ERROR} element={<NotFound />} />
            <Route
              path={PATH.DEFAULT}
              element={<Navigate to="/404" replace />}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
