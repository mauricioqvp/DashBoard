import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app.routes';

import App from './app.routes';

const Routes: React.FC = () => (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
)

export default Routes;