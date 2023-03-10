import React, { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axiosClient from "./components/Api/axioClient";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Navbar from "./components/NavBar/Navbar";
import Main from "./components/Page/Main";
import Footer from "./components/Page/Footer";
import Error from "./components/Page/Error";

const App = () => {
    const [subscribeLog, setSubscribelog] = useState("");
    const [error, setError] = useState("");
    useMemo(() => {
        axiosClient
            .get("/user")
            .then((res) => res)
            .catch((err) => setError(err.message));
    }, [localStorage.getItem("token")]);
    return (
        <div className="flex flex-col justify-between min-h-screen w-full">
            <div className="overflow-clip relative h-full">
                <Navbar
                    subscribeLog={subscribeLog}
                    setSubscribelog={setSubscribelog}
                />
                <Routes>
                    <Route
                        path="/"
                        element={<Main setSubscribelog={setSubscribelog} />}
                    />
                    {error === "Request failed with status code 401" && (
                        <>
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
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
