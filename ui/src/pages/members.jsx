import React from "react";
import {
    Box,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

const integrantes = [
    { nombre: "Mateo Ezequiel Ibañez", padron: "107983" },
    { nombre: "Gonzalo Calderon", padron: "107143" },
    { nombre: "Julian Mutchinick", padron: "99479" },
    { nombre: "Kevin Alberto Vallejo", padron: "109975" },
    { nombre: "Kevin Ezequiel Otalvares", padron: "108231" },
];

const Members = () => {
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
            <Paper sx={{ width: "100%", maxWidth: 600, p: 4, borderRadius: 3 }}>
                <Typography
                    variant="h4"
                    gutterBottom
                    color="primary"
                    align="center"
                >
                    Integrantes
                </Typography>

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <strong>Alumno</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Padrón</strong>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {integrantes.map(({ nombre, padron }) => (
                                <TableRow key={padron}>
                                    <TableCell>{nombre}</TableCell>
                                    <TableCell>{padron}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default Members;
