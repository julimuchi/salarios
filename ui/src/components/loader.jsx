import { CircularProgress, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const LoaderWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    space: 2,
}));

const Loader = () => {
    return (
        <LoaderWrapper>
            <CircularProgress />
            <Typography>Cargando...</Typography>
        </LoaderWrapper>
    );
};

export default Loader;
