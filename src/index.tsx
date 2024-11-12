import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { TasksPage } from 'components/pages/tasks';
import { LoginPage } from 'components/pages/login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);
