import React from "react";
import { Link } from "react-router-dom";

function Pokemon({ name, image, id }) {
    return (
        <div className="flex flex-col items-center justify-center gap-3 hover:bg-gray-100">
            <Link to={`/pokemon/${id}`}>
                <div className="text-lg font-bold font-mono tracking-widest">
                    {name}
                </div>
                <div>
                    <img className="w-[150px] h-[150px]" src={image} />
                </div>
            </Link>
        </div>
    );
}

export default Pokemon;
