import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header.jsx';
import { Router } from './Router.jsx';

export const App = () => 
  <BrowserRouter>
    <div>
      <Header />
      <div className="min-h-full">
        <div className="max-w-4xl mx-auto p-2">
          <Router />
        </div>
      </div>
    </div>
  </BrowserRouter>
;
