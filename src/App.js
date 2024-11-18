import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AdminPanel from './AdminPanel';
import ContractForm from './ContractForm';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav style={{ textAlign: 'center', padding: '10px', backgroundColor: '#1c1c1e' }}>
          <Link to="/" style={{ margin: '0 15px', color: 'white', textDecoration: 'none', fontSize: '18px' }}>
            Home
          </Link>
          <Link to="/admin" style={{ margin: '0 15px', color: 'white', textDecoration: 'none', fontSize: '18px' }}>
            Admin Panel
          </Link>
          <Link to="/contract" style={{ margin: '0 15px', color: 'white', textDecoration: 'none', fontSize: '18px' }}>
            Contract Form
          </Link>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/contract" element={<ContractForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
