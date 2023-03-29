// Importing necessary modules and components
import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axiosClient from "../../Api/axioClient";
import Loading from "../../Loading/Loading";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Store/Loading/loading";

// Axios function for getting data
const project = ({ pageParam = 1, room }) => {
    return axiosClient.get(
        `/design?page=${pageParam}&design=${room}&perPage=2`
    );
};

// Main component
const Main = () => {
    // State variables
    const [next_page_url, set_next_page_url] = useState(null);
    const { name } = useParams();
    const dispatch = useDispatch();
    // React-query hook for infinite scrolling
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useInfiniteQuery(
        ["rooms", name],
        ({ pageParam }) => project({ pageParam, room: name }),
        {
            getNextPageParam: (lastPage, allPages) => allPages.length + 1,
        }
    );

    // useEffect hook for infinite scrolling
    useEffect(() => {
        if (isLoading) {
            dispatch(setLoading(30));
        } else {
            dispatch(setLoading(100));
        }

        // Set next_page_url state variable
        data?.pages.map((d, i) => set_next_page_url(d.data.next_page_url));
        if (next_page_url === null) return;

        // Event listener for scrolling
        const onScroll = async (event) => {
            const { scrollHeight, scrollTop, clientHeight } =
                event.target.scrollingElement;

            if (
                !isFetching &&
                !isFetchingNextPage &&
                hasNextPage &&
                scrollHeight - scrollTop <= clientHeight * 300
            ) {
                return await fetchNextPage();
            }
        };

        // Add event listener
        document.addEventListener("scroll", onScroll);

        // Remove event listener
        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, [
        isFetchingNextPage,
        isFetching,
        fetchNextPage,
        hasNextPage,
        next_page_url,
    ]);

    // Return statements for different scenarios
    if (isLoading) return "";
    if (isError) return <>{error.message}</>;

    // JSX for rendering the data
    return (
        <div className="w-full">
            {/* Section Header */}
            <div className="w-ful p-8 flex justify-center items-center text-xl font-medium border-b-2">
                {/* Convert name to uppercase and replace underscore with space */}
                {name.toLocaleUpperCase().replace("_", " ")}
            </div>
            {/* Display designs for each page */}
            <div className="p-2 flex justify-start flex-col">
                {/* Map through each page */}
                {data.pages.map((rooms, i) =>
                    // If there are no designs for the current page
                    !rooms.data.data.length ? (
                        <div
                            className="w-ful p-8 flex justify-center items-center text-xl font-medium gap-x-2"
                            key={i}
                        >
                            <span>There's no designs</span>
                            <span>
                                {/* Display error icon */}
                                <ErrorRoundedIcon
                                    fontSize="medium"
                                    color="action"
                                />
                            </span>
                        </div>
                    ) : (
                        // Map through each design in the current page
                        rooms.data.data.map((room, i) => (
                            <div
                                className="grid grid-cols-2 gap-x-8 gap-4 items-center max-md:grid-cols-1 border-b-2 p-2"
                                key={i}
                            >
                                {/* Display design image */}
                                <LazyLoadImage
                                    effect="blur"
                                    src={room.image}
                                    alt=""
                                    width="100%"
                                    height="h-72"
                                    className="w-full h-56 object-cover object-center rounded"
                                />
                                <div className="mr-auto flex flex-col gap-y-3">
                                    {/* Display design title */}
                                    <h1 className="text-lg">{room.title}</h1>
                                    {/* Display design description (limited to 200 characters) */}
                                    <span className="text-sm">
                                        {room.description.slice(0, 200) + "..."}
                                    </span>
                                    {/* Display "See More" link */}
                                    <Link
                                        to={`/design/room/${room.id}`}
                                        className="text-white w-max bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                                    >
                                        See More
                                    </Link>
                                </div>
                            </div>
                        ))
                    )
                )}
            </div>
        </div>
    );
};

export default Main;
