import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import ListPage from './pages/List';
import WritePage from './pages/Write';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />}></Route>
          <Route path="/write" element={<WritePage />}></Route>
          <Route path="/write/:id" element={<WritePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
