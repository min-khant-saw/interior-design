import React from "react";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import Card from "./Card/Card";
// import NavBar from "./NavBar/NavBar";

const Dashboard = () => {
    return (
        <div className="bg-slate-200/60 min-h-screen">
            <div className="pt-2 flex justify-center gap-x-3 items-center mx-auto max-md:w-full px-4 max-sm:flex-col w-3/4">
                <div className="w-1/2 max-md:w-full">
                    <Card
                        icon={
                            <PeopleAltRoundedIcon
                                fontSize="large"
                                color="info"
                            />
                        }
                        url="/admin/users_status"
                        text="Users"
                    />
                    <Card
                        icon={
                            <ManageAccountsRoundedIcon
                                fontSize="large"
                                color="warning"
                            />
                        }
                        url="/admin/roles_status"
                        text="Roles"
                    />
                </div>
                <div className="w-1/2 max-md:w-full">
                    <Card
                        icon={
                            <DesignServicesRoundedIcon
                                fontSize="large"
                                color="primary"
                            />
                        }
                        url="/admin/designs_status"
                        text="Designs"
                    />
                    <Card
                        icon={
                            <SecurityRoundedIcon
                                fontSize="large"
                                color="error"
                            />
                        }
                        url="/admin/permissions_status"
                        text="Permissions"
                    />
                </div>
            </div>
            <div>
                <div
                    role="status"
                    className="w-1/2 p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 mx-auto mt-2"
                >
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
                    <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="flex items-baseline mt-4 space-x-6">
                        <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                        <div className="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                        <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                        <div className="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                        <div className="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
                        <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                        <div className="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
