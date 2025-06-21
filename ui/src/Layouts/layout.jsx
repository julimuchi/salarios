import { Outlet } from "react-router-dom";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Chip, Container, Divider, Stack, Typography } from "@mui/material";

function SidebarFooter() {
    return (
        <Stack direction="column" p={0} overflow="hidden">
            <Divider />
            <Typography
                variant="caption"
                sx={{ m: 1, whiteSpace: "nowrap", overflow: "hidden" }}
            >
                Aprendizaje profundo
            </Typography>
        </Stack>
    );
}

export default function Layout() {
    return (
        <DashboardLayout
            slots={{
                toolbarActions: () => {},

                sidebarFooter: SidebarFooter,
            }}
        >
            <Container sx={{ p: 4 }}>
                <Outlet />
            </Container>
        </DashboardLayout>
    );
}
