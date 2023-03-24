import React from "react";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import Card from "./Card/Card";
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
        </div>
    );
};

export default Dashboard;
