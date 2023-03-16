import React from "react";
import { NavLink } from "react-router-dom";

const Admin = ({ option, setOption }) => {
    return (
        <div>
            <li
                className={`text-black text-base font-medium relative hover:bg-slate-200 transition-colors w-full p-2 border-t-4 
                                   ${option ? "bg-slate-200" : ""}`}
            >
                <div
                    className="w-full cursor-pointer"
                    onClick={() => setOption(!option)}
                >
                    <span className="mr-14 text-blue-500 select-none">
                        Dashboard
                    </span>
                </div>

                <ul
                    id="dropdown-example"
                    className={`flex flex-col gap-y-2 overflow-auto ${
                        !option ? "hidden" : "block"
                    }`}
                >
                    <li>
                        <NavLink
                            to="/admin/dashboard"
                            className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-100"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/admin/new_design"
                            className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-100"
                        >
                            Create Design
                        </NavLink>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-100"
                        >
                            Invoice
                        </a>
                    </li>
                </ul>
            </li>
        </div>
    );
};

export default Admin;
