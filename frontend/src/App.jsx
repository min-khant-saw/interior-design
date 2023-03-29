import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Navbar from "./components/NavBar/Navbar";
import Main from "./components/Page/Main";
import Footer from "./components/Page/Footer";
import Error from "./components/Page/Error";
import Project from "./components/Page/Project";
import Dashboard from "./components/Page/Admin/Dashboard/Dashboard";
import CreateDesign from "./components/Page/Admin/Dashboard/Design/CreateDesign";
import RoomMain from "./components/Page/Room/Main";
import Room from "./components/Page/Room/Room";
import About from "./components/Page/About";

const App = () => {
    const selector = useSelector((state) => state);
    return (
        // The layout is wrapped in a parent div that takes up the full height and width of the screen

        <div className="flex flex-col justify-between min-h-screen w-full relative">
            {/* The "overflow-clip" class is used to prevent the Navbar from
            overlapping with other components */}
            <div className="overflow-clip relative h-full">
                <LoadingBar
                    color="#65a30d"
                    progress={selector.loading.loading}
                    height={3}
                    shadow={true}
                />
                {/* The Navbar component is always rendered at the top of the
                screen */}
                <Navbar />
                {/* React Router is used to render different components based on
                the current route */}
                <Routes>
                    <Route path="/" element={<Main />} />
                    {/* If the user is not authenticated, the Register and Login
                    components are rendered */}
                    {selector.validUser ===
                        "Request failed with status code 401" && (
                        <>
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                        </>
                    )}
                    <Route path="/projects" element={<Project />} />
                    {/* The Room component has nested routes that render
                    different components based on the current route */}
                    <Route path="/design">
                        <Route path=":name" element={<RoomMain />} />
                        <Route path="room/:id" element={<Room />} />
                    </Route>
                    <Route path="/about-us" element={<About />} />
                    {/* If the user is an admin, the Dashboard and CreateDesign
                    components are rendered */}
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
            {/* The Footer component is always rendered at the bottom of the
            screen */}
            <Footer />
        </div>
    );
};

export default App;
