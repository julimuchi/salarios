import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const graphs = [
    {
        name: "salarios-distribucion",
        image: "/images/salarios.png",
        title: "Distribución de Salarios",
        subtitle: null,
    },
    {
        name: "salarios-puesto",
        image: "/images/salarios-puesto.png",
        title: "Distribución de salarios por puesto ",
        subtitle: "ordenados por salario medio descendente",
    },
    {
        name: "salarios-experiencia",
        image: "/images/salarios-experiencia.png",
        title: "Salario medio por nivel de experiencia",
    },
    {
        name: "salarios-evolucion",
        image: "/images/salarios-evolucion.png",
        title: "Evolución de salarios medianos por año",
    },
    {
        name: "distribucion-modalidad",
        image: "/images/distribucion-remota.png",
        title: "Distribución de modalidad remota",
    },
    {
        name: "salarios-paises",
        image: "/images/salarios-paises.png",
        title: "Salarios en los 15 países más frecuentes",
    },
];

const Graphics = () => {
    const { graph } = useParams();

    const selectedGraph = graphs.find((g) => g.name === graph);

    return (
        <Box sx={{ p: 4 }}>
            {selectedGraph ? (
                <>
                    <Typography variant="h4" gutterBottom>
                        {selectedGraph.title}
                    </Typography>
                    {selectedGraph.subtitle && (
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            gutterBottom
                        >
                            {selectedGraph.subtitle}
                        </Typography>
                    )}
                    <Box
                        component="img"
                        src={selectedGraph.image}
                        alt={selectedGraph.title}
                        sx={{
                            maxWidth: "100%",
                            borderRadius: 2,
                            boxShadow: 3,
                            mt: 2,
                        }}
                    />
                </>
            ) : (
                <Typography variant="h6" color="error">
                    No se encontró el gráfico solicitado.
                </Typography>
            )}
        </Box>
    );
};

export default Graphics;
