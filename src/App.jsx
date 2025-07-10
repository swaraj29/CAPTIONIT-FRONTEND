import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import NewCaption from './containers/NewCaption';
import ProtectedRoute from './Common/ProtectedRoute';
import Header from './Common/Header';
import Chatbot from './containers/Chatbot'; // 👈 Chatbot widget import

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/newcaption"
          element={
            <ProtectedRoute>
              <NewCaption />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* ✅ Chatbot always available */}
      <Chatbot />
    </Router>
  );
};

export default App;
