import React from "react";
import { Link } from "react-router-dom";

function Photo({ id, imageUrl }) {
    return (
        <div>
            <Link to={`/photo/${id}`}>
                <img
                    className="w-[350px] h-[250px] rounded-lg object-cover"
                    src={imageUrl}
                    alt="image"
                />
            </Link>
        </div>
    );
}

export default Photo;
