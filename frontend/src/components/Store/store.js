import { configureStore } from "@reduxjs/toolkit";
import isAdmin from "./AdminStore/admin";
import subscribe from "./SubscribeStore/subscribe";
import validUser from "./User/user";

// Creating the Redux store by passing in an object with the different reducers for each slice of the store
export const store = configureStore({
    reducer: {
        subscribe: subscribe.reducer,
        isAdmin: isAdmin.reducer,
        validUser: validUser.reducer,
    },
});
