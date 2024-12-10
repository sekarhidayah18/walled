import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Transfer from './pages/Transfer.jsx'
import Login from './pages/Login.jsx'
import DashboardLayout from './pages/DashboardLayout.jsx'
import NotFound from "./pages/NotFound.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<App />} />
          <Route path="/transfer" element={<Transfer />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
