import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "./components/Api/axioClient";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Navbar from "./components/NavBar/Navbar";
import Main from "./components/Page/Main";
import Footer from "./components/Page/Footer";
import Error from "./components/Page/Error";
import Project from "./components/Page/Project";
import Dashboard from "./components/Page/Admin/Dashboard/Dashboard";
import CreateDesign from "./components/Page/Admin/Dashboard/Design/CreateDesign";

const App = () => {
    const selector = useSelector((state) => state);
    return (
        <div className="flex flex-col justify-between min-h-screen w-full relative">
            <div className="overflow-clip relative h-full">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    {selector.validUser ===
                        "Request failed with status code 401" && (
                        <>
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                        </>
                    )}
                    <Route path="/projects" element={<Project />} />
                    {selector.isAdmin[0] === "admin" && (
                        <>
                            <Route path="/admin">
                                <Route
                                    path="dashboard"
                                    element={<Dashboard />}
                                />
                                <Route
                                    path="new_design"
                                    element={<CreateDesign />}
                                />
                            </Route>
                        </>
                    )}
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;
