import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import ListPage from './pages/List';
import WritePage from './pages/Write';
import LoginPage from './pages/Login';
import JoinPage from './pages/Join';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          {/* <Route path="/" element={<LoginPage />}></Route> */}
          <Route path="/" element={<ListPage />}></Route>
          <Route path="/write" element={<WritePage />}></Route>
          <Route path="/write/:id" element={<WritePage />}></Route>
          <Route path="/join" element={<JoinPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
