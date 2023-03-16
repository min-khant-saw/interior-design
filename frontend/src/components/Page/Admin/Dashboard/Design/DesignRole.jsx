import React from "react";

const DesignRole = ({ state, form }) => {
    return (
        <React.Fragment>
            <label
                htmlFor="design_Role"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
                Design Role
            </label>
            <select
                id="design_Role"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900/80 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                value={state.design_role}
                onChange={(e) =>
                    form({
                        type: "design_role",
                        payload: { design_role: e.target.value },
                    })
                }
            >
                <option value="0">Choose a design Role</option>
                <option value="kitchen_room">Kitchen Room</option>
                <option value="family_room">Family Room</option>
                <option value="dining_room">Dining Room</option>
                <option value="living_room">Living Room</option>
                <option value="bed_room">Bed Room</option>
                <option value="bath_room">Bath Room</option>
                <option value="laundry_room">Laundry Room</option>
                <option value="office_room">Office Room</option>
                <option value="library_room">Library Room</option>
                <option value="kids_bedroom">Kids Bedroom</option>
                <option value="gym_room">Gym Room</option>
                <option value="gaming_room">Gaming Room</option>
                <option value="storage_room">Storage Room</option>
                <option value="music_room">Music Room</option>
            </select>
        </React.Fragment>
    );
};

export default DesignRole;
