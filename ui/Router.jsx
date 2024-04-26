import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home.jsx';
import { NotFound } from './NotFound.jsx';
import { Signup } from './SignUp.jsx';

export const Router = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);