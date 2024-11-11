import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { TasksPage } from 'components/pages/tasks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TasksPage />
  </React.StrictMode>
);
