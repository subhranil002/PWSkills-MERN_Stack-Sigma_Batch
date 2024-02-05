import React, { useState } from "react";
import GitHubCard from "../GitHubCard/GitHubCard";
import useSearchGitHubProfile from "../../hooks/useSearchGitHubProfile";

function GithubCardsContainer({ search }) {
    const userList = useSearchGitHubProfile(search);

    return (
        <div className="w-full flex flex-wrap items-center justify-center gap-6">
            {userList.isLoading ? (
                <p>Loading ...</p>
            ) : (
                userList.users.map((user) => (
                    <GitHubCard
                        key={user.id}
                        imageUrl={user.avatar_url}
                        username={user.login}
                    />
                ))
            )}
        </div>
    );
}

export default GithubCardsContainer;
