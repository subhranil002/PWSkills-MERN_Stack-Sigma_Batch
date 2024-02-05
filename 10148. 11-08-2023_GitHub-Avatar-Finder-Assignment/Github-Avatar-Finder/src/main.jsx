import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import router from "./routes/CustomRoutes";
import CustomRoutes from "./routes/CustomRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <CustomRoutes />
    </BrowserRouter>
);
