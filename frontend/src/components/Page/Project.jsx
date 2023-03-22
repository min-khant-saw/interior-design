import React, { useEffect, useState } from "react";
import Subscribe from "../subscribe/Subscribe";
import axiosClient from "../Api/axioClient";
import { useInfiniteQuery } from "react-query";
import Header from "./Project/Header";
import Loading from "../Loading/Loading";
import TopDesign from "./Project/TopDesign";
import Mix from "./Project/Mix";

const project = ({ pageParam = 1 }) => {
    return axiosClient.get(`/rooms?page=${pageParam}&perPage=1`);
};

const Project = () => {
    const [next_page_url, set_next_page_url] = useState(null);
    // useInfiniteQuery to fetch and paginate data
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery("projects", project, {
        getNextPageParam: (lastPage, pages) => pages.length + 1,
    });

    // window scroll to fetch more data when the end of the container is reached
    useEffect(() => {
        data?.pages.map((d, i) => set_next_page_url(d.data.data.next_page_url));
        if (next_page_url === null) return;
        const onScroll = async (event) => {
            const { scrollHeight, scrollTop, clientHeight } =
                event.target.scrollingElement;

            if (
                !isFetching &&
                !isFetchingNextPage &&
                hasNextPage &&
                scrollHeight - scrollTop <= clientHeight * 100
            ) {
                return await fetchNextPage();
            }
        };

        document.addEventListener("scroll", onScroll);
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

    // Render loading spinner when data is still loading
    if (status === "loading") {
        return <Loading />;
    }

    // Render error message when there is an error fetching data
    if (status === "error") return <>{error.message}</>;

    return (
        // Container for the image and text overlay
        <div className="w-full flex flex-col justify-between gap-y-14">
            {status === "success" ? (
                <React.Fragment>
                    <Header data={data?.pages[0]?.data.data.data[0]} />
                    <TopDesign data={data} />
                </React.Fragment>
            ) : null}

            {/* Container for the subscription form */}
            <div className="w-full p-2">
                <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Subscribe fz_1="text-xl" fz_2="text-medium" />
                </div>
            </div>

            {/* Container for the mixed designs */}
            <Mix data={data} />
        </div>
    );
};

export default Project;
