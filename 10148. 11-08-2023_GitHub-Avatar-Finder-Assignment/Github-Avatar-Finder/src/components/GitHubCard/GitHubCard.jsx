import React from "react";
import { Link } from "react-router-dom";

function GitHubCard({ imageUrl, username }) {
    return (
        <div className="w-[250px] h-[250px]">
            <Link to={`user/${username}`}>
                <img
                    className="w-full h-full rounded-xl"
                    src={imageUrl}
                    alt="profile pic"
                />
                <span className="relative bottom-16 bg-white p-2 font-mono font-bold text-lg rounded-r-lg">
                    {username}
                </span>
            </Link>
        </div>
    );
}

export default GitHubCard;
