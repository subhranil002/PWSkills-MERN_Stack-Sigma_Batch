import React from "react";
import { useParams } from "react-router-dom";
import useGithubProfileDetails from "../../hooks/useGithubProfileDetails";

function GitHubProfileDetails() {
    const { username } = useParams();
    const userData = useGithubProfileDetails(username);

    return (
        <div className="flex flex-col items-center justify-between">
            {userData.isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="flex flex-col gap-5 mt-10">
                    <img
                        className="h-[400px] w-[400px] rounded-md"
                        src={userData.data.avatar_url}
                        alt="profile photo"
                    />
                    <div className="flex flex-col gap-2">
                        <div className="text-2xl font-bold font-mono tracking-widest">
                            UserName: {userData.data.login}
                        </div>
                        <div className="text-2xl font-bold font-mono tracking-widest">
                            Name: {userData.data.name}
                        </div>
                        <div className="text-2xl font-bold font-mono tracking-widest">
                            Followers: {userData.data.followers}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GitHubProfileDetails;
