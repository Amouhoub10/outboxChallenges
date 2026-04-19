import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Challenge1 from './pages/Challenge1';
import Challenge2 from './pages/Challenge2';
import Challenge3 from './pages/Challenge3';
import About from './pages/About';
import './App.css';

function NavigationBanner() {
  const location = useLocation();

  return (
    <div style={{ position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(17, 24, 39, 0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', padding: '6px', borderRadius: '999px', display: 'flex', gap: '4px', fontSize: '13px', fontFamily: 'Inter, sans-serif', zIndex: 9999, border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
      <Link
        to="/"
        style={{ padding: '8px 16px', borderRadius: '999px', background: location.pathname === '/' ? 'rgba(255,255,255,0.15)' : 'transparent', color: location.pathname === '/' ? '#fff' : '#9CA3AF', fontWeight: 500, textDecoration: 'none', transition: 'all 0.2s' }}
      >
        About
      </Link>
      <Link
        to="/challenge-1"
        style={{ padding: '8px 16px', borderRadius: '999px', background: location.pathname === '/challenge-1' ? 'rgba(255,255,255,0.15)' : 'transparent', color: location.pathname === '/challenge-1' ? '#fff' : '#9CA3AF', fontWeight: 500, textDecoration: 'none', transition: 'all 0.2s' }}
      >
        Challenge 1
      </Link>
      <Link
        to="/challenge-2"
        style={{ padding: '8px 16px', borderRadius: '999px', background: location.pathname === '/challenge-2' ? 'rgba(255,255,255,0.15)' : 'transparent', color: location.pathname === '/challenge-2' ? '#fff' : '#9CA3AF', fontWeight: 500, textDecoration: 'none', transition: 'all 0.2s' }}
      >
        Challenge 2
      </Link>
      <Link
        to="/challenge-3"
        style={{ padding: '8px 16px', borderRadius: '999px', background: location.pathname === '/challenge-3' ? 'rgba(255,255,255,0.15)' : 'transparent', color: location.pathname === '/challenge-3' ? '#fff' : '#9CA3AF', fontWeight: 500, textDecoration: 'none', transition: 'all 0.2s' }}
      >
        Challenge 3
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <NavigationBanner />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/challenge-1" element={<Challenge1 />} />
        <Route path="/challenge-2" element={<Challenge2 />} />
        <Route path="/challenge-3" element={<Challenge3 />} />
      </Routes>
    </Router>
  );
}

export default App;
