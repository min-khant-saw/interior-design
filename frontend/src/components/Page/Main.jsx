import React, { useMemo, useState } from "react";
import { redirect } from "react-router-dom";
import axiosClient from "../Api/axioClient";

const Main = () => {
    const [error, setError] = useState("");
    useMemo(() => {
        axiosClient
            .get("/user")
            .then((res) => res)
            .catch((err) => setError(err.message));
    }, [localStorage.getItem("token")]);
    return (
        <div>
            {error === "Request failed with status code 401" ? (
                <span>Unauthorized</span>
            ) : (
                <span>Authorized</span>
            )}
        </div>
    );
};

export default Main;
