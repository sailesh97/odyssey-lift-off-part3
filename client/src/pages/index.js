import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** importing our pages */
import Tracks from './tracks';
import Track from './track';
import Modules from './modules';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Tracks />} path="/" />
        <Route element={<Track />} path="/track/:trackId" />
        <Route element={<Modules />} path="/track/:trackId/module/:moduleId" />
      </Routes>
    </BrowserRouter>
  );
}
