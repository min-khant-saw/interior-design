import { configureStore } from "@reduxjs/toolkit";
import isAdmin from "./AdminStore/admin";
import loadingSlice from "./AdminStore/uploadLoading";
import subscribe from "./SubscribeStore/subscribe";
import validUser from "./User/user";

export const store = configureStore({
    reducer: {
        subscribe: subscribe.reducer,
        isAdmin: isAdmin.reducer,
        loading: loadingSlice.reducer,
        validUser: validUser.reducer,
    },
});
