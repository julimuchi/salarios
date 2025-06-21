import {
    Box,
    Paper,
    Typography,
    Grid,
    CircularProgress,
    Alert,
    Autocomplete,
    Button,
    TextField,
} from "@mui/material";
import { useState } from "react";

import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import { Loader } from ".";
import { COUNTRIES, JOB_POSITIONS, LEVELS } from "../constants";

const JOB_POSITION = "job_position";
const LEVEL = "Level";
const COUNTRY = "country";

const formLabels = {
    [JOB_POSITION]: "Posicion",
    [LEVEL]: "Experiencia",
    [COUNTRY]: "Pais",
};

const emptyForm = {
    [JOB_POSITION]: "",
    [LEVEL]: "",
    [COUNTRY]: "",
};

const emptyFormErrors = {
    [JOB_POSITION]: null,
    [LEVEL]: null,
    [COUNTRY]: null,
};

const Form = () => {
    const [form, setForm] = useState(emptyForm);
    const [formErrors, setFormErrors] = useState(emptyFormErrors);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            if (!isValidForm()) {
                return;
            }
            setLoading(true);
            setError(null);
            setFormErrors(emptyFormErrors);

            // dummy
            const response = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (form.job_position) {
                        resolve({ success: true });
                    } else {
                        reject(new Error("Validation error"));
                    }
                }, 1000);
            });

            if (response.success) {
                // Reset form after successful submission
                setForm(emptyForm);
            }
        } catch (err) {
            console.error("Error al enviar el formulario:", err);
            setError(
                "Ocurrió un error al enviar el formulario. Por favor, inténtelo de nuevo más tarde."
            );
        } finally {
            setLoading(false);
        }
    };

    const isValidForm = () => {
        const errors = {};
        if (!form[JOB_POSITION] || form[JOB_POSITION].trim() === "") {
            errors[JOB_POSITION] = "Este campo es obligatorio";
        }
        if (!form[LEVEL] || form[LEVEL].trim() === "") {
            errors[LEVEL] = "Este campo es obligatorio";
        }
        if (!form[COUNTRY] || form[COUNTRY].trim() === "") {
            errors[COUNTRY] = "Este campo es obligatorio";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (name, value) => {
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: null,
        }));
        setError(null);
    };

    const handleCleanForm = () => {
        setForm(emptyForm);
        setFormErrors(emptyFormErrors);
        setError(null);
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <Box p={2} component={Paper} mt={2} mb={2}>
            <Box mb={2}>
                <Typography variant="h6" gutterBottom>
                    Complete los datos de su busqueda
                </Typography>
                {error && (
                    <Box mt={2} mb={2}>
                        <Alert severity="error">{error}</Alert>
                    </Box>
                )}
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Autocomplete
                            options={JOB_POSITIONS}
                            getOptionLabel={(option) => option.name}
                            name={JOB_POSITION}
                            value={form[JOB_POSITION] || null}
                            onChange={(_, newValue) => {
                                handleChange(JOB_POSITION, newValue);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label={formLabels[JOB_POSITION]}
                                    required
                                    value={form[JOB_POSITION]}
                                    error={!!formErrors[JOB_POSITION]}
                                    helperText={formErrors[JOB_POSITION]}
                                    name={JOB_POSITION}
                                />
                            )}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Autocomplete
                            options={LEVELS}
                            getOptionLabel={(option) => option.name}
                            name={LEVEL}
                            value={form[LEVEL] || null}
                            onChange={(_, newValue) => {
                                handleChange(LEVEL, newValue);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label={formLabels[LEVEL]}
                                    required
                                    value={form[LEVEL]}
                                    error={!!formErrors[LEVEL]}
                                    helperText={formErrors[LEVEL]}
                                    name={LEVEL}
                                />
                            )}
                            fullWidth
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Autocomplete
                            options={COUNTRIES}
                            getOptionLabel={(option) => option.name}
                            value={form[COUNTRY] || null}
                            name={COUNTRY}
                            onChange={(_, newValue) => {
                                handleChange(COUNTRY, newValue);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    name={COUNTRY}
                                    label={formLabels[COUNTRY]}
                                    required
                                    error={!!formErrors[COUNTRY]}
                                    helperText={formErrors[COUNTRY]}
                                />
                            )}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box
                mb={2}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                spacing={2}
                p={2}
            >
                <Button
                    onClick={handleCleanForm}
                    startIcon={<CleaningServicesIcon />}
                    variant="outlined"
                >
                    Limpiar Formulario
                </Button>
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    startIcon={<ContentPasteSearchIcon />}
                >
                    Calcular salario
                </Button>
            </Box>
        </Box>
    );
};

export default Form;
