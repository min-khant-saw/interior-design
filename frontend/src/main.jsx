import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { store } from "./components/Store/store";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import App from "./App";
import "./index.css";
import axiosClient from "./components/Api/axioClient";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
        },
    },
});

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: "pusher",
    key: `${import.meta.env.VITE_PUSHER_APP_KEY}`,
    wsHost: window.location.hostname,
    wsPort: 6001,
    wssport: 6001,
    transports: ["websocket"],
    enabledTransports: ["ws", "wss"],
    forceTLS: false,
    disableStats: true,
    host: window.location.hostname + 6001,
    cluster: "mt1",
    auth: {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    },
    authorizer: (channel, options) => {
        return {
            authorize: (socketId, callback) => {
                axiosClient
                    .post("/broadcasting/auth", {
                        socket_id: socketId,
                        channel_name: channel.name,
                    })
                    .then((response) => {
                        callback(false, response.data);
                    })
                    .catch((error) => {
                        callback(true, error);
                    });
            },
        };
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
);
