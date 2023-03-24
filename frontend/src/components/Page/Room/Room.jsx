import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axiosClient from "../../Api/axioClient";
import Loading from "../../Loading/Loading";
import { useSelector } from "react-redux";

const Room = () => {
    // This code block is using the React Router hook "useParams" to extract the id parameter from the URL.
    // The extracted id is then used to fetch data from the server using the "useQuery" hook from the React Query library.

    const { id } = useParams();

    // Using the "useSelector" hook from the Redux library to select the entire Redux store
    const selector = useSelector((state) => state);

    // Using the "useQuery" hook from the React Query library to fetch data from the server
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["room", id], // The queryKey is an array that identifies the query and is used for cache management
        queryFn: async () => {
            // Fetching data from the server using axiosClient and the extracted id
            const data = await (await axiosClient.get(`/room/${id}`)).data;
            // Throwing an error if the response data is empty
            if (!Object.values(data).length) {
                throw new Error("No Data");
            }
            return data;
        },
    });

    // Showing a loading spinner if the data is still loading
    if (isLoading) return <Loading />;

    // Showing an error message if there was an error fetching the data
    if (isError) return <>{error.message}</>;

    return (
        <div className="w-full flex justify-center flex-col gap-y-6 pb-8 mt-1">
            <LazyLoadImage
                effect="blur"
                src={data.image}
                alt=""
                width="100%"
                height="h-500"
                className="w-full h-500 max-md:h-96 object-cover object-center dark:text-gray-400"
            />
            <div className="p-3 flex justify-center flex-col gap-y-5">
                <span className="text-base">Creater -</span>
                {data.user && (
                    <ul className="ml-5 list-disc opacity-70">
                        {selector.validUser ===
                        "Request failed with status code 401" ? (
                            <>
                                <li>****</li>
                                <li>***</li>
                            </>
                        ) : (
                            <>
                                <li>{data.user.name}</li>
                                <li>{data.user.email}</li>
                            </>
                        )}
                    </ul>
                )}
                <h1 className="text-xl font-medium">{data.title}</h1>
                <p className="text-lg font-light">{data.description}</p>
            </div>
        </div>
    );
};

export default Room;
