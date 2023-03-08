import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";

const Navbar = () => {
    // State variable to track if the menu is open or closed
    const [isOpen, setIsOpen] = useState(true);
    return (
        <React.Fragment>
            {/* Navbar */}
            <div className="w-full flex justify-between items-baseline pt-1 px-3 shadow-md sticky top-0 left-0 flex-col bg-stone-100 z-10">
                <div>
                    <img
                        src="/house-tool.png"
                        alt="logo"
                        className="w-20 h-20 rounded inline"
                    />
                    <span
                        className="text-lg font-bold"
                        style={{
                            fontFamily: "'Raleway', sans-serif",
                        }}
                    >
                        Interior Design
                    </span>
                </div>

                {/* Hamburger menu icon */}
                <div
                    className="block cursor-pointer absolute top-6 right-7 active:bg-gray-200 active:rounded-full p-1 transition-all"
                    onClick={() => setIsOpen((prev) => (prev = false))}
                >
                    {/* Open button */}
                    <div>
                        <MenuRoundedIcon />
                    </div>
                </div>
            </div>
            {/* Sidebar */}
            <div
                className="block ml-auto bg-slate-100 w-96 transition-all ease-in-out duration-300 h-screen overflow-hidden fixed top-0 max-md:w-full py-4 shadow-lg z-20"
                style={
                    !isOpen
                        ? { right: "0px" } // If menu is open, hide the sidebar by moving it out of view
                        : {
                              right: "-100%", // If menu is closed, show the sidebar by moving it into view
                          }
                }
            >
                {/* Close button */}
                <div
                    className="block cursor-pointer active:bg-gray-200 active:rounded-full transition-all w-max ml-8 mt-1 z-10"
                    onClick={() => setIsOpen((prev) => (prev = true))}
                >
                    <div>
                        <CloseRoundedIcon />
                    </div>
                </div>
                <ul className="flex justify-center mx-auto text-end flex-col gap-3 w-full mt-5 border-t-2">
                    <li className="text-black text-base font-medium relative transition-colors hover:bg-slate-200 w-full p-2">
                        <a href="" className="mr-14">
                            Home
                        </a>
                    </li>
                    <li className="text-black text-base font-medium relative transition-colors hover:bg-slate-200 w-full p-2">
                        <a href="" className="mr-14">
                            Shop
                        </a>
                    </li>
                    <li className="text-black text-base font-medium relative transition-colors hover:bg-slate-200 w-full p-2">
                        <a href="" className="mr-14">
                            About Us
                        </a>
                    </li>
                    <li className="text-black text-base font-medium relative transition-colors hover:bg-slate-200 w-full p-2">
                        <a href="" className="mr-14">
                            Contact us
                        </a>
                    </li>
                    <li className="text-black text-base font-medium relative transition-colors hover:bg-slate-200 w-full p-2">
                        <a href="" className="mr-14">
                            Services
                        </a>
                    </li>
                    <li className="text-black text-base font-medium relative transition-colors hover:bg-slate-200 w-full p-2">
                        <a href="" className="mr-14">
                            Blog
                        </a>
                    </li>
                    <Link to="/login">
                        <li className="text-black text-base font-medium relative transition-colors hover:bg-slate-200 w-full p-2 border-t-4">
                            <span className="mr-14">Login</span>
                        </li>
                    </Link>
                    <Link to="/register">
                        <li className="text-black text-base font-medium relative transition-colors hover:bg-slate-200 w-full p-2">
                            <span className="mr-14">Sing Up</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default Navbar;
