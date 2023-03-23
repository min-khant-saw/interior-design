import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: "pusher",
    key: `${import.meta.env.PUSHER_APP_KEY}`,
    wsHost: window.location.hostname,
    wsPort: 6001,
    wssport: 6001,
    transports: ["websocket"],
    enabledTransports: ["ws", "wss"],
    forceTLS: false,
    disableStats: true,
    host: window.location.hostname + 6001,
    cluster: "mt1",
    authorizer: (channel, options) => {
        console.log(channel.name);
        return {
            authorize: (socketId, callback) => {
                server
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
