import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './styles/app.scss'
import Header from './shared/Header';

import Plans from './modules/plans/Plans';
import Request from './modules/auth/Request';
import Resume from './modules/resume/Resume';
import TitleManager from './functions/TitleManager';


function App() { 

  return (
    <>
    
    <Router>
    <TitleManager />
       <Header />
      <Routes>
        <Route path="/" element={<Request />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
