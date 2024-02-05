import React from "react";
import useDebounce from "../../hooks/useDebounce";

function InputBox({ updateSearchTerm }) {
    const debouncedCallback = useDebounce((e) =>
        updateSearchTerm(e.target.value)
    );

    return (
        <>
            <input
                className="w-[250px] m-10 p-2 outline-none border-2 border-gray-400"
                type="text"
                placeholder="Enter name or username"
                onChange={debouncedCallback}
            />
        </>
    );
}

export default InputBox;
