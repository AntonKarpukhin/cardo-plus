import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routing/router';
import { LayoutMain } from './components';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <LayoutMain>
            <RouterProvider router={router} />
        </LayoutMain>
    </React.StrictMode>,
);
