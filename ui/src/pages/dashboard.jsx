import { Box } from "@mui/material";
import { Form } from "../components";
import Salary from "../components/salary";
import { useState } from "react";

const Dashboard = () => {
    const [salary, setSalary] = useState(null);
    return (
        <Box>
            <Form setSalary={setSalary} />
            {salary && <Salary salary={salary} />}
        </Box>
    );
};

export default Dashboard;
