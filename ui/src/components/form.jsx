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
import {
    COMPANY_SIZES,
    COMPANY_COUNTRIES,
    EMPLOYEE_RESIDENCES,
    JOB_POSITIONS,
    LEVELS,
    MODALITIES,
    CONTRACT_TYPES,
} from "../constants";

const JOB_POSITION = "job_position";
const LEVEL = "Level";
const EMPLOYEE_RESIDENCE = "employee_residence";
const COUNTRY_COMPANY = "country_company";
const COMPANY_SIZE = "company_size";
const MODALITY = "modalidad";
const CONTRACT_TYPE = "contract_type";

const formLabels = {
    [JOB_POSITION]: "Posicion",
    [LEVEL]: "Experiencia",
    [COUNTRY_COMPANY]: "Origen de la empresa",
    [EMPLOYEE_RESIDENCE]: "Pais de residencia",
    [COMPANY_SIZE]: "Tamaño de la empresa",
    [MODALITY]: "Modalidad",
    [CONTRACT_TYPE]: "Tipo de contrato",
};

const emptyForm = {
    [JOB_POSITION]: "",
    [LEVEL]: "",
    [EMPLOYEE_RESIDENCE]: "",
    [COUNTRY_COMPANY]: "",
    [COMPANY_SIZE]: "",
    [MODALITY]: "",
    [CONTRACT_TYPE]: "",
};

const emptyFormErrors = {
    [JOB_POSITION]: null,
    [LEVEL]: null,
    [COUNTRY_COMPANY]: null,
    [EMPLOYEE_RESIDENCE]: null,
    [COMPANY_SIZE]: null,
    [MODALITY]: null,
    [CONTRACT_TYPE]: null,
};

const Form = ({ setSalary }) => {
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

            console.log("Enviando formulario:", form);

            const payload = {
                experience_level: form[LEVEL].value,
                employment_type: form[CONTRACT_TYPE].value,
                job_title: form[JOB_POSITION].value,
                employee_residence: form[EMPLOYEE_RESIDENCE].value,
                remote_ratio: form[MODALITY].value,
                company_location: form[COUNTRY_COMPANY].value,
                company_size: form[COMPANY_SIZE].value,
            };

            const response = await fetch(
                "https://api-salary-prediction.onrender.com/predictions/TPOT/salaries",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            if (!response.ok) {
                throw new Error("Error al obtener el salario sugerido");
            }

            const data = await response.json();
            setSalary(data.sugested_salary);
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
        if (!form[JOB_POSITION]) {
            errors[JOB_POSITION] = "Este campo es obligatorio";
        }
        if (!form[LEVEL]) {
            errors[LEVEL] = "Este campo es obligatorio";
        }
        if (!form[COUNTRY_COMPANY]) {
            errors[COUNTRY_COMPANY] = "Este campo es obligatorio";
        }
        if (!form[EMPLOYEE_RESIDENCE]) {
            errors[EMPLOYEE_RESIDENCE] = "Este campo es obligatorio";
        }
        if (!form[COMPANY_SIZE]) {
            errors[COMPANY_SIZE] = "Este campo es obligatorio";
        }
        if (!form[MODALITY]) {
            errors[MODALITY] = "Este campo es obligatorio";
        }
        if (!form[CONTRACT_TYPE]) {
            errors[CONTRACT_TYPE] = "Este campo es obligatorio";
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
        setSalary(null);
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <Box p={2} component={Paper} mt={2} mb={2}>
            <Box mb={2}>
                <Box>
                    <Typography variant="h6" gutterBottom>
                        Complete los datos del empleado
                    </Typography>
                </Box>
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
                            options={EMPLOYEE_RESIDENCES}
                            getOptionLabel={(option) => option.name}
                            name={EMPLOYEE_RESIDENCE}
                            value={form[EMPLOYEE_RESIDENCE] || null}
                            onChange={(_, newValue) => {
                                handleChange(EMPLOYEE_RESIDENCE, newValue);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label={formLabels[EMPLOYEE_RESIDENCE]}
                                    required
                                    value={form[EMPLOYEE_RESIDENCE]}
                                    error={!!formErrors[EMPLOYEE_RESIDENCE]}
                                    helperText={formErrors[EMPLOYEE_RESIDENCE]}
                                    name={EMPLOYEE_RESIDENCE}
                                />
                            )}
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography variant="h6" gutterBottom>
                        Complete los datos de las companias que le interesan
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Autocomplete
                            options={COMPANY_COUNTRIES}
                            getOptionLabel={(option) => option.name}
                            value={form[COUNTRY_COMPANY] || null}
                            name={COUNTRY_COMPANY}
                            onChange={(_, newValue) => {
                                handleChange(COUNTRY_COMPANY, newValue);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    name={COUNTRY_COMPANY}
                                    label={formLabels[COUNTRY_COMPANY]}
                                    required
                                    error={!!formErrors[COUNTRY_COMPANY]}
                                    helperText={formErrors[COUNTRY_COMPANY]}
                                />
                            )}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Autocomplete
                            options={COMPANY_SIZES}
                            getOptionLabel={(option) => option.name}
                            value={form[COMPANY_SIZE] || null}
                            name={COMPANY_SIZE}
                            onChange={(_, newValue) => {
                                handleChange(COMPANY_SIZE, newValue);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    name={COMPANY_SIZE}
                                    label={formLabels[COMPANY_SIZE]}
                                    required
                                    error={!!formErrors[COMPANY_SIZE]}
                                    helperText={formErrors[COMPANY_SIZE]}
                                />
                            )}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Autocomplete
                            options={MODALITIES}
                            getOptionLabel={(option) => option.name}
                            value={form[MODALITY] || null}
                            name={MODALITY}
                            onChange={(_, newValue) => {
                                handleChange(MODALITY, newValue);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    name={MODALITY}
                                    label={formLabels[MODALITY]}
                                    required
                                    error={!!formErrors[MODALITY]}
                                    helperText={formErrors[MODALITY]}
                                />
                            )}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Autocomplete
                            options={CONTRACT_TYPES}
                            getOptionLabel={(option) => option.name}
                            value={form[CONTRACT_TYPE] || null}
                            name={CONTRACT_TYPE}
                            onChange={(_, newValue) => {
                                handleChange(CONTRACT_TYPE, newValue);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    name={CONTRACT_TYPE}
                                    label={formLabels[CONTRACT_TYPE]}
                                    required
                                    error={!!formErrors[CONTRACT_TYPE]}
                                    helperText={formErrors[CONTRACT_TYPE]}
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
