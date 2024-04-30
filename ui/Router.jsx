import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home.jsx';
import { NotFound } from './NotFound.jsx';
import { Access } from './Access.jsx';
import { RoutePaths } from './RoutePaths.jsx';
import { LoggedUserOnly } from './components/LoggedUserOnly.jsx';
import { AnonymousOnly } from './components/AnonymousOnly.jsx';
import { RemoveTransaction } from './RemoveTransaction.jsx';
import { AdminOnly } from './components/AdminOnly.jsx';

export const Router = () => (
    <Routes>
        <Route path={RoutePaths.HOME} element={<LoggedUserOnly><Home /></LoggedUserOnly>} />
        <Route path={RoutePaths.ACCESS} element={<AnonymousOnly><Access /></AnonymousOnly>} />
        <Route path={RoutePaths.REMOVE_TRANSACTION} element={<AdminOnly><RemoveTransaction /></AdminOnly>} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);