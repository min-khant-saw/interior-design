import React from "react";

const Error = () => {
    return (
        <div className="w-full h-full flex justify-evenly items-center gap-x-2 max-md:mt-9 px-4">
            {/* Left section */}
            <div className="text-center basis-96">
                <h1 className="text-8xl font-medium text-gray-500">404</h1>
                <span className="text-2xl text-gray-500">Not Found</span>
                <p className="text-gray-500">
                    {/* Error message */}
                    We're sorry, the page you were looking for cannot be found.
                    It may have been deleted, moved, or never existed in the
                    first place. Please check the URL and try again. If you
                    clicked on a broken link or were directed to this page by an
                    external source, please let us know so we can fix the issue.
                    Thank you for your understanding.
                </p>
            </div>
            {/* Right section */}
            <div className="max-md:hidden select-none">
                <img src="/image/404-not-found.png" alt="" />
            </div>
        </div>
    );
};

export default Error;
