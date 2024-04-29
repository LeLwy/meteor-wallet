import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home.jsx';
import { NotFound } from './NotFound.jsx';
import { Access } from './Access.jsx';
import { ForgotPassword } from './ForgotPassword.jsx';
import { ResetPassword } from './ResetPassword.jsx';
import { RoutePaths } from './RoutePaths.jsx';

export const Router = () => (
    <Routes>
        <Route path={RoutePaths.HOME} element={<Home />} />
        <Route path={RoutePaths.ACCESS} element={<Access />} />
        <Route path={RoutePaths.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={`${RoutePaths.RESET_PASSWORD}/:token`} element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);