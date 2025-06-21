import { Box, Paper, Typography } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
const Salary = ({ salary }) => {
    return (
        <Box>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                alignItems="center"
                py={4}
                width="100%"
                component={Paper}
                sx={{
                    backgroundColor: "lightgreen",
                }}
            >
                <MonetizationOnIcon sx={{ fontSize: 60, color: "green" }} />
                <Typography variant="h4" color="green">
                    Salario estimado para su busqueda {salary}$
                </Typography>
            </Box>
        </Box>
    );
};

export default Salary;
