import { Outlet } from "react-router";
import Navbar from "../Navbar";

function DashboardLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default DashboardLayout;