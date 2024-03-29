// Import the axios library
import axios from "axios";

// Create a new axios client with default settings
const axiosClient = axios.create({
    // Set the base URL for API requests, using the environment variable VITE_SERVER_API_URL
    baseURL: `${import.meta.env.VITE_SERVER_API_URL}/api`,
    // Set the default headers for all requests to JSON format
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

// Add an interceptor to modify the request before it is sent
axiosClient.interceptors.request.use(
    (config) => {
        // Get the access token from local storage and add it to the request headers for authorization
        config.headers.Authorization =
            "Bearer " + localStorage.getItem("token");
        // Return the modified configuration object to continue with the request
        return config;
    },
    (error) => {
        // Handle errors
        return Promise.reject(error);
    }
);

// Add an interceptor to modify the response before it is sent
axiosClient.interceptors.response.use(
    (response) => {
        // Handle successful responses
        return response;
    },
    (error) => {
        // Handle errors
        return Promise.reject(error);
    }
);

// Export the axios client instance as the default export for this module
export default axiosClient;
