import React from "react";
import { NavLink } from "react-router-dom";
import Design from "./Design";

const Side = ({ option }) => {
    return (
        <div>
            <div
                className={`flex justify-center mx-auto text-end flex-col gap-3 w-full overflow-hidden relative ${
                    option ? "max-md:h-0" : "max-md:h-auto"
                }`}
            >
                <NavLink to="/projects">
                    <li className="text-black text-base font-medium relative transition-colors hover:bg-slate-200 w-full p-2">
                        <span className="mr-14">Projects</span>
                    </li>
                </NavLink>

                <Design />

                <NavLink to="/about-us">
                    <li className="text-black text-base font-medium relative transition-colors hover:bg-slate-200 w-full p-2">
                        <span href="" className="mr-14">
                            About Us
                        </span>
                    </li>
                </NavLink>
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
            </div>
        </div>
    );
};

export default Side;
