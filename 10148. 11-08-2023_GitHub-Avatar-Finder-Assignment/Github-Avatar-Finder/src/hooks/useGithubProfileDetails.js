import { useEffect, useState } from "react";
import axios from "axios";

function useGitHubDetails(username) {
    const [userData, setUserData] = useState({
        isLoading: true,
        data: {},
    });

    async function downloadData() {
        const response = await axios.get(
            `https://api.github.com/users/${username}`
        );

        setUserData(() => ({
            isLoading: false,
            data: response.data,
        }));
    }

    useEffect(() => {
        setUserData((prev) => ({
            ...prev,
            isLoading: true,
        }));
        downloadData();
    }, [username]);

    return userData;
}

export default useGitHubDetails;
