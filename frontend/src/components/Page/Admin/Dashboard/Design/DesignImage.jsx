import React from "react";
import BackupRoundedIcon from "@mui/icons-material/BackupRounded";

const DesignImage = ({ state, form }) => {
    return (
        <div className="flex items-center justify-center w-full">
            <label
                htmlFor="design_image"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <BackupRoundedIcon opacity=".8" color="action" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPEG, JPG or GIF
                    </p>
                </div>
                <input
                    name="file"
                    id="design_image"
                    type="file"
                    className="hidden"
                    onChange={(e) =>
                        form({
                            type: "image",
                            payload: { image: e.target.files[0] },
                        })
                    }
                    accept="image/*"
                />
            </label>
        </div>
    );
};

export default DesignImage;
