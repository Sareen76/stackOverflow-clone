import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Auth from './pages/Auth';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Questions from './pages/Questions';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth and fallback routes */}
        <Route path="auth" element={<Auth />} />
        <Route path="*" element={<Auth />} />

        {/* Layout and nested routes */}
        <Route path="/" element={<Layout />}>
          {/* Redirect to /questions by default */}
          {/* <Route index element={<Navigate to="questions" replace />} /> */}
          <Route  index element={<Questions />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
