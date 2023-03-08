import React from "react";
import { Route, Routes, redirect } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Navbar from "./components/NavBar/Navbar";
import Main from "./components/Page/Main";

const App = () => {
    return (
        <div className="min-h-scree">
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default App;
