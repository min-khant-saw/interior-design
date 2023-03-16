import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Component for displaying the recent top design section
const TopDesign = ({ data }) => {
    return (
        <div className="w-full px-3 border-b-2 pb-10">
            <h1 className="text-2xl font-bold mb-4 max-md:text-xl">
                Recent Top Design
            </h1>
            <div className="flex justify-between gap-9 flex-row max-lg:flex-col">
                {/* Iterate over first 5 pages of data */}
                {data.pages.slice(0, 5).map((designs, i) => {
                    // Do not render anything for the first page
                    if (i === 0) {
                        return null;
                    }
                    // Filter new designs and map over them to display
                    return designs.data.data.data
                        .filter((design) => design.type === "new_design")
                        .map((design, i) => {
                            return (
                                <a href="" key={i}>
                                    <div className="flex flex-col gap-y-4 w-full">
                                        <div className="w-full h-56 overflow-hidden">
                                            {/* Lazy load design image */}
                                            <LazyLoadImage
                                                effect="blur"
                                                src={design.image}
                                                alt={design.title}
                                                height="100%"
                                                width="100%"
                                                className="h-full w-full object-cover object-center transition-all"
                                            />
                                        </div>
                                        <div>
                                            <h1 className="text-lg hover:underline max-md:text-base">
                                                {design.title}
                                            </h1>
                                            <p className="text-base mt-3 max-md:text-sm text-gray-800">
                                                {/* Limit description text to 120 characters */}
                                                {design.description.slice(
                                                    0,
                                                    120
                                                ) + "..."}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            );
                        });
                })}
            </div>
        </div>
    );
};

export default TopDesign;
