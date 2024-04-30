import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home.jsx';
import { NotFound } from './NotFound.jsx';
import { Access } from './Access.jsx';
import { ForgotPassword } from './ForgotPassword.jsx';
import { ResetPassword } from './ResetPassword.jsx';
import { RoutePaths } from './RoutePaths.jsx';
import { LoggedUserOnly } from './components/LoggedUserOnly.jsx';
import { AnonymousOnly } from './components/AnonymousOnly.jsx';

export const Router = () => (
    <Routes>
        <Route path={RoutePaths.HOME} element={<LoggedUserOnly><Home /></LoggedUserOnly>} />
        <Route path={RoutePaths.ACCESS} element={<AnonymousOnly><Access /></AnonymousOnly>} />
        <Route path={RoutePaths.FORGOT_PASSWORD} element={<AnonymousOnly><ForgotPassword /></AnonymousOnly>} />
        <Route path={`${RoutePaths.RESET_PASSWORD}/:token`} element={<AnonymousOnly><ResetPassword /></AnonymousOnly>} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);