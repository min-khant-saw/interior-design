import React from "react";

const Footer = () => {
    return (
        <div className="w-full bg-gray-800 flex justify-evenly items-center p-1 py-3 mt-6 text-gray-400 max-lg:flex-col gap-3">
            {/* Copyright statement */}
            <span>© 2023 Interior Design | All Rights Reserved</span>
            <div className="text-gray-400">
                {/* Links to Privacy Policy, Cookie Policy, and Terms of Use */}
                <a href="" className=" hover:text-white mx-1">
                    Privacy Policy
                </a>
                {"|"}
                <a href="" className=" hover:text-white mx-1">
                    Cookie Policy
                </a>
                {"|"}
                <a href="" className=" hover:text-white mx-1">
                    Terms of Use
                </a>
            </div>
            {/* Developer name */}
            <span>
                Develope by - <span className="underline">Min Khant Saw</span>
            </span>
        </div>
    );
};

export default Footer;
