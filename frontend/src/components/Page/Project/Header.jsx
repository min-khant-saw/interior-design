import React from "react";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
    return (
        <div className="w-full relative h-600 max-md:h-80">
            {/* The image to be displayed */}
            <LazyLoadImage
                effect="blur"
                src={data.image}
                alt={data.title}
                height="100%"
                width="100%"
                className="w-full h-full object-cover object-center grayscale-50"
            />
            {/* The text overlay */}
            <div className="p-9 w-5/6 bg-gradient-to-r from-black/90 to-gray-400/0 h-full absolute top-0 left-0 flex justify-end flex-col text-white gap-y-3 px-5 max-md:pb-5 max-md:justify-end max-md:items-center max-md:w-full max-md:bottom-0 max-md:left-unset">
                {/* The text content within the overlay */}
                <div className="flex flex-col mr-auto gap-y-3 w-2/3">
                    {/* The title of the text content */}
                    <span className="text-lg font-semibold max-md:text-sm">
                        {data.title}
                    </span>
                    {/* The body text of the content */}
                    <span className="font-normal text-white/80 mb-3 max-w-sm max-md:text-xs max-md:w-full">
                        {data.description.slice(0, 120) + "..."}
                    </span>
                    {/* The "See more" button */}
                    <Link
                        to={`/design/room/${data.id}`}
                        className="w-max bg-orange-600 hover:bg-orange-500 hover:text-white transition-all py-2 px-8 text-black text-sm max-md:text-xs max-md:px-4 max-md:py-1.5 flex justify-between items-center hover:gap-x-2"
                    >
                        <div>See more</div>
                        <div>
                            <KeyboardDoubleArrowRightRoundedIcon />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
