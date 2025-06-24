import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import PublicIcon from "@mui/icons-material/Public";
import WorkIcon from "@mui/icons-material/Work";
import TimelineIcon from "@mui/icons-material/Timeline";
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
            children: [
                {
                    segment: "salarios-distribucion",
                    title: "Distribución de Salarios",
                    icon: <StackedLineChartIcon />,
                },
                {
                    segment: "salarios-puesto",
                    title: "Salarios por Puesto",
                    icon: <WorkIcon />,
                },
                {
                    segment: "salarios-experiencia",
                    title: "Salarios experiencia",
                    icon: <TimelineIcon />,
                },
                {
                    segment: "salarios-evolucion",
                    title: "Salarios evolución",
                    icon: <ShowChartIcon />,
                },
                {
                    segment: "distribucion-modalidad",
                    title: "Distribución modalidad",
                    icon: <PieChartIcon />,
                },
                {
                    segment: "salarios-paises",
                    title: "Salarios por países",
                    icon: <PublicIcon />,
                },
            ],
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
