// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './shared/Layout';
import './index.css';
import PaymentList from './pages/[payment]/PaymentList';
import HomePage from './pages/Home';
import 'remixicon/fonts/remixicon.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />          
          <Route path="payment" element={<PaymentList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
