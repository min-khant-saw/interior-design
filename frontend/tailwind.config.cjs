/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            height: {
                600: "38.5rem",
                500: "31.25rem",
            },
            grayscale: {
                50: "50%",
            },
            width: {
                700: "43.75rem",
            },
        },
    },
    plugins: [
        require("flowbite/plugin"),
        require("tailwind-scrollbar")({ nocompatible: true }),
    ],
};
