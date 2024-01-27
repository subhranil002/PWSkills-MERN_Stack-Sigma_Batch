import React from "react";

function Pokemon({ name, image }) {
    return (
        <div className="flex flex-col items-center justify-center gap-3 hover:bg-gray-100">
            <div className="text-lg font-bold font-mono tracking-widest">
                {name}
            </div>
            <div>
                <img className="w-[150px] h-[150px]" src={image} />
            </div>
        </div>
    );
}

export default Pokemon;
