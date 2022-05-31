import React from "react";
import Login from "./components/Login";
import Missing from "./components/Missing";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;