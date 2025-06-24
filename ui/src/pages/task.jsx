import { Box, Typography, Paper, Container } from "@mui/material";

const Task = () => {
    return (
        <Box
            sx={{
                minHeight: "80vh",
                bgcolor: "#f0f2f5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 3,
            }}
        >
            <Paper
                elevation={8}
                sx={{
                    maxWidth: 640,
                    p: 5,
                    borderRadius: 4,
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    color="primary"
                >
                    Consigna
                </Typography>

                <Typography variant="h6" color="info" mb={3}>
                    Seleccionar un problema real, preferentemente vinculado al
                    entorno laboral, y desarrollar una aplicación que integre un
                    modelo AutoML para su resolución.
                </Typography>

                <Typography
                    variant="body1"
                    // color="primary"
                    sx={{ textAlign: "justify", mb: 2 }}
                >
                    El proceso debe incluir la exploración de datos.
                </Typography>

                <Typography
                    // variant="body2"
                    // color=
                    sx={{ textAlign: "justify" }}
                >
                    Integrar y entrenar un modelo AutoML que automatice la
                    selección de algoritmos y optimización de hiperparámetros.
                </Typography>
            </Paper>
        </Box>
    );
};

export default Task;
