import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <div id="portal" className="min-h-screen w-full z-[1]" />
  </StrictMode>,
);
