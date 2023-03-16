import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "loading",
    initialState: null,
    reducers: {
        setLoading: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice;
