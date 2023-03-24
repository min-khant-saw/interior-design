import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axiosClient from "../../../../Api/axioClient";

const Card = ({ icon, url, text }) => {
    const { data, isLoading, isError } = useQuery(url, () =>
        axiosClient.get(url).then((res) => res.data)
    );

    return (
        <div className="flex justify-center items-center gap-x-5 bg-white rounded h-36 p-3 mb-2 w-full max-md:flex-col">
            <div className="scale-150 max-md:scale-100">{icon}</div>
            <div className="max-md:text-center">
                <div className="text-lg">{text}</div>
                {isLoading && (
                    <div className="opacity-60 text-md">Loading...</div>
                )}
                {isError && (
                    <div className="opacity-60 text-md">
                        Error fetching data.
                    </div>
                )}
                {data && <div className="opacity-60 text-md">{data}</div>}
            </div>
        </div>
    );
};

export default Card;
