import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// The Mix component that displays a grid of design images and descriptions
const Mix = ({ data }) => {
    return (
        <div className="w-full px-2 border-t-2 pt-10">
            {/* The section title */}
            <h1 className="text-2xl font-bold mb-4">in the mix</h1>
            {/* The grid of design images and descriptions */}
            <div className="grid grid-cols-3 gap-x-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                {/* Mapping through each design */}
                {data?.pages.map((designs, i) =>
                    designs.data.data.data.slice(0, 9).map((design, i) => (
                        <Link
                            to={`/design/room/${design.id}`}
                            className="mb-7"
                            key={i}
                        >
                            {/* The design image */}
                            <LazyLoadImage
                                effect="blur"
                                src={design.image}
                                alt=""
                                width="100%"
                                height="h-48"
                                className="object-cover w-full h-48 max-md:h-60"
                            />
                            <div>
                                {/* The design title */}
                                <span className="hover:underline block text-lg max-md:text-md">
                                    {design.title}
                                </span>
                                {/* The design description */}
                                <span className="text-sm">
                                    {design.description.slice(0, 80)}
                                </span>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default Mix;
