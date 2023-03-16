import { createSlice } from "@reduxjs/toolkit";

// Define a new slice of the Redux state for the isAdmin property
const isAdmin = createSlice({
    name: "isAdmin", // The name of the slice, used to generate action types
    initialState: { isAdmin: "" }, // The initial state for the isAdmin property
    reducers: {
        // A "setAdminRole" reducer function that updates the isAdmin state
        setAdminRole: (state, action) => {
            // Set the new state to the value of the "payload" property of the action
            return (state = action.payload);
        },
    },
});

// Export the "setAdminRole" action creator function
export const { setAdminRole } = isAdmin.actions;

// Export the slice's reducer function as the default export
export default isAdmin;
