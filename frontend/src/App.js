import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<LoginForm />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </div>
  );
};

export default App;
