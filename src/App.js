import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "./css/route-pages.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import Movies from "./pages/Movies";
import PrivateRoutes from "./utils/PrivateRoutes";
import {AuthProvider} from "./utils/AuthContext";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/movie" element={<Movies />}/>
                    <Route element={<PrivateRoutes/>}>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                </Routes>
            </AuthProvider>
    </Router>
  );
}

export default App;
