import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Suspense, lazy } from 'react';

import './styles/app.scss'
import Header from './shared/Header';

import TitleManager from './functions/TitleManager';
import AppRouter from './router/AppRouter';


function App() { 

  const Request = lazy(() => import('./modules/auth/Request'));
  const Plans = lazy(() => import('./modules/plans/Plans'));
  const Resume = lazy(() => import('./modules/resume/Resume'));

  return (
    <>
    
    <Router>
      <TitleManager />
      <Header />
      <AppRouter />
    </Router>
    </>
  )
}

export default App
