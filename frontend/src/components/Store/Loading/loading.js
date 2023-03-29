import { createSlice } from "@reduxjs/toolkit";

const loading = createSlice({
    name: "loading",
    initialState: { loading: 0 },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setLoading } = loading.actions;

export default loading;
