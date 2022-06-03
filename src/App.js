import Login from "components/Login";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from "pages/HomePage";
import Missing from "pages/Missing";
import { RequireAuth } from "hoc/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;