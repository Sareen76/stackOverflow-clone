import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from './pages/Auth';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Questions from './pages/Questions';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<Auth />} />
        <Route path="*" element={<Auth />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="questions" element={<Questions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;