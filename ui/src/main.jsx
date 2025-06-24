import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Layout from "./Layouts/layout";

import "./index.css";
import { Dashboard, Members, Task } from "./pages";
import Graphics from "./pages/graphics";

const router = createBrowserRouter([
    {
        Component: App,
        children: [
            {
                path: "/",
                Component: Layout,
                children: [
                    {
                        path: "/",
                        Component: Dashboard,
                    },
                    {
                        path: "/consigna",
                        Component: Task,
                    },
                    {
                        path: "/integrantes",
                        Component: Members,
                    },
                    {
                        path: "/graficos/:graph",
                        Component: Graphics,
                    },
                ],
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
