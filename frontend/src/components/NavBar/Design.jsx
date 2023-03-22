import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Design = () => {
    const [option, setOption] = useState(false);
    return (
        <li
            className={`text-black text-base font-medium relative hover:bg-slate-200 transition-colors w-full p-2
                               ${option ? "bg-slate-200" : ""}`}
        >
            <div
                className="w-full cursor-pointer"
                onClick={() => setOption(!option)}
            >
                <span className="mr-14 text-black select-none">Designs</span>
            </div>

            <ul
                id="dropdown-example"
                className={`flex flex-col gap-y-2 overflow-auto max-h-56 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded scrollbar-track-transparent relative ${
                    !option ? "hidden" : "block"
                }`}
            >
                <li>
                    <NavLink
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-100"
                        to="/design/kitchen_room"
                    >
                        Kitchen Room
                    </NavLink>
                </li>
                <NavLink
                    to="/design/family_room"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-100"
                >
                    <li>Family Room</li>
                </NavLink>
                <NavLink
                    to="/design/dining_room"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-100"
                >
                    <li>Dining Room</li>
                </NavLink>
                <NavLink
                    to="/design/living_room"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-100"
                >
                    Living Room
                </NavLink>
                <NavLink
                    to="/design/bed_room"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-100"
                >
                    Bed Room
                </NavLink>
                <li>
                    <NavLink
                        to="/design/bath_room"
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-100"
                    >
                        Bath Room
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/design/laundry_room"
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-100"
                    >
                        Laundry Room
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/design/office_room"
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-100"
                    >
                        Office Room
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/design/library_room"
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-100"
                    >
                        Library Room
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/design/kids_bedroom"
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-100"
                    >
                        Kids Bedroom
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/design/gym_room"
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-100"
                    >
                        Gym Room
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/design/gaming_room"
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-100"
                    >
                        Gaming Room
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/design/storage_room"
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-100"
                    >
                        Storage Room
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/design/music_room"
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-100"
                    >
                        Music Room
                    </NavLink>
                </li>
            </ul>
        </li>
    );
};

export default Design;
