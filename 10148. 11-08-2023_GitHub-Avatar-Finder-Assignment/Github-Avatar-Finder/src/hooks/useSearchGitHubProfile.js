import { useEffect, useState } from "react";
import axios from "axios";

function useSearchGitHubProfile(search) {
    const [userList, setUserList] = useState({
        isLoading: true,
        users: [],
    });

    async function downloadData() {
        try {
            let response = {};
            if (search) {
                response = await axios.get(
                    `https://api.github.com/search/users?q=${search}`
                );

                setUserList(() => ({
                    isLoading:false,
                    users: response.data.items,
                }));
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setUserList((prev) => ({
            ...prev,
            isLoading:true,
        }));
        downloadData();
    }, [search]);

    return userList;
}

export default useSearchGitHubProfile;
