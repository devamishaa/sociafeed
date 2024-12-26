import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const el = document.getElementById("root");
if (!el) {
    throw new Error("Cannot find root element.");
}
const root = ReactDOM.createRoot(el);

// Use createBrowserRouter for clean URLs
const router = createBrowserRouter([
    {
        path: "/*",
        element: <App />,
    },
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
