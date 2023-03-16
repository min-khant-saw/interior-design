import React from "react";

const DesignType = ({ state, form }) => {
    return (
        <React.Fragment>
            <label
                htmlFor="design_type"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
                Design Type
            </label>
            <select
                id="design_type"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900/80 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                value={state.design_type}
                onChange={(e) =>
                    form({
                        type: "design_type",
                        payload: { design_type: e.target.value },
                    })
                }
            >
                <option value="0">Choose a design Type</option>
                <option value="new_design">New</option>
                <option value="old_design">Old</option>
            </select>
        </React.Fragment>
    );
};

export default DesignType;
