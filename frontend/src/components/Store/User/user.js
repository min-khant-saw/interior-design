// Import createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Create a slice for valid user with initial state and a reducer function
const validUser = createSlice({
    name: "valid-user",
    initialState: { expresssion: undefined },
    reducers: {
        valid: (state, action) => {
            // Update the state with the payload value
            return (state = action.payload);
        },
    },
});

// Export the reducer action
export const { valid } = validUser.actions;

// Export the reducer function
export default validUser;
