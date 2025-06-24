import { Outlet } from "react-router-dom";
import { DashboardLayout, ThemeSwitcher } from "@toolpad/core/DashboardLayout";
import { Container, Divider, Stack, Typography } from "@mui/material";

const ToolbarActions = () => {
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <ThemeSwitcher />
        </Stack>
    );
};

function SidebarFooter() {
    return (
        <Stack direction="column" p={0} overflow="hidden">
            <Divider />
            <Typography
                variant="caption"
                sx={{ m: 1, whiteSpace: "nowrap", overflow: "hidden" }}
            >
                Aprendizaje Automatico
            </Typography>
        </Stack>
    );
}

export default function Layout() {
    return (
        <DashboardLayout
            slots={{
                toolbarActions: ToolbarActions,
                sidebarFooter: SidebarFooter,
            }}
        >
            <Container sx={{ p: 4 }}>
                <Outlet />
            </Container>
        </DashboardLayout>
    );
}
