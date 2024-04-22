// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and other components from react-router-dom
import FeatureList from './FeatureList';
import CommentForm from './CommentForm';

const App = () => {
  return (
    <Router> {/* Wrap your entire application with Router */}
      <div>
        <Routes>
          <Route path="/" element={<FeatureList />} />
          <Route path="/features/:id/comments" element={<CommentForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
