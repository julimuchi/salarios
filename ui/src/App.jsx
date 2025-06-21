import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";

import { Outlet } from "react-router-dom";
import { AppProvider } from "@toolpad/core/AppProvider";

const BRANDING = {
    title: "Aprendizaje Automatico",
    logo: (
        <img style={{ width: "100%", height: "100%", objectFit: "contain" }} />
    ),
};

export default function App() {
    const NAVIGATION = [
        {
            kind: "header",
            title: null,
        },
        {
            title: "App",
            icon: <DashboardIcon />,
        },
        {
            segment: "consigna",
            title: "Consigna",
            icon: <MenuBookIcon />,
        },
        {
            segment: "integrantes",
            title: "Integrantes",
            icon: <PeopleIcon />,
        },
        {
            segment: "graficos",
            title: "Graficos",
            icon: <BarChartIcon />,
        },
    ];

    return (
        <AppProvider
            navigation={NAVIGATION}
            branding={BRANDING}
            // theme={CustomTheme}
        >
            <Outlet />
        </AppProvider>
    );
}
