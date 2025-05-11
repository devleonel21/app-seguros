import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react'; 
import Loader from '../components/loader/Loader';

// Lazy-loaded components
const Request = lazy(() => import('../modules/auth/Request'));
const Plans = lazy(() => import('../modules/plans/Plans'));
const Resume = lazy(() => import('../modules/resume/Resume'));

function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Request />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/resume" element={<Resume />} /> 
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
