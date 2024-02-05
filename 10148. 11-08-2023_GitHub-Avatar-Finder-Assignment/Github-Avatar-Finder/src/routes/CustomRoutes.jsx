import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import GithubProfileDetails from "../components/GitHubProfileDetails/GitHubProfileDetails";

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:username" element={<GithubProfileDetails />} />
        </Routes>
    );
}

export default CustomRoutes;
