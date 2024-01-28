import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./routes/CustomRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <CustomRoutes />
    </BrowserRouter>
);
