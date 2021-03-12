import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import AppLayout from './application/layout/AppLayout';
import MySpinner from './ui/MySpinner';

function App(): React.ReactElement {
  return (
    <Suspense fallback={<MySpinner />}>
      <Router>
        <AppLayout />
      </Router>
    </Suspense>
  );
}

export default App;
