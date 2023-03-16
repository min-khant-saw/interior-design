import React, { useReducer } from "react";
import DesignRole from "./DesignRole";
import DesignType from "./DesignType";
import DesignImage from "./DesignImage";
import axiosClient from "../../../../Api/axioClient";

const reducer = (state, action) => {
    switch (action.type) {
        case "title":
            return { ...state, title: action.payload.title };
        case "description":
            return { ...state, description: action.payload.description };
        case "design_role":
            return { ...state, design_role: action.payload.design_role };
        case "design_type":
            return { ...state, design_type: action.payload.design_type };
        case "image":
            return { ...state, image: action.payload.image };
        default:
            return state;
    }
};

// need upload loading and successful upload message
// aleady create redux-toolkit with loading reducer

const CreateDesign = () => {
    const [state, form] = useReducer(reducer, {
        title: "",
        description: "",
        design_role: "",
        design_type: "",
        image: "",
    });
    const formData = new FormData();
    const createDesign = (e) => {
        e.preventDefault();
        if (
            state.title.length < 0 ||
            state.description.length < 0 ||
            state.design_role.length < 0 ||
            state.design_type.length < 0 ||
            state.image.length < 0
        ) {
            return state;
        }
        formData.append("title", state.title);
        formData.append("description", state.description);
        formData.append("category", state.design_role);
        formData.append("type", state.design_type);
        formData.append("image", state.image);
        return axiosClient
            .post("/admin/create_design", formData)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };
    return (
        <div className="mb-7">
            <form
                className="w-1/2 mx-auto flex flex-col gap-y-4 mt-6"
                method="post"
                onSubmit={createDesign}
                autoComplete="off"
                encType="multipart/form-data"
            >
                <div className="relative">
                    <input
                        type="text"
                        id="design_name"
                        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={state.title}
                        onChange={(e) =>
                            form({
                                type: "title",
                                payload: { title: e.target.value },
                            })
                        }
                        required
                    />
                    <label
                        htmlFor="design_name"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                    >
                        Design Name
                    </label>
                </div>
                <div className="relative">
                    <textarea
                        id="design_description"
                        rows="4"
                        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={state.description}
                        onChange={(e) =>
                            form({
                                type: "description",
                                payload: { description: e.target.value },
                            })
                        }
                        required
                    ></textarea>
                    <label
                        htmlFor="design_description"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                    >
                        Design description
                    </label>
                </div>
                <div className="relative flex justify-center w-full gap-2 max-md:flex-col">
                    <div className="relative w-full">
                        <DesignRole state={state} form={form} />
                    </div>
                    <div className="relative w-full">
                        <DesignType state={state} form={form} />
                    </div>
                </div>
                <div className="relative">
                    <DesignImage state={state} form={form} />
                </div>
                <div className="relative w-full flex justify-center">
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-1/2 max-md:w-full"
                    >
                        Create Design
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateDesign;
