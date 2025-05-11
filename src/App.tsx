import { BrowserRouter as Router } from 'react-router-dom';  

import './styles/app.scss'
import Header from './shared/Header';

import TitleManager from './functions/TitleManager';
import AppRouter from './router/AppRouter';


function App() {  

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
