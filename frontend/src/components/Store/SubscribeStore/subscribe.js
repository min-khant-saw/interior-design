// Import createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define a slice for the "subscribe" state
const subscribe = createSlice({
    name: "subscribe",
    initialState: "", // The initial state is an empty string
    reducers: {
        setSubscribe: (state, action) => {
            // This reducer sets the "subscribe" state to the value passed in through the action payload
            return (state = action.payload);
        },
    },
});

// Export the "setSubscribe" action creator
export const { setSubscribe } = subscribe.actions;

// Export the "subscribe" reducer
export default subscribe;
